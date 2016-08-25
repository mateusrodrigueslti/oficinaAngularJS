/**
 * Created by Mateus Rodrigues on 24/08/2016.
 */
var app = angular.module('home',[]);

app.controller("homeController" , homeController);

function homeController($state, $mdSidenav, HomeService) {
    var self = this;


    // VARIAVEIS
    self.mensagem = "controlador da home";
    self.telefones = [];

    // FUNÇÕES
    self.vaiParaAgenda = vaiParaAgenda;
    self.abrirMenu     = abrirMenu;
    self.adiciona = adiciona;
    self.addTelefone = addTelefone;

    function addTelefone() {
        var telefone = angular.copy(self.pessoa.telefone);
        self.telefones.push(telefone);
    }

    function vaiParaAgenda () {
        $state.go('agenda');
    }

    function adiciona() {
        var contatoTemp = {
            nome: self.pessoa.nome,
            numeros: self.telefones
        };
        HomeService.adicionaContato(contatoTemp).then(function (response) {
            console.log(response)
        })
    }

    function abrirMenu(){
        $mdSidenav('left').toggle();
    }
}