app.controller("navbarCtrl", function ($scope, $location, userSrv) {


    $scope.isLog = function () {
        return userSrv.islogedin();
    }

    $scope.logout = function () {
        userSrv.logedout();
        $location.path("/");

    }
    //==========================
    $scope.active = userSrv.getActive();

    $scope.tenant = function () {

        if ($scope.isLog() && $scope.active.isCommitteeMember) {
            return true;
        }

        else {
            return false;
        }
    }

})