/// <reference path="../_all.ts" />

declare var firebase: any;

module app {
  'use strict'

  export class FirebaseService {

    public ref: any;
    
    constructor(private $firebaseArray: AngularFireArrayService) {
        console.log("FirebaseService constructed")
        const config = {
          apiKey: "AIzaSyCYg_BmMdLvYyzrnJM7hn-YonNlaT9sKDQ",
          authDomain: "gallery-228f2.firebaseapp.com",
          databaseURL: "https://gallery-228f2.firebaseio.com",
          projectId: "gallery-228f2",
          storageBucket: "gallery-228f2.appspot.com",
          messagingSenderId: "39963305448"
        };
        firebase.initializeApp(config);
        this.ref = firebase.database().ref()
    }
    
    public Test() {
      console.log("Function Test")
      console.log(this.$firebaseArray(this.ref.child("images")))
    }

    public static Factory(): any {
      const firebase = function($firebaseArray: AngularFireArrayService) {
        return new FirebaseService($firebaseArray);
      }

      return firebase;
    }
  }
    
}