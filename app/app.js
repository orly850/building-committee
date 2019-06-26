var app = angular.module("buildingCommittee", ["ng-route"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templeteUrl: "home.html",
            // controller: "homeCtrl"
        }).when("/login",{
            templeteUrl: "login.html",
            // controller: "loginCtrl"
        }).when("/message",{
            templeteUrl: "message.html",
            // controller: "messageCtrl"

        })
})