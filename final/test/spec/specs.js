'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
    });

    describe('mainCtrl', function(){
        var mainCtrl, location;
        var loanMock = {
            query: function () {
                return 42;
            }
        };
        beforeEach(inject(function($controller, $location){
            location = $location;
            spyOn(location, 'path');
            mainCtrl = $controller('mainCtrl', {
                Loan: loanMock,
                $location: location
            });
        }));
        it('should set persons', function () {
            expect(mainCtrl.persons.length).toBe(4);
        });
        it('should call query', function () {
            expect(mainCtrl.loans).toBe(42);
        });
        it('should call location', function () {
            mainCtrl.details(1);
            expect(location.path).toHaveBeenCalledWith('/details/1');
        });
    });

    describe('filter', function(){
        var filter;
        beforeEach(inject(function($filter){
            filter = $filter('picUrl');
        }));
        it('should add pics', function () {
            expect(filter('foo')).toBe('pics/foo');
        });
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
    describe('directive', function(){
        var elm;
        beforeEach(inject(function($compile, $rootScope){
            var scope = $rootScope.$new();
            scope.pic = 'foo';
            elm = $compile("<tj-avatar personpic = 'pic'></tj-avatar>")(scope);
            scope.$digest();
        }));
        it('should replace html', function () {
            expect(elm.children()[0].src).toContain('pics/foo');
        });
    });
});
