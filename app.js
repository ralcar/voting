/* global firebase */
(function () {
  var config = {
    apiKey: 'AIzaSyANUCsUDb0TOuvJ2y4lQfYAuxDJBQH0-n8',
    authDomain: 'znipe-voting.firebaseapp.com',
    databaseURL: 'https://znipe-voting.firebaseio.com',
    storageBucket: 'znipe-voting.appspot.com'
  };
  firebase.initializeApp(config);

  this.database = firebase.database();
  this.auth = firebase.auth();
  this.storage = firebase.storage();
}
)();
