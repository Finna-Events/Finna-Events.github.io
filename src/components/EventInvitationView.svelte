<script>
    import ProfilePhoto from '../components/ProfilePhoto.svelte'
    import { timeAgo } from '../util/time.js'
    export let event
</script>

<section class="header-row">
    <ProfilePhoto size='50px' photo={event.author.picID} />
    <h2 class="username">{event.author.username}</h2>
    <p class="text-small">
        { timeAgo(new Date(event.dateLastUpdated * 1000)) }
    </p>
</section>

<p>{event.description}</p>

<section class='event-detail'>
    <img src="/assets/Iconography/clock.pdf" alt="icon-clock" class="icon clock">
    <p>{event.timeOccurring}</p>
</section>

<section class='event-detail'>
    <img src="/assets/Iconography/pin.pdf" alt="icon-pin" class="icon pin">
    <p>{event.placeOccurring}</p>
</section>

<!--
    <ion-button expand="block">
        ~ Ur Finna ~
    </ion-button>
-->

<style>
.event-detail {
    display: flex;
    align-items: center;
}
.icon {
    width: 20px;
    margin-right: 0.5rem;
}
.username {
    color: var(--sharkbait);
    font-family: Catamaran-Bold;
}
.text-small {
    color: var(--dolphin);
}
</style>