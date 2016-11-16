'use strict';
describe('component: tableBtn', function() {
  var $componentController;

  beforeEach(module('loanApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should expose a `loan` object', function() {
    // Here we are passing actual bindings to the component
    var bindings = {loan: {object: 'Tardis'}};
    var ctrl = $componentController('tableBtn', null, bindings);

    expect(ctrl.loan).toBeDefined();
    expect(ctrl.loan.object).toBe('Tardis');
  });

  it('should call the `onGoToDetails` binding, when going to details', function() {
    var onGoToDetailsSpy = jasmine.createSpy('onGoToDetails');
    var bindings = {loan: {id:1}, onGoToDetails: onGoToDetailsSpy};
    var ctrl = $componentController('tableBtn', null, bindings);

    ctrl.goToDetails();
    expect(onGoToDetailsSpy).toHaveBeenCalledWith({id: ctrl.loan.id});
  });

});