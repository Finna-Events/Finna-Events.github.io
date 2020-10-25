<script>
    import { activeEventStore, activeEventCommentsStore, activeEventInviteeStore } from '../lib/EventsStore'
    import { layoutStore } from '../lib/LayoutStore.ts'
    import EventListToggleView from '../components/EventListToggleView.svelte'
    import EventInvitationView from '../components/EventInvitationView.svelte'
    import AppStoreBanner from '../components/AppStoreBanner.svelte'

    $layoutStore.title = "event"
    let eventPromise = $activeEventStore

    let showBanner = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
</script>

<ion-content class="ion-padding" forceOverscroll="true">
    {#await eventPromise}
        <p>~ loading~ </p>
    {:then event}
        <EventInvitationView {event} />
        <EventListToggleView/>
    {:catch error}
        <p>something went wrong... {error.message}</p>
    {/await}
    
    {#if showBanner}
        <AppStoreBanner />
    {/if}
</ion-content>














