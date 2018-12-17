

(function() {

  angular.module("app");
  
  angular.module("app").directive('onlyLettersInput', onlyLettersInput);
  
  angular.module("app").directive('validEmail', validEmail);
  angular.module("app").directive('capitalizeFirst', capitalizeFirst);

  capitalizeFirst.$inject = ['$parse'];
  
  function onlyLettersInput() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
          function fromUser(text) {
            var transformedInput = text.replace(/[^a-zA-Z]/g, '');
            //console.log(transformedInput);
            if (transformedInput !== text) {
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
            }
            return transformedInput;
          }
          ngModelCtrl.$parsers.push(fromUser);
        }
      };
  };
  
  function validEmail() {
      return {
        require: 'ngModel',
        link: function (scope, element, attrs, control) {
            control.$parsers.push(function (viewValue) {
                var newEmail = control.$viewValue;
                control.$setValidity("invalidEmail", true);
                if (typeof newEmail === "object" || newEmail == "") return newEmail;  // pass through if we clicked date from popup
                if (!newEmail.match(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/))
                    control.$setValidity("invalidEmail", false);
                return viewValue;
            });
        }
      };
  }

  function capitalizeFirst($parse) {

      return {
         require: 'ngModel',
         link: function(scope, element, attrs, modelCtrl) {
            var capitalize = function(inputValue) {
               if (inputValue === undefined) { inputValue = ''; }
               var capitalized = inputValue.charAt(0).toUpperCase() +
                                 inputValue.substring(1);
               if(capitalized !== inputValue) {
                  modelCtrl.$setViewValue(capitalized);
                  modelCtrl.$render();
                }         
                return capitalized;
             }
             modelCtrl.$parsers.push(capitalize);
             capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
        }
      };
  }

})();