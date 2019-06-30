app.controller("tenantsCtrl", function ($scope, userSrv,$log) {

   
    userSrv.getUser().then(function (users) {
        $scope.tenantArr = users;
    }, function (err) {
        $log.error(err);
    });

    $log.info("ok" + JSON.stringify($scope.tenantArr))
})

