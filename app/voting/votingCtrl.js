
app.controller("votingCtrl", function ($scope, voteSrv, userSrv) {
    
    $scope.active = userSrv.getActive();
    //-------------------------------------
    if ($scope.active) {
        $scope.isCommittee = function () {
          return $scope.active.isCommitteeMember
        }
      }
    
      //----------------------------------
    
    
    voteSrv.getVots().then(function (arr) {
        $scope.votesArr = arr;
      }, function (err) {
        $log.error(err);
      })

      //----------update due Date---------------
      // $scope.dueDateUpdt = function() {
      //   voteSrv.dueDateUpdt(vote);
        
      // }   
//-----------------------------------
  // Chart.JS
  $scope.getChartData = function() {
    return [5, 17];
  }
  
  $scope.getChartLabels = function() {
    return ["blue", "red"];
  }
})
