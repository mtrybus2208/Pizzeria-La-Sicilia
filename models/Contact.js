var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Page Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contact.add({
	name: { type: String, required: true },
	desc: { type: String, required: false }
});

Contact.register();
