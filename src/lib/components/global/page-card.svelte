<script>
    let { children } = $props();
</script>

<div class="page-card rounded-lg bg-white w-full">
    {@render children()}
</div>

<style>
    .page-card {
        padding: 0;
    }
</style>