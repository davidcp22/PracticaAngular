'use strict';

angular.module('y')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tips', {
        url: '/tips',
        template: '<tips></tips>'
      });
  });
