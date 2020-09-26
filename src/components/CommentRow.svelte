<script>
    import ProfilePhoto from '../components/ProfilePhoto.svelte'
    import { timeAgo } from '../util/time.js'
    export let comment
</script>

<div class="comment">
    <ProfilePhoto size='50px' photo={comment.author.picID} />
    <div>
        <section class="content">
            <p class="username">{comment.author.username}</p>
            <p>{ timeAgo(new Date(comment.created * 1000)) }</p>
        </section>
        <p>{comment.content}</p>
    </div>
</div>

<style>
.comment {
    display: flex;
    align-items:flex-start;
    padding: 10px 0;
    border-bottom: 1px solid var(--dolphin);
}

.comment > div {
    width: 100%;
    margin-left: 0.5rem; 
}
.content {
    display: flex;
    justify-content: space-between;
}
.content > p {
    margin: 0;
}
</style>