"use strict";
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ScaffoldModel = /** @class */ (function () {
        function ScaffoldModel() {
        }
        return ScaffoldModel;
    }());
    app.ScaffoldModel = ScaffoldModel;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ScaffoldService = /** @class */ (function () {
        function ScaffoldService() {
        }
        ScaffoldService.prototype.injection = function () {
            return [
                ScaffoldService
            ];
        };
        return ScaffoldService;
    }());
    app.ScaffoldService = ScaffoldService;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var Directive = /** @class */ (function () {
        function Directive($log) {
            var _this = this;
            this.restrict = 'E';
            this.template = "\n      <div> \n        <p> binding text: {{text}}</p> \n        <p> this scope text: {{text2}}</p> \n        <a href=\"#\" ng-click=\"echo()\">Echo from scope</a> <br>\n        <a href=\"#\" ng-click=\"self.echo()\">Echo from this class</a> <br>\n      </div>";
            this.scope = {
                "text": "="
            };
            this.link = function (scope, element, attributes) {
                // this.scope.text = scope.text;
                console.log(scope);
                console.log(_this);
                _this.scope.text = '123';
                scope.text2 = '456';
                scope.self = _this;
                scope.echo = function () {
                    console.log("echo from scope");
                };
            };
            this._$log = $log;
        }
        Directive.prototype.echo = function () {
            this._$log.debug("echo from $log");
            console.log("echo from this class");
        };
        Directive.Factory = function () {
            var directive = function ($log) {
                return new Directive($log);
            };
            return directive;
        };
        return Directive;
    }());
    app.Directive = Directive;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var Controller = /** @class */ (function () {
        function Controller($scope, $log) {
            this._$scope = $scope;
            this._$log = $log;
            this._$scope.event = this;
            this._$scope.count = 1;
            this._$scope.Add = function () {
                $scope.count++;
            };
        }
        Controller.prototype.Add = function () {
            this._$scope.count++;
            this._$log.debug("log here");
            $('.test').css('color', 'red');
        };
        Controller.$inject = ['$scope', '$log'];
        return Controller;
    }());
    app.Controller = Controller;
})(app || (app = {}));
/// <reference path="./_all.ts"/>
var app;
/// <reference path="./_all.ts"/>
(function (app) {
    'use strict';
    var myapp = angular.module('app', ['ngRoute', 'ui.router']);
    myapp.controller('controller', app.Controller);
    myapp.directive('directive', app.Directive.Factory());
    // myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
    //   $routeProvider
    //   .when('/home', {templateUrl: 'partials/home.html'})
    //   .when('/about', {templateUrl: 'partials/about.html'})
    //   .when('/404', {templateUrl: 'partials/404.html'})
    //   .otherwise({redirectTo: '/404'})
    // }])
    // myapp.config(['$stateProvider', function($stateProvider: ng.ui.IStateProvider) {
    //   var helloState = {
    //     name: 'hello',
    //     url: '/hello',
    //     template: '<h3>hello world!</h3>'
    //   }
    //   var aboutState = {
    //     name: 'about',
    //     url: '/about',
    //     template: '<h3>Its the UI-Router hello world app!</h3>'
    //   }
    //   $stateProvider.state(helloState);
    //   $stateProvider.state(aboutState);
    // }])
})(app || (app = {}));
//##### include type definitions #####
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-ui-router/index.d.ts" />
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
//##### models #####
/// <reference path='models/ScaffoldModel.ts' />
//##### services #####
/// <reference path='services/ScaffoldService.ts' />
//##### directives #####
/// <reference path='directives/directive.ts' />
//##### controllers #####
/// <reference path='controllers/controller.ts' />
//##### app #####
/// <reference path='main.ts' />
