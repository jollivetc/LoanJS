
(function(){
    'use strict';
    angular.module('loanApp', ['ngResource', 'ngRoute', 'loanJS.common', 'loanJS.list', 'loanJS.details', 'loanJS.tableBtn'])

      .config(['$routeProvider',function ($routeProvider) {
          $routeProvider
              .when('/',{
                  templateUrl : 'scripts/list/list.html',
                  controller : 'ListCtrl',
                  controllerAs : 'listCtrl'
              })
              .when('/details/:loanId', {
                  templateUrl : 'scripts/details/details.html',
                  controller : 'DetailsCtrl',
                  controllerAs : 'detailsCtrl'
              }).otherwise({redirectTo:'/'});
          }]);

})()
