app.controller("tenantsCtrl", function ($scope, $http) {

    function User(comid,name, email, appartment, member) {
        
        this.communityId = comid;
        this.name = name;
        this.email = email;
        this.appartment = appartment;
        this.isCommitteeMember = member;
        
    };

    $scope.tenantArr = [];

    $http.get("app/data/message.json").then(function (res) {

        for (var i = 0; i < res.data.length; i++) {
            var tenant = new User(res.data[i].communityId,res.data[i].name, res.data[i].email,
                res.data[i].appartment, res.data[i].isCommitteeMember);
                
            $scope.tenantArr.push(tenant);
        }
        console.log( $scope.tenantArr);
    }, function (err) {
        console.error(err);
    })

})