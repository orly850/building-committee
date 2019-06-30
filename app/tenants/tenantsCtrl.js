app.controller("tenantsCtrl", function ($scope, userSrv) {

   
    userSrv.getUser().then(function (users) {
        $scope.tenantArr = users;
    }, function (err) {
        $log.error(err);
    });

    console.log( $scope.tenantArr);
})

