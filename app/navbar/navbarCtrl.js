app.controller("navbarCtrl", function($scope,userSrv){

    

    $scope.isLog =function(){

        return userSrv.islogedin();

    }

})