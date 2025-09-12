<script>
    let {
        children,
        width = 'full'
    } = $props();
</script>

<div class="w-{width} flex flex-col gap-8">
    {@render children()}
</div>