app.controller("messageCtrl", function ($scope, $http,msgSrv) {


    msgSrv.getMsg().then(function(msgArr) {
        $scope.msgArr = msgArr;
      }, function(err) {
        $log.error(err);
      })
    


 


    // function Msg(by, at, title, details, priority) {

    //     this.createdBy = by;
    //     this.createdAt = at;
    //     this.title = title;
    //     this.details = details;
    //     this.priority = priority;
    // };




    // $scope.msgArr = [];

    // $http.get("app/data/message.json").then(function (res) {

    //     for (var i = 0; i < res.data.length; i++) {
    //         var message = new Msg(res.data[i].createdBy, res.data[i].createdAt,
    //             res.data[i].title, res.data[i].details, res.data[i].priority);
    //         $scope.msgArr.push(message);
    //     }
    //     console.log($scope.msgArr);
    // }, function (err) {
    //     console.error(err);
    // })


    $scope.query = "";
    $scope.filterMsg = function (Msg) {
        if (Msg.title.toLowerCase().includes($scope.query.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    };


})