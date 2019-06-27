
var app = angular.module("buildingCommittee", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html"
        }).when("/login", {
            templateUrl: "app/login/login.html",
            controller: "loginCtrl"
        }).when("/message", {
            templateUrl: "app/message/message.html",
            controller: "messageCtrl"
        })


});

