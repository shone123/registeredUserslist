# registeredUserslist
login and register system.
# to run application please follow the below steps
1. download all files and open in a editor
2. include all dependencies libraries and files in index file.
  <!--libraries-->
   <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
   <link rel="stylesheet" type="text/css" href="css/app.css">
   
   <script type="text/javascript" src="js/angular.min.js"></script>
   <script type="text/javascript" src="js/angular-route.js"></script>
   <script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>

   <script type="text/javascript" src="js/angular-cookies.min.js"></script>

    <script type="text/javascript" src="app/app.js"></script>
   
    <script src="services/authenticationService.js"></script>
    <script src="services/flashServices.js"></script>

    <!-- Fake user service for demo that uses local storage -->
    <script src="services/localstorageService.js"></script>   

    <script src="controllers/homeController.js"></script>
    <script src="controllers/loginController.js"></script>
    <script src="controllers/registerController.js"></script>
    <script src="directives/inputvalidation_directive.js"></script>
   3. run on http server with node js.
   4. register with few details then login with email and password to see all the registerd users as 
      table format.
      you can delete and edit table row click on edit and delete button on that table.
