/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('agenda',[]);

app.controller("agendaController" , agendaController);

function agendaController($scope) {
    $scope.mensagem = "controlador da agenda";
}