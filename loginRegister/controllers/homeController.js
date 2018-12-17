(function () {
    'use strict';

   angular.module("app").controller('HomeController', HomeController);

    HomeController.$inject = ['UserService','$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.selected = {};
        vm.allUsers = [];
        vm.selectedUser = [];
        vm.deleteUser = deleteUser;
        vm.getTemplate = getTemplate;
        vm.editContact = editContact;
        vm.saveContact = saveContact;
        vm.reset = reset;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

        function getTemplate(user) {
            if (user.id === vm.selected.id) return 'edit';
            else return 'display';
        };

        function editContact(user) {
            vm.selected = angular.copy(user);
        };

        function saveContact(idx) {
            console.log("Saving contact");
            vm.allUsers[idx] = angular.copy(vm.selected);
            reset();
        };
        
        function reset() {
            vm.selected = {};
        };
}

})();
