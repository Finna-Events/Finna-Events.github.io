<script>
    export let photo;
    export let size;
</script>

<img style="--size: {size}" src="/assets/Profile Images/{photo}/{photo}@3x.png" alt="{photo}">

<style>

img {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
}

</style>