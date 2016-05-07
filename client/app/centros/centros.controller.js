'use strict';
(function(){

class CentrosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('y')
  .component('centros', {
    templateUrl: 'app/centros/centros.html',
    controller: CentrosComponent
  });

})();
