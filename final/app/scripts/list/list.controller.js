(function(){
  'use strict';
  angular.module('loanJS.list')
    .controller('mainCtrl', MainCtrl)

  MainCtrl.$inject = ['Loan', '$location'];

  function MainCtrl (Loan, $location){

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
  }
})();
