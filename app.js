(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.mensaje = "";


  $scope.revisaLista = function () {
    var platillos = 0;

    platillos = $scope.lunchMenu.split(",").length;

    if (platillos > 3) {
      $scope.mensaje = "Too Much!"
    } else {
      $scope.mensaje = "Enjoy!"
    }
  };

}

})();
