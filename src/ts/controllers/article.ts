/// <reference path="../_all.ts" />

declare var tinymce: any;

module app {
  'use strict'

  interface IMyScope extends ng.IScope {
    self: any;
    post: any;
    instance: any;
  }

  export class ArticleController implements ng.IController {

    static $inject: string[] = ['$scope', '$log', '$timeout', 'FirebaseService'];

    constructor(private $scope: IMyScope, private $log: ng.ILogService, private $timeout: ng.ITimeoutService, private FirebaseService: any) {
      $scope.self = this;

      // Get Required Post's ID from URL
      const urlParams: any = new URLSearchParams(window.location.search);
      const ID: number = parseInt(urlParams.get('id'));

      $timeout(() => {
        // Get Firebase Instance
        $scope.instance = this.FirebaseService.GetInstance();
        // Make Sure Instance already Get
        $scope.instance.$loaded(function() {
          if(ID) {
            $scope.post = FirebaseService.GetPostByID(ID-1);
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
            images_upload_url: 'https://side-project-f8d62.firebaseio.com',
            // override default upload handler to simulate successful upload
            images_upload_handler: function (blobInfo: any, success: any, failure: any) {
              var metadata = {
                contentType: 'image'
              };
              var uploadTask = FirebaseService.GetStorageRef().child('images/' + blobInfo.blob().name).put(blobInfo.blob(), metadata);

              uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
              function(snapshot: any) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
              }, function(error: any) {
                failure(error);
              }, function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL: any) {
                  console.log('File available at', downloadURL);
                  success(downloadURL);
                });
              });
            },
            setup: function (ed: any) {
              ed.on('KeyDown', function (e: any) {
                if ((e.keyCode == 8 || e.keyCode == 46) && ed.selection) { // delete & backspace keys
                  let selectedNode = ed.selection.getNode(); // get the selected node (element) in the editor
                  if (selectedNode && selectedNode.nodeName == 'IMG') {
                      // console.log(selectedNode.src); // A callback that will let me invoke the deletion of the image on the server if appropriate for the image source.
                      const src = selectedNode.src;
                      let start = src.indexOf("/images") + 10;
                      let part = src.substring(start);
                      let end = part.indexOf("?");
                      let filename = src.substring(start, start + end);
                      // Create a reference to the file to delete
                      var desertRef = FirebaseService.GetStorageRef().child('images/' + filename)
                      // Delete the file
                      desertRef.delete().then(function() {
                        // File deleted successfully
                        console.log(filename + ' has been deleted!');
                      }).catch(function(error: any) {
                        // Uh-oh, an error occurred!
                        console.log(error);
                      });   
                  }
                }
              });
            },
            init_instance_callback: function () {
              if(ID) {
                this.setContent($scope.post.content)
              }
            },
          });
        })
      }, 300)
     
      // $scope.$watch('post', function(newValue, oldValue) {
      //   console.log(newValue);
      // })
    }

    public Submit(){
      this.$scope.post.title = $('input[name=title]').val();
      this.$scope.post.content = tinymce.get('editor').getContent();
      this.$scope.instance.$save(this.$scope.post);
      window.location.href = "articles.html";
    }

    public Create(){
      this.$scope.instance.$add({
        ID: this.$scope.instance.length + 1,
        title: $('input[name=title]').val(),
        content: tinymce.get('editor').getContent()
      })
      window.location.href = "articles.html";
    }

    public Reset() {
      tinymce.get('editor').setContent('');
    }

  }
}