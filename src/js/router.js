const utils = require('./utils');

module.exports = function($routeProvider) {
	var mainAction = {
		template: utils.html('t-list'),
		controller: 'listCtrl'
	}

	var addAction = {
		template: utils.html('t-edit'),
		controller: 'editCtrl'
	}

	$routeProvider
		.when('/', mainAction)
		.when('/list', mainAction)

		.when('/add', addAction)
		.when('/edit/:id', addAction)

		.otherwise({
        	redirectTo: '/list'
      	});
}