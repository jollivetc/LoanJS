(function(){
  'use strict';
  angular.module('loanJS.common')
      .directive('tjAvatar', tjAvatar);
  function tjAvatar (){
    return{
        restrict: 'E',
        replace: true,
        scope: {
            personpic: '='
        },
        template: '<div class="avatar label">' +
            '<img ng-src="{{personpic | picUrl}}" class="thumb">' +
            '</div>'

    }
  }

})();
