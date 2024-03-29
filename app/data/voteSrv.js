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

    //----------get votes--------------------------------------------------

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


    //new Vote---------------------------
    var votesCount = 4;

    var date = new Date();
    function newVote(createdBy, title, details, option,dueDate,votes) {
        var vote = new Voteing(votesCount, createdBy, date, title, details, option,dueDate,votes);
        ++votesCount;
        votesArr.unshift(vote);
        console.log(votesArr);
    }

   

    //--update due date---

    var vote;
    var index;
    function seledtedvote(vote){
        index = votesArr.indexOf(vote);   
    }

    function dueDateUpdt(newDate){
       
        votesArr[index].dueDate = newDate;
    }

    return {
        getVots: getVots,
        newVote:newVote,
        seledtedvote:seledtedvote,
        dueDateUpdt:dueDateUpdt
    }

})
