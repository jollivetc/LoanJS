(function(){
  'use strict';
  angular.module('loanJS.common')
    .factory('Loan', Loan);

  Loan.$inject=['$resource'];

  function Loan($resource){
    var LoanService = $resource(
           'http://localhost:3000/loans/:loanId',
           {},
           {
               update:{method:'PUT'}
           }
       );
    LoanService.prototype.done=false;
    return LoanService;
  };
})()
