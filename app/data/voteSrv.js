app.factory("voteSrv", function ($http, $q) {

    function Msg(id, by, at, title, details, priority) {

        this.id = id;
        this.createdBy = by;
        this.createdAt = at;
        this.title = title;
        this.details = details;
        this.options = priority;
        this.dueDate = dueDate;
        this.votes = votes;

    }



    //------------------------------------------------------------

    var msgArr = [];






})
