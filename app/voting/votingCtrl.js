
app.controller("votingCtrl", function ($scope, voteSrv, userSrv) {
    
    
    voteSrv.getVots().then(function (arr) {
        $scope.votesArr = arr;
      }, function (err) {
        $log.error(err);
      })
    

})
