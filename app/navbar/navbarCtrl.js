app.controller("navbarCtrl", function ($scope, $location,userSrv) {


    $scope.isLog =function(){
        return userSrv.islogedin();
    }

    $scope.logout =function(){
        userSrv.logedout();
        $location.path("/");

    };

    

    //     $scope.isLoggedIn = function() {
    //     return userSrv.isLoggedIn();
    // }

    // $scope.logout = function() {
        
    //     $location.path("/");
    // }


})