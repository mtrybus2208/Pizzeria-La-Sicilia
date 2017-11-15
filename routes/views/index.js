var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	/* Load the categories and sort by name */
	// view.query('product-categories', keystone.list('ProductCategory').model.find().sort('name'));
	view.on('init', function (next) {
		keystone.list('ProductCategory').model.find().sort('name').exec(function (err, results){
			if (err || !results.length) {
				return next(err);
			}
			locals.categories = results;
			next(err);
		})
	})

	// Render the view
	view.render('index');
};
