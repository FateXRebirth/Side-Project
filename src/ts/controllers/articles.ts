/// <reference path="../_all.ts" />

module app {
  'use strict'

  interface IMyScope extends ng.IScope {
    self: any;
    posts: any;
  }

  export class ArticlesController implements ng.IController {

    static $inject: string[] = ['$scope', '$log', '$timeout', '$firebaseArray'];

    constructor(private $scope: IMyScope, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, private $firebaseArray: AngularFireArrayService) {
      $scope.self = this;
      const config = {
        apiKey: "AIzaSyCaQnAY13Kt6aQJBD-QkOm2hymfwow85IM",
        authDomain: "side-project-f8d62.firebaseapp.com",
        databaseURL: "https://side-project-f8d62.firebaseio.com",
        projectId: "side-project-f8d62",
        storageBucket: "side-project-f8d62.appspot.com",
        messagingSenderId: "618554667717"
      };
      firebase.initializeApp(config);
      const ref = firebase.database().ref().child("Posts")
      $scope.posts = $firebaseArray(ref);
      $scope.posts.$watch(function(change: any) {
        console.log(change);
      })
      $scope.posts.$loaded( (result: any) => {
        $scope.posts = result;
      })
    }

    public Submit(){
      console.log("Submit")
    }

    public Reset() {
      console.log("Reset")
    }

  }
}