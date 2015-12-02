const utils = require('../utils');

angular.module('services.serviceStorageList', [])
.factory('serviceStorageList', function() {

	var storage = null, store = {};

	if(localStorage) {
		storage = window.localStorage;
		store = JSON.parse(storage.getItem('list')) || {};
	}


	var syncStore = function() {
		if(storage) storage.setItem('list', JSON.stringify(store));

		console.info('Store synced');
	}

	var get = function(guid) {

		angular.forEach(store, function(value, key) {
			if(!store[key]) delete store[key];
		});

		if(guid) return store[guid];

		return store;
	}

	var update = function(guid, value) {
		store[guid] = value;

		syncStore();
	}

	var create = function() {
		var guid = utils.generateGuid();
		
		store[guid] = '';

		syncStore();

		return guid;
	}

	var remove = function(guid) {
		delete store[guid];

		syncStore();
	}

	var truncate = function(guid) {
		store = {};

		syncStore();
	}

	return {get: get, remove: remove, update: update, create: create, truncate: truncate};
});
