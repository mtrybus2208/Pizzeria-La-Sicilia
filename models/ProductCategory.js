var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var ProductCategory = new keystone.List('ProductCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ProductCategory.add({
	name: { type: String, required: true },
	menu_name: {type: String, required: false},
	image: { type: Types.CloudinaryImage },
	products: { type: Types.Relationship, ref: 'Product', many: true }
});

ProductCategory.relationship({ ref: 'Product', path: 'products', refPath: 'categories' });

ProductCategory.register();
