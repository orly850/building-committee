app.controller("navbarCtrl", function($scope,userSrv){

    

    $scope.func =function(){

        return userSrv.islogedin();

    }

})