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
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    /*
  
    // example
    <component test="1+1"></component>
    */
    var ComponentController = /** @class */ (function () {
        function ComponentController($element, $log) {
            this.$element = $element;
            this.$log = $log;
            this.test = "test";
        }
        ComponentController.prototype.$onInit = function () {
            console.log("Init Component");
        };
        ComponentController.prototype.$onChanges = function (changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        };
        ComponentController.prototype.$postLink = function () {
            console.log(this.$element);
        };
        ComponentController.prototype.$onDestroy = function () { };
        ComponentController.prototype.Echo = function () {
            this.$log.debug("Echo from Controller through $log");
        };
        ComponentController.$inject = ["$element", "$log"];
        return ComponentController;
    }());
    var Component = /** @class */ (function () {
        function Component() {
            this.bindings = {
                test: "=" //One Way Binding
            };
            this.controller = ComponentController;
            this.template = "\n        <div>\n          <span> Variable: {{ $ctrl.test }} </span>\n          <button ng-click=\"$ctrl.Echo()\">Click Me To Echo</button>\n        </div>";
            //this.templateUrl = "/Templates/components/editUser.template.html";
            this.transclude = false;
        }
        Component.Factory = function () {
            return new Component;
        };
        return Component;
    }());
    app.Component = Component;
})(app || (app = {}));
/// <reference path="../_all.ts" />
// declare var SimpleMDE: any;
var app;
/// <reference path="../_all.ts" />
// declare var SimpleMDE: any;
(function (app) {
    'use strict';
    var SimpleMDEController = /** @class */ (function () {
        // constructor(private $scope: IMyScope, private $log: ng.ILogService, private $firebaseObject: AngularFireObjectService) {
        function SimpleMDEController($scope, $log, $firebaseArray) {
            this.$scope = $scope;
            this.$log = $log;
            this.$firebaseArray = $firebaseArray;
            // Initialize the Firebase SDK
            var config = {
                apiKey: "AIzaSyCYg_BmMdLvYyzrnJM7hn-YonNlaT9sKDQ",
                authDomain: "gallery-228f2.firebaseapp.com",
                databaseURL: "https://gallery-228f2.firebaseio.com",
                projectId: "gallery-228f2",
                storageBucket: "gallery-228f2.appspot.com",
                messagingSenderId: "39963305448"
            };
            firebase.initializeApp(config);
            // Get textarea for simplemde
            var elem = (document.getElementById('Editor'));
            // Create SimpleMDE instance
            this.simplemde = new SimpleMDE({
                element: elem
            });
            this.simplemde.value("# This is a test\n\n```sh\n$ npm install node\n$ npm install gulp -g\n$ npm install npm@next\n```");
            // Get firebase reference
            this.ref = firebase.database().ref();
            // console.log(this.$firebaseObject(ref))     
        }
        SimpleMDEController.prototype.$onInit = function () {
            var _this = this;
            console.log(this.$scope.event);
            console.log("Init");
            setTimeout(function () {
                _this.data = _this.$firebaseArray(_this.ref.child("images"));
            });
        };
        SimpleMDEController.prototype.$onDestroy = function () {
            console.log("Destroy");
        };
        SimpleMDEController.prototype.Submit = function () {
            console.log(this.simplemde.value());
            this.data.$add({
                text: this.simplemde.value()
            }).then(function (ref) {
                console.log(ref);
            });
        };
        // static $inject: string[] = ['$scope', '$log', '$firebaseObject'];
        SimpleMDEController.$inject = ['$scope', '$log', '$firebaseArray'];
        return SimpleMDEController;
    }());
    var SimpleMDEComponent = /** @class */ (function () {
        function SimpleMDEComponent() {
            this.bindings = {
                text: '=',
            };
            this.controller = SimpleMDEController;
            this.templateUrl = "components/simpleMDE.html";
            this.transclude = true;
        }
        SimpleMDEComponent.Factory = function () {
            return new SimpleMDEComponent;
        };
        return SimpleMDEComponent;
    }());
    app.SimpleMDEComponent = SimpleMDEComponent;
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
            var _this = this;
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
            this.controller = DirectiveController;
            this.controllerAs = "Ctrl";
            this.restrict = 'E';
            this.template = "\n      <div style=\"text-align: center\"> \n        <p> binding text: {{text}} </p> \n        <p> this scope text: {{text2}} </p> \n        <p> binding text throught @: {{text3}} </p> \n        <a href=\"#\" ng-click=\"Echo()\">Echo from scope</a> <br>\n        <a href=\"#\" ng-click=\"self.Echo()\">Echo from this class</a> <br>\n        <button ng-click=\"Ctrl.ChangeText()\">Button1</button> <br>\n        <button ng-click=\"vm.ChangeText()\">Button2</button> <br>\n        <button ng-click=\"self.ChangeText()\">Button3</button> <br>\n      </div>";
            this.scope = {
                "text": "=",
                "text3": "@"
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
    var myapp = angular.module('app', ['ngRoute', 'ui.router', "firebase"]);
    myapp.controller('controller', app.Controller);
    myapp.directive('directive', app.Directive.Factory());
    myapp.component('component', app.Component.Factory());
    myapp.component('simplemde', app.SimpleMDEComponent.Factory());
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
/// <reference path="../../node_modules/@types/simplemde/index.d.ts" />
/// <reference path="../../node_modules/@types/angularfire/index.d.ts" />
//##### models #####
/// <reference path='models/ScaffoldModel.ts' />
//##### services #####
/// <reference path='services/service.ts' />
//##### components #####
/// <reference path='components/component.ts' />
/// <reference path='components/simpleMDE.ts' />
//##### directives #####
/// <reference path='directives/directive.ts' />
//##### controllers #####
/// <reference path='controllers/controller.ts' />
//##### app #####
/// <reference path='main.ts' />
