'use strict';

angular.module('helpetApp.DetailAnimal')
  .service('DetailAnimal', function () {

    var self = this;

    self.getDetailAnimales = function(){
      var request = $http({
        method: 'GET',
        url: 'https://gist.githubusercontent.com/davidcp22/d1967026b327ce66af7371725cea4c8a/raw/0c9065dbe29df908d9a468e43a547d4e9ec4b524/animales.json'
      });

      return request;
    };
    
  });
