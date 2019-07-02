app.factory("msgSrv", function ($http, $q) {

    function Msg(id, by, at, title, details, priority) {

        this.id = id;
        this.createdBy = by;
        this.createdAt = at;
        this.title = title;
        this.details = details;
        this.priority = priority;
    }

    //------------------------------------------------------------

    var msgArr = [];
    var wasEverLoaded = false;

    function getMsg() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve(msgArr);
        } else {
            wasEverLoaded = true;
            $http.get("app/data/message.json").then(function (res) {

                for (var i = 0; i < res.data.length; i++) {
                    var message = new Msg(res.data[i].id, res.data[i].createdBy, res.data[i].createdAt,
                        res.data[i].title, res.data[i].details, res.data[i].priority);
                    msgArr.push(message);
                }

                async.resolve(msgArr);

            }, function (err) {
                $log.error(err);
                async.reject(err);
            });
        }

        return async.promise;
    }

    //new message---------------------------
    var msgCount = 7;
    function newMsg(createdBy, createdAt, title, details, priority) {
        var newMessage = new Msg(msgCount, createdBy, createdAt, title, details, priority);
        ++msgCount;
        msgArr.push(newMessage);
        
    }

    return {
        getMsg: getMsg,
        newMsg: newMsg
    }


})