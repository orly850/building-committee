
var app = angular.module("buildingCommittee", ["ngRoute","chart.js"]);

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
        }).when("/tenants", {
            templateUrl: "app/tenants/tenants.html",
            controller: "tenantsCtrl"
        }) .when("/voting", {
            templateUrl: "app/voting/voting.html",
            controller: "votingCtrl"
        
     })


});

