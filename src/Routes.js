import EventDetail from './pages/EventDetail.svelte'
import LandingPage from './pages/LandingPage.svelte'
import PrivacyPolicy from './pages/PrivacyPolicy.svelte'
import PublicLayout from './layouts/PublicLayout.svelte'

export const routes = {
	eventDetail: {
		name: 'eventDetail',
		path: '/event/:eventID',
		layout: {
			component: PublicLayout,
			content: EventDetail,
		},
	},
	home: {
		name: 'home',
		path: '/home',
		component: LandingPage,
	},
	privacyPolicy: {
		name: 'privacyPolicy',
		path: '/privacy-policy',
		component: PrivacyPolicy,
	},
	default: {
		name: 'default',
		path: '/',
		redirectTo: 'home',
	},
}
