<script>
    import { activeEventCommentsStore, activeEventInviteeStore } from '../lib/EventsStore'
    import { fly } from 'svelte/transition';
    import CommentRow from '../components/CommentRow.svelte'
    import InviteeRow from '../components/InviteeRow.svelte'
    
    let commentsPromise = $activeEventCommentsStore
    let inviteesPromise = $activeEventInviteeStore

    const invited = 1
    const comments = 2
    const going = 3
    let toggle = comments
</script>

{#await inviteesPromise then invitees}
    <section class='links'>
        <input id='rad1' type=radio bind:group={toggle} value={invited}>
        <label class="link" for='rad1'>{invitees.length} invited</label>

        <input id='rad2' type=radio bind:group={toggle} value={comments}>
        <label class="link" for="rad2">comments</label>

        <input id='rad3' type=radio bind:group={toggle} value={going}>
        <label class="link" for="rad3">{invitees.filter(i => i.isGoing).length} going</label>
    </section>

    <section class="toggleArea">
        {#if toggle === invited}
            <section in:fly="{{ x: -200, duration: 500 }}" out:fly="{{ x: 200, duration: 500 }}">
                {#each invitees as invitee}
                    <InviteeRow {invitee} />
                {/each}
            </section>
        {:else if toggle === comments}
            <section in:fly="{{ x: -200, duration: 500 }}" out:fly="{{ x: 200, duration: 500 }}">
                {#await commentsPromise then comments}
                    {#each comments as comment}
                        <CommentRow {comment} />
                    {/each}
                {/await}
                
            </section>
        {:else if toggle === going}
            <section in:fly="{{ x: -200, duration: 500 }}" out:fly="{{ x: 200, duration: 500 }}">
                {#each invitees.filter(i => i.isGoing) as invitee}
                    <InviteeRow {invitee} />
                {/each}
            </section>
        {/if}
    </section>
{/await}



<style>
.links {
    display: flex;
    align-items: stretch;
    margin: 20px 0;
}
.link {
    flex-grow: 1;
    text-align: center;
    color: var(--snorkelfart);
}
input[type="radio"] {
    position: fixed;
    opacity: 0;
    pointer-events: none;
}
input[type="radio"]:checked+label {
    text-decoration: underline;
}
.toggleArea {
    position: relative;
}
.toggleArea > section {
    position: absolute;
    width: 100%;
}
</style>
