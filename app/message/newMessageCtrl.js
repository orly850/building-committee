
app.controller("newMesCtrl", function ($scope,  userSrv, msgSrv) {

    $scope.test = "dfgdfh";

    $scope.user = userSrv.getActive();

    $scope.title ;
    $scope.details ;
    $scope.priorty ;
    $scope.name = $scope.user.name;

    $scope.newMsg = function () {
        msgSrv.newMsg( $scope.name,  $scope.title, $scope.details, $scope.priorty)
    };

})


