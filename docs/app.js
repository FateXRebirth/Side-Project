"use strict";
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
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var IndexController = /** @class */ (function () {
        function IndexController($element, $log) {
            this.$element = $element;
            this.$log = $log;
            this.test = "test";
        }
        IndexController.prototype.$onInit = function () {
            console.log("Init Component");
        };
        IndexController.prototype.$onChanges = function (changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        };
        IndexController.prototype.$postLink = function () {
            console.log(this.$element);
        };
        IndexController.prototype.$onDestroy = function () { };
        IndexController.prototype.Echo = function () {
            this.$log.debug("Echo from Controller through $log");
        };
        IndexController.$inject = ["$element", "$log"];
        return IndexController;
    }());
    var Index = /** @class */ (function () {
        function Index() {
            this.bindings = {
                test: "=" //One Way Binding
            };
            this.controller = IndexController;
            this.templateUrl = "components/index.html";
            this.transclude = false;
        }
        Index.Factory = function () {
            return new Index;
        };
        return Index;
    }());
    app.Index = Index;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ArticlesController = /** @class */ (function () {
        function ArticlesController($element, $log) {
            this.$element = $element;
            this.$log = $log;
            this.test = "test";
        }
        ArticlesController.prototype.$onInit = function () {
            console.log("Init Component");
        };
        ArticlesController.prototype.$onChanges = function (changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        };
        ArticlesController.prototype.$postLink = function () {
            console.log(this.$element);
        };
        ArticlesController.prototype.$onDestroy = function () { };
        ArticlesController.prototype.Echo = function () {
            this.$log.debug("Echo from Controller through $log");
        };
        ArticlesController.$inject = ["$element", "$log"];
        return ArticlesController;
    }());
    var Articles = /** @class */ (function () {
        function Articles() {
            this.bindings = {
                test: "=" //One Way Binding
            };
            this.controller = ArticlesController;
            this.templateUrl = "components/articles.html";
            this.transclude = false;
        }
        Articles.Factory = function () {
            return new Articles;
        };
        return Articles;
    }());
    app.Articles = Articles;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var AboutController = /** @class */ (function () {
        function AboutController($element, $log) {
            this.$element = $element;
            this.$log = $log;
            this.test = "test";
        }
        AboutController.prototype.$onInit = function () {
            console.log("Init Component");
        };
        AboutController.prototype.$onChanges = function (changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        };
        AboutController.prototype.$postLink = function () {
            console.log(this.$element);
        };
        AboutController.prototype.$onDestroy = function () { };
        AboutController.prototype.Echo = function () {
            this.$log.debug("Echo from Controller through $log");
        };
        AboutController.$inject = ["$element", "$log"];
        return AboutController;
    }());
    var About = /** @class */ (function () {
        function About() {
            this.bindings = {
                test: "=" //One Way Binding
            };
            this.controller = AboutController;
            this.templateUrl = "components/about.html";
            this.transclude = false;
        }
        About.Factory = function () {
            return new About;
        };
        return About;
    }());
    app.About = About;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ContactController = /** @class */ (function () {
        function ContactController($element, $log) {
            this.$element = $element;
            this.$log = $log;
            this.test = "test";
        }
        ContactController.prototype.$onInit = function () {
            console.log("Init Component");
        };
        ContactController.prototype.$onChanges = function (changesObj) {
            console.log("Changed Obj: ");
            console.log(changesObj);
        };
        ContactController.prototype.$postLink = function () {
            console.log(this.$element);
        };
        ContactController.prototype.$onDestroy = function () { };
        ContactController.prototype.Echo = function () {
            this.$log.debug("Echo from Controller through $log");
        };
        ContactController.$inject = ["$element", "$log"];
        return ContactController;
    }());
    var Contact = /** @class */ (function () {
        function Contact() {
            this.bindings = {
                test: "=" //One Way Binding
            };
            this.controller = ContactController;
            this.templateUrl = "components/contact.html";
            this.transclude = false;
        }
        Contact.Factory = function () {
            return new Contact;
        };
        return Contact;
    }());
    app.Contact = Contact;
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
    // myapp.component('index', app.Index.Factory());
    // myapp.component('articles', app.Articles.Factory());
    // myapp.component('about', app.About.Factory());
    // myapp.component('contact', app.Contact.Factory());
    // myapp.controller('controller', app.Controller)
    // myapp.directive('directive', app.Directive.Factory())
    // myapp.component('component', app.Component.Factory());
    // myapp.component('simplemde', app.SimpleMDEComponent.Factory());
    // myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
    //   $routeProvider
    //   .when('/home', {templateUrl: 'partials/home.html'})
    //   .when('/about', {templateUrl: 'partials/about.html'})
    //   .when('/404', {templateUrl: 'partials/404.html'})
    //   .otherwise({redirectTo: '/404'})
    // }])
    // myapp.config(['$stateProvider', '$locationProvider', function($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider) {
    //   $locationProvider.html5Mode(true);
    //   $locationProvider.hashPrefix('');
    //   var index = {
    //     name: 'index',
    //     url: '/',
    //     component: 'index'
    //   }
    //   var articles = {
    //     name: 'articles',
    //     url: '/articles',
    //     component: 'articles'
    //   }
    //   var about = {
    //     name: 'about',
    //     url: '/about',
    //     component: 'about'
    //   }
    //   var contact = {
    //     name: 'contact',
    //     url: '/contact',
    //     component: 'contact'
    //   }
    //   $stateProvider.state(index);
    //   $stateProvider.state(articles);
    //   $stateProvider.state(about);
    //   $stateProvider.state(contact);
    // }])
})(app || (app = {}));
//##### include type definitions #####
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-ui-router/index.d.ts" />
/// <reference path="../../node_modules/@types/angularfire/index.d.ts" />
//##### services #####
/// <reference path='services/service.ts' />
//##### components #####
/// <reference path='components/component.ts' />
/// <reference path='components/index.ts' />
/// <reference path='components/articles.ts' />
/// <reference path='components/about.ts' />
/// <reference path='components/contact.ts' />
//##### directives #####
/// <reference path='directives/directive.ts' />
//##### controllers #####
/// <reference path='controllers/controller.ts' />
//##### app #####
/// <reference path='main.ts' />
