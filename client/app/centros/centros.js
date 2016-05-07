'use strict';

angular.module('y')
  .config(function ($stateProvider) {
    $stateProvider
      .state('centros', {
        url: '/centros',
        template: '<centros></centros>'
      });
  });
