/// <reference path="../_all.ts" />

module app {
  'use strict'

  interface IMyScope extends ng.IScope {
    self: any;
    posts: any;
  }

  export class ArticlesController implements ng.IController {

    static $inject: string[] = ['$scope', '$log', '$timeout', 'firebaseService'];

    private firebaseService: any;

    constructor(private $scope: IMyScope, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, firebaseService: any) {
      $scope.self = this;
      this.firebaseService = firebaseService;
      $scope.posts = this.firebaseService.GetAllPosts();
      // this.$scope.posts = this.firebaseService.GetAllPosts();
      // console.log(this)
    }

    public Submit(){
      console.log("Submit")
    }

    public Reset() {
      console.log("Reset")
    }

  }
}