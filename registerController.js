(function () {
    'use strict';

    angular.module("app").controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope'];
    function RegisterController(UserService, $location, $rootScope) {
        var vm = this;

        vm.register = register;

        function register() {
           
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        
                        $(".success").show().slideDown( 600 ).delay(1000).slideUp(600);
                        $location.path('/login');
                    } else {
                          $(".error-register").show().slideDown( 600 ).delay(1000 ).slideUp( 600 );
                          $('#processing').hide();
                    }
                });
        }
    }

})();
