app.controller("tenantsCtrl", function ($scope, userSrv) {

    userSrv.getUser().then(function (users) {
        $scope.tenantArr = users;
    }, function (err) {
        $log.error(err);
    });

    // //-----------------------------------------------------
    // $scope.isComeete = function () {
  
    //   return   $scope.active.isCommitteeMember;
    // }

    $scope.deleteUser = function (user) {

        userSrv.deleteUser(user);
    
    }

})

