// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics'

// // Add the Firebase products that you want to use
import 'firebase/auth'

import 'firebase/database'
import { FinnaEvent } from './FinnaEvent'
import { FinnaComment } from './FinnaComment'
import { FinnaInvitee } from './FinnaInvitee'

const initialize = () => {
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: 'AIzaSyAK9Ni0HCfjant6cC9mjtpJDCiC9h3D5Iw',
		authDomain: 'brave-smile-815.firebaseapp.com',
		databaseURL: 'https://brave-smile-815.firebaseio.com',
		projectId: 'brave-smile-815',
		storageBucket: 'brave-smile-815.appspot.com',
		messagingSenderId: '290560500650',
		appId: '1:290560500650:web:57901721e47bebe3a4c1d3',
		measurementId: 'G-SZX7QYP4EX',
	}
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig)
	// firebase.analytics()
	// console.log('initialized')
}

/*
	{
		"author":{
			"created":1589759351.7477942,
			"email":"email",
			"id":"orNyxlJropdCmxzzxxw27UjlHe32",
			"phone":"+1 740-815-7604",
			"picID":"person.crop.circle",
			"username":"alpal"
		},
		"dateLastUpdated":1589764500.7521749,
		"description":"I'm finna teach liz how to turn off her phone",
		"id":"-M7_LNy9TPI2f8YIamUC",
		"placeOccurring":"FaceTime",
		"timeOccurring":"915"
	}
*/
export const getEvent = async (eventID) => {
	initialize()
	// Get a reference to the database service
	// var userId = firebase.auth().currentUser.uid;
	const eventSnapshot = await firebase
		.database()
		// .ref('/events/-M7_LNy9TPI2f8YIamUC/')
		.ref(`/events/${eventID}/`)
		.once('value')

	if (
		[
			eventSnapshot.val().author,
			eventSnapshot.val().dateLastUpdated,
			eventSnapshot.val().description,
			eventSnapshot.val().id,
			eventSnapshot.val().placeOccurring,
			eventSnapshot.val().timeOccurring,
		].includes(null)
	) {
		return null
	}
	const event: FinnaEvent = {
		author: eventSnapshot.val().author,
		dateLastUpdated: eventSnapshot.val().dateLastUpdated,
		description: eventSnapshot.val().description,
		id: eventSnapshot.val().id,
		placeOccurring: eventSnapshot.val().placeOccurring,
		timeOccurring: eventSnapshot.val().timeOccurring,
	}
	return event
}

/*
	{
		"-M7_Lau3qSSFtBtKMOGl":{
			"author":{
				"created":1589764295.327242,
				"email":"email",
				"id":"v6gGpx6wcheot134MoJyrZu1mU32",
				"phone":"+1 740-833-5982",
				"picID":"person.crop.circle",
				"username":"wizlight"
			},
			"content":"I lerned it",
			"created":1589764583.112457,
			"id":"-M7_Lau3qSSFtBtKMOGl"
		},
		"-M7_LcmTe1HyZPWtQwYW":{
			"author":{
				"created":1589764388.501131,
				"email":"email",
				"id":"nfYQyQ7uBhSw8dmrSSZXSPaPH6s2",
				"phone":"+1 614-937-9881",
				"picID":"person.crop.circle",
				"username":"nike"
			},
			"content":"She needs all the help she can get!",
			"created":1589764590.76725,
			"id":"-M7_LcmTe1HyZPWtQwYW"
		}
	}
	or
	null
*/
export const getComments = async (eventID) => {
	const commentSnapshot = await firebase
		.database()
		.ref(`/comments/${eventID}/`)
		.once('value')

	const snapshot = commentSnapshot.val()
		? Object.values(commentSnapshot.val())
		: []

	let comments = snapshot.map((snap) => {
		let comment: FinnaComment = {
			author: snap['author'],
			content: snap['content'],
			created: snap['created'],
			id: snap['id'],
		}
		return comment
	})
	return comments
}

export const getInvitees = async (eventID) => {
	const inviteeSnapshot = await firebase
		.database()
		.ref(`/invitees/${eventID}/`)
		.once('value')

	const snapshot = inviteeSnapshot.val()
		? Object.values(inviteeSnapshot.val())
		: []

	let invitees = snapshot.map((snap) => {
		let invitee: FinnaInvitee = {
			user: snap['user'],
			isGoing: snap['isGoing'],
		}
		return invitee
	})
	// console.log(`${JSON.stringify(invitees)}`)
	return invitees
}
