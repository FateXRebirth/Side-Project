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
    var DirectiveController = /** @class */ (function () {
        function DirectiveController(scope, $log) {
            this.scope = scope;
            scope.vm = this;
            this.$log = $log;
        }
        DirectiveController.prototype.Echo = function () {
            console.log("Echo from directive's controller");
        };
        DirectiveController.prototype.ChangeText = function () {
            this.scope.text2 = 'This text from directive\'s controller';
            console.log(this.scope);
            this.$log.debug("Change from directive's controller");
        };
        DirectiveController.$inject = ["$scope", "$log"];
        return DirectiveController;
    }());
    var Directive = /** @class */ (function () {
        function Directive() {
            // _$log: ng.ILogService;
            var _this = this;
            // constructor($log: ng.ILogService) {
            //   this._$log = $log;
            // }
            // bindToController: boolean = true;
            this.controller = DirectiveController;
            this.controllerAs = "Ctrl";
            this.restrict = 'E';
            this.template = "\n      <div style=\"text-align: center\"> \n        <p> binding text: {{text}} </p> \n        <p> this scope text: {{text2}} </p> \n        <p> binding text throught @: {{text3}} </p> \n        <a href=\"#\" ng-click=\"Echo()\">Echo from scope</a> <br>\n        <a href=\"#\" ng-click=\"self.Echo()\">Echo from this class</a> <br>\n        <button ng-click=\"Ctrl.ChangeText()\">Button1</button> <br>\n        <button ng-click=\"vm.ChangeText()\">Button2</button> <br>\n        <button ng-click=\"self.ChangeText()\">Button3</button> <br>\n      </div>";
            this.scope = {
                "text": "=",
                "text3": "@"
            };
            this.link = function (scope, element, attributes, controller) {
                console.log(scope);
                _this.MyScope = scope;
                // this.scope = scope
                // scope.vm.Echo()
                scope.text2 = 'This text from scope2';
                // scope.text = 'This text from scope2';
                scope.self = _this;
                scope.Echo = function () {
                    console.log("Echo from scope");
                };
                // this.controller.prototype.Echo();
                // console.log(this.controller.$inject)
                // console.log(controller)
                // console.log(this.controller)
                // scope.vm.$log.debug("Echo from scope throught controller")
            };
        }
        Directive.prototype.Echo = function () {
            console.log("Echo from this class");
        };
        Directive.prototype.ChangeText = function () {
            this.MyScope.text2 = "This text from directive";
            console.log(this.MyScope);
            console.log("Change from directive");
        };
        Directive.Factory = function () {
            // const directive = function($log: ng.ILocationService) {
            //   return new Directive($log);
            // }
            var directive = function () {
                return new Directive();
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
                $log.debug("Add from scope");
            };
        }
        Controller.prototype.Add = function () {
            this._$scope.count++;
            this._$log.debug("Add from this class");
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
