app.controller("loginCtrl", function ($scope, $location) {
    $scope.loginError = false;
    $scope.name = "";
    $scope.pass = "";

    $scope.login = function () {
        if ($scope.name === "lea" && $scope.pass === "1") {
            $location.path("/message");
        } else {
            $scope.loginError = true;

        }
    }


    

});