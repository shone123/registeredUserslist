(function () {
    'use strict';

    angular.module("app").controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        function register() {
           
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        
                        $(".success").show().slideDown( 300 ).delay( 800 ).slideUp( 400 );
                        $location.path('/login');
                    } else {
                          $(".error").show().slideDown( 300 ).delay(2000 ).slideUp( 400 );
                          $('#processing').hide();
                    }
                });
        }
    }

})();
