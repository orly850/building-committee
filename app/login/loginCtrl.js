app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {
    $scope.loginError = false;
    $scope.name = "";
    $scope.pass = "";


    $scope.login = function () {

        userSrv.login($scope.name, $scope.pass).then(function (activ) {
            $log.info("ok" + JSON.stringify(activ));
            $location.path("/message");
        }, function (err) {
            $scope.loginError = true;

        });
    }


    // $scope.login = function () {
    //     if ($scope.name === "lea" && $scope.pass === "1") {
    //         $location.path("/message");
    //     } else {
    //         $scope.loginError = true;

    //     }
    // }




});