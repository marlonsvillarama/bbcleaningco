<script>
    import { Plus } from '@lucide/svelte/icons'
    import PageCard from "$lib/components/global/page-card.svelte";
    import PageCardHeader from "$lib/components/global/page-card-header.svelte";
    import PageCardTitle from "$lib/components/global/page-card-title.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import ListTable from "$lib/components/global/list-table.svelte";

    let { data } = $props();
</script>

<PageCard>
    <PageCardHeader cls="flex flex-row justify-between">
        <PageCardTitle>Clients</PageCardTitle>
        <div class="flex flex-row items-center gap-4">
            <span class="text-xs font-light inline-block mr-8">Results: <span class="font-semibold">{(new Intl.NumberFormat('en-NZ')).format(data.rows.length * 1234)}</span></span>
            <Button variant="default" size="sm" class="text-xs">
                <Plus /> New
            </Button>
        </div>
    </PageCardHeader>

    <ListTable {data}></ListTable>
</PageCard>

<style></style>