
(function(){
    'use strict';
    angular.module('loanApp', ['ngResource', 'ngRoute', 'loanJS.common', 'loanJS.list', 'loanJS.details'])

      .config(['$routeProvider',function ($routeProvider) {
          $routeProvider
              .when('/',{
                  templateUrl : 'partials/master.html',
                  controller : 'mainCtrl',
                  controllerAs : 'mainCtrl'
              })
              .when('/details/:loanId', {
                  templateUrl : 'partials/details.html',
                  controller : 'detailsCtrl',
                  controllerAs : 'detailsCtrl'
              }).otherwise({redirectTo:'/'});
          }]);

})()
