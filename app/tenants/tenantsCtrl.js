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
//--------------------- filter
// $scope.val 
// $scope.val2 = "";

$scope.query = "";
$scope.filterTenant = function (tenent) {
  if (tenent.name.toLowerCase().includes($scope.query.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

// this.name = name;
// this.email = email;
// this.appartment = appartment;


})

