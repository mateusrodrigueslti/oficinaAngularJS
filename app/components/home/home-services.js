angular.module('homeService', [])
    .service('HomeService', HomeService);

function HomeService($http) {
    return {
        adicionaContato:adicionaContato
    };

    function adicionaContato(contato) {
        return $http.post('http://10.5.102.213:8080/contatos' , contato).then(_tratarSucesso, _tratarErro)
    }

    function _tratarSucesso(response) {
        return response.data;
    }

    function _tratarErro(response) {
        console.log(response);
    }
}
