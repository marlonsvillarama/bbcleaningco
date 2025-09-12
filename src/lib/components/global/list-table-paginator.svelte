<script>
    // import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, Ellipsis } from "@lucide/svelte";
    import ChevronFirst from '@lucide/svelte/icons/chevron-first';
    import ChevronLast from '@lucide/svelte/icons/chevron-last';
    import ChevronLeft from '@lucide/svelte/icons/chevron-left';
    import ChevronRight from '@lucide/svelte/icons/chevron-right';
    import Button from "$lib/components/ui/button/button.svelte";

    let {
        count = 0,
        page = 0,
        size
    } = $props();

    let pages = Math.ceil(count / size);
    console.log('pages', pages);
</script>

<div class="bg-accent/25 flex flex-row gap-2 items-center justify-center py-2">
    <Button variant="secondary" size="icon_sm"><ChevronFirst /></Button>
    <Button variant="secondary" size="icon_sm"><ChevronLeft /></Button>
    {#each Array(pages) as _, index}
        <Button variant={page === index ? "default" : "secondary"} class="text-xs" size="icon_sm">{index + 1}</Button>
    {/each}
    <Button variant="secondary" size="icon_sm"><ChevronRight /></Button>
    <Button variant="secondary" size="icon_sm"><ChevronLast /></Button>
</div>
