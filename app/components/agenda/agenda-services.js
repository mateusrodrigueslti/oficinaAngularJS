angular.module('agendaService', [])
    .service('AgendaService', AgendaService);

function AgendaService($http) {
    return {
        pegaTodos:pegaTodos
    };


    function pegaTodos() {
        return $http.get('http://10.5.102.213:8080/contatos').then(_tratarSucesso,_tratarErro)
    }

    function _tratarSucesso(response) {
        return response.data;
    }

    function _tratarErro(response) {
        console.log(response);
    }
}
