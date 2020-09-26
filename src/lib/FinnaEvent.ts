import { FinnaUser } from './FinnaUser'

export interface FinnaEvent {
	author: FinnaUser
	dateLastUpdated: Number
	description: String
	id: String
	placeOccurring: String
	timeOccurring: String
}
