'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
    });

    describe('directive', function(){
        var elm;
        beforeEach(inject(function($compile, $rootScope){
            var scope = $rootScope.$new();
            scope.pic = 'foo';
            elm = $compile("<tj-avatar personpic = 'pic'></tj-avatar>")(scope);
            scope.$apply();
        }));
        it('should replace html and set src for image', function () {
            expect(elm.children()[0].src).toContain('pics/foo');
        });
    });
});
