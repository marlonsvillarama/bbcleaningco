<script>
    let {
        children,
        cls = '',
        title
    } = $props();
</script>

<div class="w-full rounded-lg shadow-xs bg-white">
    <div class="px-4 py-2 bg-accent/50 rounded-t-lg">
        <span class="font-semibold text-sm">{title}</span>
    </div>
    <div class="px-8 py-6 gap-8 items-top {cls}">
        {@render children()}
    </div>
</div>