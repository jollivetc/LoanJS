(function(){
  'use strict';
  angular.module('loanJS.details')
    .controller('detailsCtrl', DetailsCtrl)

  DetailsCtrl.$inject = [`Loan`, `$location`, `$routeParams`]

  function DetailsCtrl (Loan, $location, $routeParams){
      var id = $routeParams.loanId;
      var vm = this;
      vm.currentLoan = Loan.get({loanId:id});

      vm.goToMaster = function(){
          $location.path("/");
      }
    }
  }
)();
