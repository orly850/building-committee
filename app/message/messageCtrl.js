
app.controller("messageCtrl", function ($scope, $http, msgSrv) {


    msgSrv.getMsg().then(function (msgArr) {
        $scope.msgArr = msgArr;
    }, function (err) {
        $log.error(err);
    })


    $scope.val = "";
    $scope.query = "";

    $scope.filterMsg = function (Msg) {
        if (Msg.title.toLowerCase().includes($scope.query.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    };
    $scope.newMsg = function () {
 
    msgSrv.newMsg("6", "lea", "2019-06-17", "new massege", "new massege", "info");
 };

})