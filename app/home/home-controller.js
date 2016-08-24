/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('home',[]);

app.controller("homeController" , homeController);

function homeController($scope, $state) {
    var controlador = this;

    controlador.mensagem = "controlador da home";
    $scope.vaiParaAgenda = function () {
        $state.go('agenda');
    }
}