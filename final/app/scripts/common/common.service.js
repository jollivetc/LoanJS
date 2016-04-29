(function () {
    'use strict';
    angular.module('loanJS.common')
        .service('LoanService', LoanService);

    LoanService.$inject = ['Loan'];

    function LoanService(Loan) {
        this.findAll = findAll;
        this.getById = getById;
        this.add = add;
        
        function findAll(){
            return Loan.query();
        }
        
        function getById(id){
            return Loan.query({id: id});
        }
        
        function add(newLoan){
            return new Loan(newLoan).$save();
        }
    }
})()