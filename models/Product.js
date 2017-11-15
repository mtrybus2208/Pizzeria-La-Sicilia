var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Product.add({
	name: { type: String, required: false },
	number: { type: Types.Number, required: false },
  price: { type: String, required: false },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	image: { type: Types.CloudinaryImage },
	desc: {
		brief: { type: String, height: 150 }
	},
	hot:{ type: Types.Select, numeric: true, options: [{ value: 1, label: '1' }, { value: 2, label: '2' },{ value: 3, label: '3' }] },
	categories: { type: Types.Relationship, ref: 'ProductCategory', many: false },
});

Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Product.defaultColumns = 'name, price|20%, number|20%, categories|20%,';
Product.register();
