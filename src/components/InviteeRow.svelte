<script>
    import ProfilePhoto from '../components/ProfilePhoto.svelte'
    
    export let invitee
</script>

<ion-item>
    <div class="invitee header-row">
        <ProfilePhoto size='50px' photo={invitee.user.picID} />
        <p class="username">{invitee.user.username}</p>
        {#if invitee.isGoing}
            <img class="check" src="/assets/Iconography/check_dark.png" alt="check-mark">
        {/if}
    </div>    
</ion-item>


<style>
.invitee {
    padding: 10px 0;
    width: 100%;
}
.username {
    font-family: Catamaran-Bold;
    margin-left: 0.75rem;
}
.check {
    width: 15px;
}
</style>