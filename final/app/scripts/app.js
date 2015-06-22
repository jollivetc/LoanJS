'use strict';

var app = angular.module('loanApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {
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

app.controller('mainCtrl', ['Loan', '$location', function(Loan, $location){

    //Define the model for persons
    var persons = [
        {name: 'Luke Skywalker', picture: 'lukeskywalker.jpg'},
        {name: 'Doctor Who', picture: 'doctorWho.jpg'},
        {name: 'Actarus', picture: 'actarus.jpg'},
        {name: 'Capitaine Kirk', picture: 'kirk.jpeg'}
    ];
    var vm = this;

    vm.loans = Loan.query();
    vm.persons = persons;
    vm.newLoan = {}

    vm.remaining = function () {
        return vm.loans.reduce(function (count, loan) {
            return loan.done ? count : count + 1;
        }, 0);
    };

    vm.ajouter = function(newLoan, selectedPerson){
        //var loan = {object: newLoan.loanedObject, person: selectedPerson, done: false};
        var loan = new Loan();
        loan.object = vm.newLoan.loanedObject;
        loan.person = vm.selectedPerson;
        loan.$save(function(){
            vm.loans = Loan.query();
        });

        vm.newLoan = {};
        vm.selectedPerson = {};
    };


    vm.details = function(id){
        $location.path("/details/" + id);

    };


}]);

app.controller('detailsCtrl', [`Loan`, `$location`, `$routeParams`, function(Loan, $location, $routeParams){
    var id = $routeParams.loanId;
    var vm = this;
    vm.currentLoan = Loan.get({loanId:id});

    vm.goToMaster = function(){
        $location.path("/");
    }
}]);

app.filter('picUrl', function () {
    return function (personPic) {
        if(personPic){
            return 'pics/' + personPic;
        }else{
            return undefined;
        }
    };
});

app.factory('Loan',['$resource',function($resource){
    var Loan = $resource(
           'http://localhost:3000/loans/:loanId',
           {},
           {
               update:{method:'PUT'}
           }
       );
        Loan.prototype.done=false;
        return Loan;
}]);

app.directive('tjAvatar', function(){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            personpic: '='
        },
        template: '<div class="avatar label">' +
            '<img ng-src="{{personpic | picUrl}}" class="thumb">' +
            '</div>'

    }
});
