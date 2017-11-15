var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * About Page Model
 * =============
 */
var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
	name: { type: String, required: true },
	desc: { type: String, required: false }
});

About.register();
