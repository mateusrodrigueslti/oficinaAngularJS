/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('home',[]);

app.controller("homeController" , homeController);

function homeController($state, $mdSidenav, $http) {
    var self = this;
    // VARIAVEIS
    self.mensagem = "controlador da home";

    // FUNÇÕES
    self.vaiParaAgenda = vaiParaAgenda;
    self.abrirMenu     = abrirMenu;

    function vaiParaAgenda () {
        $state.go('agenda');
    }

    function abrirMenu(){
        $mdSidenav('left').toggle();
    }
}