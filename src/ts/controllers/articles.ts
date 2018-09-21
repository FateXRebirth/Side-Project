/// <reference path="../_all.ts" />

module app {
  'use strict'

  interface IMyScope extends ng.IScope {
    self: any;
    posts: any;
    instance: any;
  }

  export class ArticlesController implements ng.IController {

    static $inject: string[] = ['$scope', '$log', '$timeout', 'FirebaseService'];

    constructor(private $scope: IMyScope, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, private FirebaseService: any) {
      $scope.self = this;

      $timeout(() => {
         // Get Firebase Instance
        $scope.instance = this.FirebaseService.GetInstance();
        // Make Sure Instance already Get
        $scope.instance.$loaded(function() {
          $scope.posts = FirebaseService.GetAllPosts();
        })
      }, 500)

      $scope.$watch('posts', function(newValue, oldValue) {
        console.log(newValue);
      })
    }

  }
}