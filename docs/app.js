"use strict";
/// <reference path="../_all.ts" />
var app;
(function (app) {
    'use strict';
    var FirebaseService = /** @class */ (function () {
        function FirebaseService($firebaseArray, $http) {
            var _this = this;
            this.$firebaseArray = $firebaseArray;
            this.$http = $http;
            console.log("FirebaseService constructed");
            this.$http.get('config.json').then(function (resulut) {
                firebase.initializeApp(resulut.data);
                _this.ref = firebase.database().ref().child("Posts");
                _this.instance = _this.$firebaseArray(_this.ref);
                _this.instance.$loaded(function (result) {
                    _this.posts = result;
                });
            });
        }
        FirebaseService.prototype.GetInstance = function () {
            return this.instance;
        };
        FirebaseService.prototype.GetAllPosts = function () {
            return this.posts;
        };
        FirebaseService.prototype.GetPostByID = function (id) {
            return this.posts.$getRecord(this.posts.$keyAt(id));
        };
        FirebaseService.Factory = function () {
            var firebase = function ($firebaseArray, $http) {
                return new FirebaseService($firebaseArray, $http);
            };
            return firebase;
        };
        return FirebaseService;
    }());
    app.FirebaseService = FirebaseService;
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
/// <reference path="../_all.ts" />
var app;
(function (app) {
    'use strict';
    var ArticleController = /** @class */ (function () {
        function ArticleController($scope, $log, $timeout, FirebaseService) {
            var _this = this;
            this.$scope = $scope;
            this.$log = $log;
            this.$timeout = $timeout;
            this.FirebaseService = FirebaseService;
            $scope.self = this;
            // Get Required Post's ID from URL
            var urlParams = new URLSearchParams(window.location.search);
            var ID = parseInt(urlParams.get('id'));
            $timeout(function () {
                // Get Firebase Instance
                $scope.instance = _this.FirebaseService.GetInstance();
                // Make Sure Instance already Get
                $scope.instance.$loaded(function () {
                    if (ID) {
                        $scope.post = FirebaseService.GetPostByID(ID - 1);
                    }
                    // if(tinymce.execCommand('mceRemoveControl', false, 'editor')) {
                    // // re-init..
                    // }
                    // tinymce.remove();
                    tinymce.init({
                        // paste_enable_default_filters: false,
                        // paste_word_valid_elements: "b,strong,i,em,h1,h2,u,p,ol,ul,li,a[href],span,color,font-size,font-color,font-family,mark",
                        // paste_retain_style_properties: "all",
                        selector: '#editor',
                        height: 600,
                        // menubar: false,
                        // language: 'zh_TW',
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor textcolor',
                            'searchreplace visualblocks code codesample fullscreen',
                            'insertdatetime media table contextmenu paste help wordcount'
                        ],
                        contextmenu: "paste | link image inserttable | cell row column deletetable",
                        toolbar: 'media image link fullscreen insert undo redo formatselect fontsizeselect fontselect | bold italic strikethrough forecolor backcolor removeformat  alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent',
                        content_css: [
                            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                            '//www.tinymce.com/css/codepen.min.css',
                        ],
                        statusbar: false,
                        // max_chars: 3000, // max. allowed chars
                        // without images_upload_url set, Upload tab won't show up
                        images_upload_url: 'https://www.abccar.com.tw/abcapi/upload/UploadAnyFile',
                        // override default upload handler to simulate successful upload
                        images_upload_handler: function (blobInfo, success, failure) {
                            var xhr, formData;
                            xhr = new XMLHttpRequest();
                            xhr.withCredentials = false;
                            xhr.open('POST', 'https://www.abccar.com.tw/abcapi/upload/UploadAnyFile');
                            xhr.onload = function () {
                                var json;
                                if (xhr.status != 200) {
                                    failure('HTTP Error: ' + xhr.status);
                                    return;
                                }
                                json = JSON.parse(xhr.responseText);
                                // if (!json || typeof json.location != 'string') {
                                //     failure('Invalid JSON: ' + xhr.responseText);
                                //     return;
                                // }  
                                success(json.file.UploadUrl);
                            };
                            formData = new FormData();
                            formData.append('file', blobInfo.blob(), blobInfo.filename());
                            xhr.send(formData);
                        },
                        init_instance_callback: function () {
                            if (ID) {
                                this.setContent($scope.post.content);
                            }
                        },
                    });
                });
            }, 300);
            // $scope.$watch('post', function(newValue, oldValue) {
            //   console.log(newValue);
            // })
        }
        ArticleController.prototype.Submit = function () {
            this.$scope.post.title = $('input[name=title]').val();
            this.$scope.post.content = tinymce.get('editor').getContent();
            this.$scope.instance.$save(this.$scope.post);
            window.location.href = "articles.html";
        };
        ArticleController.prototype.Create = function () {
            this.$scope.instance.$add({
                ID: this.$scope.instance.length + 1,
                title: $('input[name=title]').val(),
                content: tinymce.get('editor').getContent()
            });
            window.location.href = "articles.html";
        };
        ArticleController.prototype.Reset = function () {
            tinymce.get('editor').setContent('');
        };
        ArticleController.$inject = ['$scope', '$log', '$timeout', 'FirebaseService'];
        return ArticleController;
    }());
    app.ArticleController = ArticleController;
})(app || (app = {}));
/// <reference path="../_all.ts" />
var app;
/// <reference path="../_all.ts" />
(function (app) {
    'use strict';
    var ArticlesController = /** @class */ (function () {
        function ArticlesController($scope, $log, $timeout, FirebaseService) {
            var _this = this;
            this.$scope = $scope;
            this.$log = $log;
            this.$timeout = $timeout;
            this.FirebaseService = FirebaseService;
            $scope.self = this;
            $timeout(function () {
                // Get Firebase Instance
                $scope.instance = _this.FirebaseService.GetInstance();
                // Make Sure Instance already Get
                $scope.instance.$loaded(function () {
                    $scope.posts = FirebaseService.GetAllPosts();
                });
            }, 500);
            $scope.$watch('posts', function (newValue, oldValue) {
                console.log(newValue);
            });
        }
        ArticlesController.prototype.Create = function () {
            window.location.href = "article.html";
        };
        ArticlesController.prototype.DeletePost = function (post) {
            this.$scope.instance.$remove(post);
        };
        ArticlesController.$inject = ['$scope', '$log', '$timeout', 'FirebaseService'];
        return ArticlesController;
    }());
    app.ArticlesController = ArticlesController;
})(app || (app = {}));
/// <reference path="./_all.ts"/>
var app;
/// <reference path="./_all.ts"/>
(function (app) {
    'use strict';
    var myapp = angular.module('app', ['ngRoute', 'ui.router', 'firebase']);
    myapp.factory('FirebaseService', app.FirebaseService.Factory());
    myapp.controller('ArticleController', app.ArticleController);
    myapp.controller('ArticlesController', app.ArticlesController);
    // myapp.controller('controller', app.Controller)
    // myapp.directive('directive', app.Directive.Factory())
    // myapp.component('component', app.Component.Factory());
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
//##### models #####
//##### services #####
/// <reference path='services/firebase.ts' />
//##### components #####
/// <reference path='components/component.ts' />
//##### directives #####
/// <reference path='directives/directive.ts' />
//##### controllers #####
/// <reference path='controllers/controller.ts' />
/// <reference path='controllers/article.ts' />
/// <reference path='controllers/articles.ts' />
//##### app #####
/// <reference path='main.ts' />
