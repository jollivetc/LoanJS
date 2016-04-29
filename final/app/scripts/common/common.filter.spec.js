'use strict';
describe('loanApp', function(){
    beforeEach(function () {
        module('loanApp');
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
});
