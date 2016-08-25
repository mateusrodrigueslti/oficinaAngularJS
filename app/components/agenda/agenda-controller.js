/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('agenda',[]);

app.controller('agendaController' , agendaController);

function agendaController(AgendaService) {
    var self = this;

    // VARIVEIS
    self.contatos = [];

    // FUNCOES
    self.recuperaContatos = recuperaContatos;


    function recuperaContatos() {
        AgendaService.pegaTodos().then(function (response) {
            console.log(response);
            self.contatos = response;
        })
    }

}