var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'about';

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('About').model.find();

		q.exec(function (err, result) {
			locals.data = result;
			next(err);
		});

	});
 
	// Render the view
	view.render('about');
};
