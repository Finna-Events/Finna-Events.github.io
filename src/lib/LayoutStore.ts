import { writable } from 'svelte/store'

export const layoutStore = writable({
	showBack: false,
	title: 'No Title Specified',
})
