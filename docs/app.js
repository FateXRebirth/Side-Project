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
    var ScaffoldDirective = /** @class */ (function () {
        function ScaffoldDirective() {
            this.templateUrl = 'partials/templates/directive.html';
            this.restrict = 'E';
        }
        ScaffoldDirective.prototype.injection = function () {
            return [
                function () {
                    return new ScaffoldDirective();
                }
            ];
        };
        ScaffoldDirective.prototype.link = function ($scope, element, attributes) {
            element.text("I'm a Directive");
        };
        return ScaffoldDirective;
    }());
    app.ScaffoldDirective = ScaffoldDirective;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ScaffoldCtrl = /** @class */ (function () {
        function ScaffoldCtrl() {
        }
        ScaffoldCtrl.prototype.injection = function () {
            return [
                ScaffoldCtrl
            ];
        };
        return ScaffoldCtrl;
    }());
    app.ScaffoldCtrl = ScaffoldCtrl;
})(app || (app = {}));
/// <reference path="./_all.ts"/>
var app;
/// <reference path="./_all.ts"/>
(function (app) {
    'use strict';
    var myapp = angular.module('app', ['ngRoute']);
    myapp.controller('ctrl', app.ScaffoldCtrl.prototype.injection());
    myapp.service('service', app.ScaffoldService.prototype.injection());
    myapp.directive('directive', app.ScaffoldDirective.prototype.injection());
    myapp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/home', { templateUrl: 'partials/home.html' })
                .when('/about', { templateUrl: 'partials/about.html' })
                .when('/404', { templateUrl: 'partials/404.html' })
                .otherwise({ redirectTo: '/404' });
        }]);
})(app || (app = {}));
//#####  include type definitions #####
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../node_modules/@types/angular-route/index.d.ts" />
//##### models #####
/// <reference path='models/ScaffoldModel.ts' />
//##### services #####
/// <reference path='services/ScaffoldService.ts' />
//##### directives #####
/// <reference path='directives/ScaffoldDirective.ts' />
//##### controllers #####
/// <reference path='controllers/ScaffoldCtrl.ts' />
//##### app #####
/// <reference path='main.ts' />
