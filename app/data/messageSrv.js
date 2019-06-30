app.factory("msgSrv", function ($http, $q) {

    function Msg(by, at, title, details, priority) {

        this.createdBy = by;
        this.createdAt = at;
        this.title = title;
        this.details = details;
        this.priority = priority;
    };


    function getMsg() {
        var async = $q.defer();
        var msgArr = [];
        $http.get("app/data/message.json").then(function (res) {

            for (var i = 0; i < res.data.length; i++) {
                var message = new Msg(res.data[i].createdBy, res.data[i].createdAt,
                    res.data[i].title, res.data[i].details, res.data[i].priority);
                msgArr.push(message);
            }

            async.resolve(msgArr);

        }, function (err) {
            $log.error(err);
            async.reject(err);
        });

        return async.promise;
    }

    return {
        getMsg: getMsg
    }
})