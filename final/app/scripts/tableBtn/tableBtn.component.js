(function(){
    "use strict";
    angular
        .module('loanJS.tableBtn')
        .component('tableBtn', {
            templateUrl:'scripts/tableBtn/tableBtn.html',
            controller: tableLineCtrl,
            bindings:{
                loan:'=',
                onGoToDetails:'&'
            }
        });

    function tableLineCtrl(){
        this.goToDetails = function(){
            this.onGoToDetails({id:this.loan.id})
        }
    }
})()