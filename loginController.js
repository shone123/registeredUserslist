(function () {
    'use strict';

    angular.module("app").controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService'];
    function LoginController($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            $('#processing').show();
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);

                    $('#processing').hide();
                    $location.path('/home');
                } else {                    
                    $(".error").show().slideDown( 300 ).delay(2000 ).slideUp( 400 );
                    $('#processing').hide();
                }
            });
        };
    }

})();
