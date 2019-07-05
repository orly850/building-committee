
app.controller("newUserCtrl", function ($scope,  userSrv) {



    // $scope.communityId ;
    $scope.name ;
    $scope.email ;
    $scope.appartment ;
    // $scope.isCommitteeMember ;
    $scope.password ;
    $scope.pic ;

   

    $scope.newUser = function () {
        userSrv.newUser(  $scope.name, $scope.email, $scope.appartment, $scope.password, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVecAUikJ54cmHoQzJA-mD4Q3xH0dUAwIIJDwEOSMb84LrkjXBA")
    };

})