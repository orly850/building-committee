
app.factory("userSrv", function ($log, $http, $q) {

    function User(userId, communityId, name, email, appartment, isMember, password, pic) {
        this.userId = userId;
        this.communityId = communityId;
        this.name = name;
        this.email = email;
        this.appartment = appartment;
        this.isCommitteeMember = isMember;
        this.password = password;
        this.pic = pic;
    }
    //----------------------------------------
    var users = [];
    var wasEverLoaded = false;

    function getUser() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve(users);
        } else {
            wasEverLoaded = true;

            $http.get("app/data/users.json").then(function (res) {
                for (var i = 0; i < res.data.length; i++) {
                    var user1 = new User(res.data[i].userId, res.data[i].communityId, res.data[i].name, res.data[i].email,
                        res.data[i].appartment, res.data[i].isCommitteeMember, res.data[i].password, res.data[i].pic);
                    users.push(user1);
                }
                async.resolve(users);
            }, function (err) {
                $log.error(err);
                async.reject(err);
            })
        }
        return async.promise;
    }
    //--------------------------------------------   

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
            if (!active) {
                async.reject(401);
            }
        }, function (err) {
            async.reject(err);
        })
        return async.promise;
    }
    //--------------------------------------
    //new user---------------------------
    var userCount = 5;
    function  newUser( name, email, appartment,  password, pic) {
        var newU = new User(userCount, 1, name, email, appartment, false, password, pic);
        ++userCount;
        users.unshift(newU);
        console.log(users);
    }
    //=============================================
    function islogedin() {
        return active ? true : false;
    }
    //------------------------------------
    function logedout() {
        active = null;
    }
    //---------------------------------------------------
    function getActive() {
        return active;
    }
    //------------ 

    function deleteUser(user) {
        var a = users.indexOf(user);
        users.splice(a, 1);
    }

    return {
        getUser: getUser,
        login: login,
        logedout: logedout,
        islogedin: islogedin,
        getActive: getActive,
        deleteUser: deleteUser,
        newUser: newUser
    }
});


















