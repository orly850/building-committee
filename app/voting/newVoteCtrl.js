
app.controller("newVoteCtrl", function ($scope, userSrv, voteSrv) {


    $scope.user = userSrv.getActive();

    $scope.title;
    $scope.details;
    $scope.options;
    $scope.name = $scope.user.name;
    $scope.dueDate;
    $scope.arr = [];
    // $scope.count = 0;

    $scope.add = function () {  // add to options to arr
        if (!$scope.options) {
            alert("Enter Option")
        } else {
            for (i = 0; i < $scope.arr.length; i++) {
                if ($scope.options === $scope.arr[i]) {
                    alert("Duplicate! Try again");
                    return;
                }
            }
            $scope.arr.push($scope.options);
            // $scope.count++;
            $scope.options = "";
        }
    }

    $scope.newVote = function () {
        voteSrv.newVote($scope.name, $scope.title, $scope.details, $scope.arr,$scope.dueDate)
    };

    //--------------------------------------------



})
