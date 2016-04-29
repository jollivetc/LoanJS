'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
    });
    describe('Loan', function(){
        var loan, httpBackend;
        beforeEach(inject(function(Loan, $httpBackend){
            loan = Loan;
            httpBackend = $httpBackend;
        }));
        it('should call backend', function () {
            var result = {foo: 'bar'};
            httpBackend.expectGET('http://localhost:3000/loans/1').respond(result);

            loan.get({loanId: 1}, function(data){
                expect(data.foo).toBe('bar');
            });
            httpBackend.flush();
        });
    });
});
