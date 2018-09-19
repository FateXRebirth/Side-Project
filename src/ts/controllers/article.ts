/// <reference path="../_all.ts" />

declare var tinymce: any;

module app {
  'use strict'

  interface IMyScope extends ng.IScope {
    self: any;
    post: any;
    posts: any;
  }

  export class ArticleController implements ng.IController {

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
        $scope.post = $scope.posts.$getRecord( $scope.posts.$keyAt(myParam) )
      })

      let urlParams: any = new URLSearchParams(window.location.search);
      let myParam: number = parseInt(urlParams.get('id'));

      // $scope.posts.$loaded( (result: any) => {
      //   $scope.post = result.$getRecord(result.$keyAt(myParam))
      // })
     
      $scope.$watch('post', function(newValue, oldValue) {
        console.log(newValue, oldValue);
      })

      if(tinymce.execCommand('mceRemoveControl', false, 'editor')) {
      // re-init..
      }
      tinymce.remove();
      $timeout(() => {
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
          images_upload_handler: function (blobInfo: any, success: any, failure: any) {
            var xhr: any, formData: any;
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
            // this.setContent('')
          },
        });
      }, 100)
    }

    public Submit(){
      console.log("Submit")
    }

    public Reset() {
      console.log("Reset")
    }

  }
}