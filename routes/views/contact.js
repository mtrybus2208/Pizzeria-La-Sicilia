var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'contact';

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Contact').model.find();

		q.exec(function (err, result) {
			locals.data = result;
			next(err);
		});

	});
 
	// Render the view
	view.render('contact');
};
