import firebase from './firebase.js'

export default class DatabaseController {
	connect() {
		this.database = firebase.database();
		this.storage = firebase.storage().ref();
		this.rootRef = this.database.ref();
		this.data = null;
		this.str = [];
	};

	getDataFromServer(callback) {
		return this.rootRef.once('value')//.then((data) => data)
	};

	//getDataFromStorage() {
		// return new Promise((resolve) => {
		// 	let imgURL = [];
		// 	for (let i=1; i<=6; i++) {
		// 		this.storage.child('webpages(old)').child(`p${i}.jpg`)
		// 		.getDownloadURL()
		// 		.then(url => {
		// 			imgURL.push(url);
		// 		})
		// 	}
		// 	resolve(imgURL);
		// }).then((res) => {
		// 	res.sort((a, b) => {
		// 		return a > b;
		// 	});
		// 	console.log(res)
		// 	this.rootRef.child('projects').child('old').once('value', (data) => {
		// 		Object.keys(data.val()).forEach((project, index) => {
		// 			const newProject = { ...data.val()[project],	image: res[index] };
		// 			this.rootRef.child('projects').child('old').child(project).update(newProject);
		// 		})
		// 	});
		// })

	// 	let imgURL = [];
	// 	for (let i=1; i<=6; i++) {
	// 		this.storage.child('webpages(old)').child(`p${i}.jpg`)
	// 		.getDownloadURL()
	// 		.then(url => {
	// 			imgURL.push(url);
	// 		})
	// 	}
	// 	setTimeout(() => {
	// 		imgURL.sort((a, b) => {
	// 			return a > b
	// 		})
	// 		this.rootRef.child('projects').child('old').once('value', (data) => {
	// 			Object.keys(data.val()).forEach((project, index) => {
	// 				const newProject = { ...data.val()[project],	image: imgURL[index] };
	// 				this.rootRef.child('projects').child('old').child(project).update(newProject);
	// 			})
	// 		});
	// 	}, 2000)
	// }

	// addItem(section, item) {
	// 	this.rootRef.child('skills').child(section).push(item)
	// };

	// removeItem(section, item) {
	// 	this.rootRef.child('skills').child(section).child(item).remove()
	// };

	// editItem(section, item, newItem) {
	// 	if (!section && !item) {
	// 		this.rootRef.child('about').set(newItem);
	// 	}
	// 	else {
	// 		this.rootRef.child('skills').child(section).child(item).set(newItem);
	// 	}
	// };
}