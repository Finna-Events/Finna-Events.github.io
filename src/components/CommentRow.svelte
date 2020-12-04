<script>
    import ProfilePhoto from '../components/ProfilePhoto.svelte'
    import { timeAgo } from '../util/time.js'
    export let comment
</script>

<ion-item>
    <div class="comment">
        <ProfilePhoto size='50px' photo={comment.author.picID} />
        <div>
            <section class="header-row">
                <p class="username">{comment.author.username}</p>
                <p class="timestamp">{ timeAgo(new Date(comment.created * 1000)) }</p>
            </section>
            <p class="content">{comment.content}</p>
        </div>
    </div>
</ion-item>

<style>
.username {
    font-family: Catamaran-Bold;
}
.timestamp {
    color: var(--dolphin);
    font-size: 0.8rem;
}
.comment {
    display: flex;
    align-items:flex-start;
    padding: 10px 0;
    width: 100%;
}

.comment > div {
    width: 100%;
    margin-left: 0.75rem; 
}
.content {
    margin: 0.5rem 0;
}
.header-row {
    display: flex;
    justify-content: space-between;
}
.header-row > p {
    margin: 0;
}
</style>