'use strict';
(function(){

class HomeComponent {
  constructor($http, homeService) {
    this.message = 'Hello';
    this.$http = $http;
    this.homeservice = homeService;
    this.listaAnimales =[];
  }

  $onInit() {
    this.homeservice.getAnimales().then(response => {
      this.listaAnimales = response.data;
    console.log("desde Ctrl", this.messages);
  });
  }
}

angular.module('helpetApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeComponent
  });

})();
