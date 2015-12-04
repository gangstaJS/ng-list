const angular = require('angular');
const routerConf = require('./router');
require('./service/storage');

var ngList = angular.module('ngList', [require('angular-route'), 'services.serviceStorageList']);

require('./directives/itemsRange')(ngList);

require('./controllers/list')(ngList);
require('./controllers/edit')(ngList);

ngList.config(routerConf);



