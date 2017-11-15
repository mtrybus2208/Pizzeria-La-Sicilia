var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	/* Init locals  */
	locals.section = 'menu';  
	locals.prodCategory = [];
	locals.categoryParam = req.params.name;
	locals.products= [];
	locals.data = [];
  
	/* Load all products categories */
	view.on('init', function (next) {
		var q = keystone.list('ProductCategory').model.find();	
		 q.exec(function (err, results) {
			 locals.prodCategory = results;
			 next(err)
		 })
	})

	/* Load all products*/
	view.on('init', function (next) {
		var relatedProducts = keystone.list('Product').model.find();
		relatedProducts.exec(function (err, results) {
			locals.products = results;			 
			next(err);
		})
	});

	/*Connect category to related products */
	view.on('init', function (next) {
		locals.prodCategory.forEach(function(category){
			var item = {
				categoryName: category.name,
				menuName: category.menu_name,
				products: []
			}
			locals.products.forEach(function(product){
				if(category.id == product.categories){
					item.products.push(product);		 
				}
			})
			locals.data.push(item);
		})		 
		next();
	}) 

	/*  Render the view */ 
	view.render('product');
};

