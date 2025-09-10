<script>
    let { children } = $props();
</script>

<div class="page-header w-full grid grid-cols-3 items-center px-4 py-2">
    {@render children()}
</div>

<style>
    .page-header > *:first-child {
        justify-content: left;
    }
    .page-header > *:last-child {
        justify-content: right;
    }
</style>