
app.controller("updatMsgCtrl", function ($scope, msgSrv) {

    $scope.details="" ;

        $scope.editMsg = function () {
        msgSrv.editMsg($scope.details);
        $scope.details="" ;
        }

})