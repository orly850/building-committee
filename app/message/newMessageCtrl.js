
app.controller("newMesCtrl", function ($scope, $log, userSrv, msgSrv) {

    $scope.test = "dfgdfh";

    $scope.user = userSrv.getActive();

    $scope.title ;
    $scope.details ;
    $scope.priorty ;
    $scope.name = $scope.user.name;

    // $scope.msgCount = 7;

    $scope.newMsg = function () {

        msgSrv.newMsg( $scope.name, "565", $scope.title, $scope.details, $scope.priorty)
        // $log.info("new message added: " + JSON.stringify(message));

        // ++$scope.msgCount;

        // $("#modelId").modal('hide')
        // function newMsg(id, createdBy, createdAt, title, details, priority) {

    };








})


