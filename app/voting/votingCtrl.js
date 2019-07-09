
app.controller("votingCtrl", function ($scope, voteSrv, userSrv) {

  $scope.active = userSrv.getActive();
  //-------------------------------------
  $scope.isCommittee = function () {
      return $scope.active.isCommitteeMember
    }



  //----------------------------------


  voteSrv.getVots().then(function (arr) {
    $scope.votesArr = arr;
  }, function (err) {
    $log.error(err);
  })

  // ----------update due Date---------------
  // $scope.newDate=Date.now();

  $scope.newDate ;
  $scope.DateUpdt = function (vote) {
    voteSrv.seledtedvote(vote);
    console.log($scope.newDate);
    voteSrv.dueDateUpdt(vote.newDate);

  }


  //---------------get errors in console log--------------------
  // Chart.JS
  // $scope.getChartData = function() {
  //   return [5, 17];
  // }

  // $scope.getChartLabels = function() {
  //   return ["blue", "red"];
  // }
})
