app.factory("voteSrv", function ($http, $q) {

    function Voteing(id, by, at, title, details,options, dueDate, votes) {

        this.id = id;
        this.createdBy = by;
        this.createdAt = at;
        this.title = title;
        this.details = details;
        this.options = options;
        this.dueDate = dueDate;
        this.votes = votes;

    }



    //------------------------------------------------------------

    var votesArr = [];

    var wasEverLoaded = false;

    function getVots() {
        var async = $q.defer();
        if (wasEverLoaded) {
            async.resolve(votesArr);
        } else {
            wasEverLoaded = true;
            $http.get("app/data/vote.json").then(function (res) {

                for (var i = 0; i < res.data.length; i++) {
                    var vote = new Voteing(res.data[i].id, res.data[i].createdBy, res.data[i].createdAt,
                        res.data[i].title, res.data[i].details, res.data[i].options,  res.data[i].dueDate, res.data[i].votes);
                    votesArr.push(vote);
                }

                async.resolve(votesArr);

            }, function (err) {
                $log.error(err);
                async.reject(err);
            });
        }

        return async.promise;
    }
    console.log(votesArr);

    return {
        getVots: getVots
    }

})
