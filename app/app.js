/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module("frontEndMean", ['ngMaterial' ,
    'ui.router',
    'home',
    'agenda'
    ]);

app.controller("frontEndMeanController", function ($scope) {
    $scope.mensagem = 'Ola mundo !';
    $scope.contatos = [];

    $scope.dataAgora = new Date();
    $scope.adicionaUm = function () {
        var pessoaTemp = angular.copy($scope.pessoa);
        $scope.contatos.push(pessoaTemp);
        $scope.pessoa = {};
    }
});

app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home/home.html",
            controller: "homeController as mateus"
        })
        .state('agenda', {
            url: "/agenda",
            templateUrl: "agenda/agenda.html",
            controller: "agendaController"
        })
});