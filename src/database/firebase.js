import * as firebase from 'firebase';

let config = {
  apiKey: "AIzaSyAUjCni4bge9K8hG0oqrDEwV_BjO_lSpgU",
	authDomain: "spices-e1b06.firebaseapp.com",
	databaseURL: "https://spices-e1b06.firebaseio.com",
	projectId: "spices-e1b06",
	storageBucket: "spices-e1b06.appspot.com",
	messagingSenderId: "1053636408878"
};
firebase.initializeApp(config);

export default firebase
