
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

      $scope.dueDateUpdt = function() {
        // return [5, 13];
      }
    

    
//-----------------------------------
  // Chart.JS
  $scope.getChartData = function() {
    return [5, 13];
  }
  
  $scope.getChartLabels = function() {
    return ["blue", "red"];
  }
})
