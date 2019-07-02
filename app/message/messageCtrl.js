
app.controller("messageCtrl", function ($scope,  msgSrv,userSrv) {

    msgSrv.getMsg().then(function (msgArr) {
        $scope.msgArr = msgArr;
    }, function (err) {
        $log.error(err);
    })



  //-----------------------------------------------------
    $scope.active = userSrv.getActive();
  //-----------------------------------------------------

    $scope.val = "";
    $scope.query = "";
    $scope.filterMsg = function (Msg) {
        if (Msg.title.toLowerCase().includes($scope.query.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    }
      //-----------------------------------------------------

    $scope.isCommittee = function () {
    return $scope.active.isCommitteeMember
    

    }

})