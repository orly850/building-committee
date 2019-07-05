
app.controller("messageCtrl", function ($scope, msgSrv, userSrv) {
  
  msgSrv.getMsg().then(function (msgArr) {
    $scope.msgArr = msgArr;
  }, function (err) {
    $log.error(err);
  })



  //-----------------------------------------------------
  $scope.active = userSrv.getActive();
  //-----------------------------------------------------
  $scope.isComeete = function () {

    return   $scope.active.isCommitteeMember;
  }
  

  $scope.val 
  $scope.val2 = "";

  $scope.query = "";
  $scope.filterMsg = function (Msg) {
    if (Msg.title.toLowerCase().includes($scope.query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  //-----------------------------------------------------
  if ($scope.active) {
    $scope.isCommittee = function () {
      return $scope.active.isCommitteeMember
    }
  }

  //----------------------------------
  $scope.deleteMsg = function (mes) {

    msgSrv.deleteMsg(mes);

  }
  //   ---------------------------

  $scope.editMsg = function (msg) {

    msgSrv.seledtedMsg(msg);

  }

  // ------------------------------------4/7 read indication ---- not working

  // $scope.readMsg = [];

  $scope.openMsg = function (Msg) {
    Msg.wasRead = true;
  }

})