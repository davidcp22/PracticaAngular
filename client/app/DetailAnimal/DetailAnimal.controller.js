'use strict';
(function(){

class DetailAnimalComponent {
  constructor($http, DetailAnimal) {
    this.message = 'Hello';
    this.$http = $http;
    this.detailAnimalService = DetailAnimall;
  }
}

  this.detailAnimalService.getDetailAnimales().then(response =>{
    this.listaAnimales = response.data;
  });


  this.getDetailAnimal = function (idAnimal,this.listaAnimales) {

    var animal = {
      idAnimal:"",
      nombreAnimal:"",
      estadoAnimal:"",
      ubicacionAnimal:"",
      imagenAnimal:""
    }
    angular.forEach(listaAnimales, function(item){
      if(item.id === id)
      {
        item.id = thi.animal.idAnimal;
        item.nombre = this.animal.nombreAnimal;
        item.estado = this.animal.estadoAnimal;
        item.ubiccacion = this.animal.ubicacionAnimal;
      }
    });
    return animal;
  }

angular.module('helpetApp')
  .component('DetailAnimal', {
    templateUrl: 'app/DetailAnimal/DetailAnimal.html',
    controller: DetailAnimalComponent
  });

})();
