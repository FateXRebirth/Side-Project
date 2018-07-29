// import * as angular from 'angular';
/*
/// <reference path="../node_modules/@types/angular/index.d.ts" />
*/
/// <reference types="angular" />

var app = angular.module('myApp', []);
app.controller('Main', function($scope) {
  $scope.count = 0;
  $scope.click = function() {
    $scope.count++;
  }
});