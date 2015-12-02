module.exports = function(ngInstance) {
	ngInstance.controller('listCtrl', [
		'$scope', 
		'$location',
		'$route',
		'serviceStorageList', 
		function($scope, $location, $route, serviceStorageList) {
			$scope.items = serviceStorageList.get();
	
			$scope.rm = function(id) {
				serviceStorageList.remove(id);
				$route.reload();
			}

			$scope.clearStore = function() {
				serviceStorageList.truncate();
				$route.reload();
			}

		}
	]);
}