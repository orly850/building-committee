
app.factory("userSrv", function ($log, $http, $q) {

    function User(communityId, name, email, appartment, isMember) {

        this.communityId = communityId;
        this.name = name;
        this.email = email;
        this.appartment = appartment;
        this.isCommitteeMember = isMember;
    };

    function getUser() {
        var async = $q.defer();
        var users = [];

        $http.get("app/data/users.json").then(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                var user1 = new User(res.data[i].communityId, res.data[i].name, res.data[i].email,
                    res.data[i].appartment, res.data[i].isCommitteeMember);
                users.push(user1);
            }
            async.resolve(users);
        }, function (err) {
            $log.error(err);
            async.reject(err);
        });

        return async.promise;
    }

    //===============================================================================

    var active = null;

    function islogedin() {
        return active ? true : false;
    };

    //-----------------------

    function login(name, pass) {
        var async = $q.defer();

        if (name === "lea" && pass === "1") {
            active = new User({ communityId: 1, name: "lea", email: "lea@lea.com", appartment: 16, isCommitteeMember: "true" });
            async.resolve(active);
        } else {
            // $scope.loginError = true;
            async.reject();
        }

        return async.promise
    };


    return {
        getUser: getUser,
        islogedin: islogedin,
        login: login
    }
});


















