/// <reference path="../_all.ts" />

declare var firebase: any;
module app {
  'use strict'

  export class FirebaseService {
  
    private instance: any;
    private ref: any;
    private posts: any;
    
    constructor(private $firebaseArray: AngularFireArrayService, private $http: ng.IHttpService) {
      console.log("FirebaseService constructed")
      this.$http.get('config.json').then((resulut: any) => { 
        firebase.initializeApp(resulut.data);
        this.ref = firebase.database().ref().child("Posts")
        this.instance = this.$firebaseArray(this.ref);
        this.instance.$loaded( (result: any) => {
          this.posts = result;
        })
      })
    }

    public GetInstance(): any {
      return this.instance;
    }

    public GetAllPosts(): any {
      return this.posts;
    }

    public GetPostByID(id: any): any {
      return this.posts.$getRecord(this.posts.$keyAt(id));    
    }

    public static Factory(): any {
      const firebase = function($firebaseArray: AngularFireArrayService, $http: ng.IHttpService) {
        return new FirebaseService($firebaseArray, $http);
      }
      return firebase;
    }
  }
    
}