app.controller("loginCtrl", function ($scope) {
    $scope.loginError = false;
    $scope.name = "";
    $scope.pass = "";

    $scope.login = function () {
        if ($scope.name === "lea" && $scope.pass === "1") {
            $scope.loginError = false;
        } else {
            $scope.loginError = true;

        }
    }


    

});