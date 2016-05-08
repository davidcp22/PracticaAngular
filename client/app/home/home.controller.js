'use strict';
(function(){

class HomeComponent {
  constructor($http, homeService) {
    this.message = 'Hello';
    this.$http = $http;
    this.homeservice = homeService;
    this.listaAnimales =[];
    this.InfoDetalleAnimal=[];
  }

  $onInit() {
    this.homeservice.getAnimales().then(response => {
      this.listaAnimales = response.data;
    console.log("desde Ctrl", this.messages);
  });
  }

    InfoDetalleAnimal  = this.homeservice.getDetalleAnimal(idAnimal);
      
  

  
  
}

angular.module('helpetApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: HomeComponent
  });

})();
