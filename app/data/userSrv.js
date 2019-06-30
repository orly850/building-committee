
app.factory("userSrv", function ($log, $http, $q) {

    function User(communityId, name, email, appartment, isMember, password) {

        this.communityId = communityId;
        this.name = name;
        this.email = email;
        this.appartment = appartment;
        this.isCommitteeMember = isMember;
        this.password = password;

    };

    function getUser() {
        var async = $q.defer();
        var users = [];

        $http.get("app/data/users.json").then(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                var user1 = new User(res.data[i].communityId, res.data[i].name, res.data[i].email,
                    res.data[i].appartment, res.data[i].isCommitteeMember, res.data[i].password);
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

    // function islogedin() {
    //     return active ? true : false;
    // };

    //-----------------------

    var active = null;

    function login(name, pass) {
        var async = $q.defer();

        active = null;

        $http.get("app/data/users.json").then(function (res) {
            var users = res.data;
            for (var i = 0; i < users.length; i++) {
                if (name === users[i].name && pass === users[i].password) {
                    active = users[i];
                    async.resolve(active);
                }
            }

        }, function (err) {
            async.reject(err);
        })

        return async.promise;
    }

    return {
        getUser: getUser,
        login: login
        // islogedin: islogedin,

    }
});


















