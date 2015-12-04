const utils = require('../utils');

module.exports = function(ngInstance) {
	ngInstance.controller('editCtrl', [
		'$scope', 
		'$location', 
		'$routeParams', 
		'serviceStorageList', 
		function($scope, $location, $routeParams, serviceStorageList) {
	
			if($routeParams.id == undefined) {
				$location.path('/edit/' + serviceStorageList.create());
			} else {
				$scope.value = serviceStorageList.get($routeParams.id);
			}

			$scope.addItem = function() {
				serviceStorageList.update($routeParams.id, $scope.value);
				$location.path('/list');
			}

		}
	]);
}