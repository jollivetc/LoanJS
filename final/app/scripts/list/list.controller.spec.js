'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
    });

    describe('listCtrl', function(){
        var listCtrl, location;
        var loanServiceMock = {
            findAll: function () {
                return 42;
            }
        };
        beforeEach(inject(function($controller, $location){
            location = $location;
            spyOn(location, 'path');
            listCtrl = $controller('ListCtrl', {
                LoanService: loanServiceMock,
                $location: location
            });
        }));
        it('should set persons array', function () {
            expect(listCtrl.persons.length).toBe(4);
        });
        it('should call findAll on mock and exposed the result ', function () {
            expect(listCtrl.loans).toBe(42);
        });
        it('should call location when goToDetails is called', function () {
            listCtrl.goToDetails(1);
            expect(location.path).toHaveBeenCalledWith('/details/1');
        });
    });
});
