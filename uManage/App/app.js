﻿"use strict";

/* App Module */

var ums = angular.module("ums", [
    "ngRoute",
    "ngSanitize",
    "ngResource",

    "angular-loading-bar",
    "angularMoment",

    "umsRouting",
    "umsControllers",
    "umsServices"
]);

ums.run([
    "$rootScope", "$route", "currentUser", function ($rootScope, $route, currentUser) {
        // Get view change events
        $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            if ($route && $route.current && $route.current.title) {
                $rootScope.title = $route.current.title;
            }
        });

        // Load the user's basic information
        $rootScope.loadCurrentUser = function() {
            $rootScope.currentUser = currentUser.query();
        }
        $rootScope.loadCurrentUser();
    }
]);

ums.config(["$logProvider", function ($logProvider) {
    if ($logProvider.debugEnabled) {
        console.log("Debugging Enabled");
        $logProvider.debugEnabled(true);
    }
}]);