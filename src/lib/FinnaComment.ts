import { FinnaUser } from './FinnaUser'

export interface FinnaComment {
	author: FinnaUser
	content: String
	created: Number
	id: String
}
