'use strict';

angular.module('helpetApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>'
      });
  });
