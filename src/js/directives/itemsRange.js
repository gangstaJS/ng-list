const utils = require('../utils');

module.exports = function(ngInstance) {

	ngInstance.directive('itemsRange', function() {        
        return {
        	restrict: 'A',
        	scope: false,
            template: utils.html('t-item')
        }
    });

}