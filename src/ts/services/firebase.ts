/// <reference path="../_all.ts" />

declare var firebase: any;

module app {
  'use strict'

  export class FirebaseService {

    private ref: Firebase;
    private posts: AngularFireArray;
    
    constructor(private $firebaseArray: AngularFireArrayService, private $firebaseObject: AngularFireObjectService) {
      console.log("FirebaseService constructed")
      const config = {
        apiKey: "AIzaSyCaQnAY13Kt6aQJBD-QkOm2hymfwow85IM",
        authDomain: "side-project-f8d62.firebaseapp.com",
        databaseURL: "https://side-project-f8d62.firebaseio.com",
        projectId: "side-project-f8d62",
        storageBucket: "side-project-f8d62.appspot.com",
        messagingSenderId: "618554667717"
      };
      firebase.initializeApp(config);
      this.ref = firebase.database().ref().child("Posts")
      this.posts = this.$firebaseArray(this.ref);
      this.posts.$watch(function(change) {
        console.log(change);
      })
      this.posts.$loaded( (result: any) => {
        this.posts = result;
      })
    }

    public GetAllPosts(): any {
      return this.posts;
    }

    public GetPostByID(id: number): any {
      console.log("ID = " + id)
      return this.posts
    }

    public static Factory(): any {
      const firebase = function($firebaseArray: AngularFireArrayService, $firebaseObject: AngularFireObjectService) {
        return new FirebaseService($firebaseArray, $firebaseObject);
      }

      return firebase;
    }
  }
    
}