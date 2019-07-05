
app.controller("newVoteCtrl", function ($scope,  userSrv, voteSrv) {


    $scope.user = userSrv.getActive();

    $scope.title ;
    $scope.details ;
    $scope.priorty ;
    $scope.name = $scope.user.name;

    $scope.newVote = function () {
        voteSrv.newVote( $scope.name,  $scope.title, $scope.details, $scope.priorty)
    };

})