const angular = require('angular');
const routerConf = require('./router');
const listCtrl = require('./directives/list');
const editCtrl = require('./directives/edit');

require('./service/storage');


var ngList = angular.module('ngList', [require('angular-route'), 'services.serviceStorageList']);

ngList.config(routerConf);

listCtrl(ngList);
editCtrl(ngList);


