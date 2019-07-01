app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {
    $scope.loginError = false;
    $scope.name = "";
    $scope.pass = "";


    $scope.login = function () {

        userSrv.login($scope.name, $scope.pass).then(function (activ) {
            $log.info("ok" + JSON.stringify(activ));

            if (activ.isCommitteeMember) {
                $location.path("/message");
            } else {

                $location.path("/tenants");
            }


            // $location.path("/message");
        }, function (err) {
            $scope.loginError = true;

        });
        // $scope.loginError = true;
    }


});