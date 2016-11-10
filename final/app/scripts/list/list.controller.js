(function () {
    'use strict';
    angular.module('loanJS.list')
        .controller('ListCtrl', ListCtrl)

    ListCtrl.$inject = ['LoanService', '$location'];

    function ListCtrl(loanService, $location) {
        var persons = [
            {
                name: 'Luke Skywalker',
                picture: 'lukeskywalker.jpg'
            },
            {
                name: 'Doctor Who',
                picture: 'doctorWho.jpg'
            },
            {
                name: 'Actarus',
                picture: 'actarus.jpg'
            },
            {
                name: 'Capitaine Kirk',
                picture: 'kirk.jpeg'
            }
      ];
        
        
        
        var vm = this;
        
        vm.loans = loanService.findAll();
        vm.persons = persons;
        vm.newLoan = {}
        vm.remaining = remaining;
        vm.add = add;
        vm.goToDetails = goToDetails;

        function remaining() {
            return vm.loans.reduce(function (count, loan) {
                return loan.returned ? count : count + 1;
            }, 0);
        };

        function add() {
            loanService.add(vm.newLoan)
                .then(function (returnedLoan) {
                    vm.loans.push(returnedLoan)
                    vm.newLoan ={};
                })
        };

        function goToDetails(id) {
            $location.path("/details/" + id);
        };

    }
})();