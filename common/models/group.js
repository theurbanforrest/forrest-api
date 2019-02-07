'use strict';

module.exports = function(Group) {


	 var app = require('../../server/server');
	 var Person = app.models.person;
	 Group.hasAndBelongsToMany(Person);
	 Person.hasAndBelongsToMany(Group);
	 
};
