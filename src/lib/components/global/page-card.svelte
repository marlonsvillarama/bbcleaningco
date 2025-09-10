<script>
    let { cls, children } = $props();
</script>

<div class="page-card rounded-lg bg-white w-full shadow {cls}">
    {@render children()}
</div>

<style>
    .page-card {
        padding: 0;
    }
</style>