import { currentRoute } from 'svelte-grouter'
import { derived } from 'svelte/store'
import { getEvent, getComments, getInvitees } from './Firebase'

export const activeEventStore = derived(currentRoute, ($currentRoute, set) => {
	if ($currentRoute.params.eventID) {
		let eventID = $currentRoute.params.eventID
		let event = getEvent(eventID)
		set(event)
	}
})

export const activeEventCommentsStore = derived(
	currentRoute,
	($currentRoute, set) => {
		if ($currentRoute.params.eventID) {
			let eventID = $currentRoute.params.eventID
			let comments = getComments(eventID)
			set(comments)
		}
	}
)

export const activeEventInviteeStore = derived(
	currentRoute,
	($currentRoute, set) => {
		if ($currentRoute.params.eventID) {
			let eventID = $currentRoute.params.eventID
			let invitees = getInvitees(eventID)
			set(invitees)
		}
	}
)
