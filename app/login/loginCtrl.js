app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {
    $scope.loginError = false;
    $scope.name = "";
    $scope.pass = "";


    $scope.login = function () {

        userSrv.login($scope.name, $scope.pass).then(function (active) {
            $log.info("ok" + JSON.stringify(active));
                $location.path("/message");
        }, function (err) {
            $scope.loginError = true;

        });
    }


});