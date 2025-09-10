<script>
    import PageCard from "$lib/components/global/page-card.svelte";
    import PageCardHeader from "$lib/components/global/page-card-header.svelte";
    import PageCardTitle from "$lib/components/global/page-card-title.svelte";
    import ListTable from "$lib/components/global/list-table.svelte";

    let { data } = $props();
</script>

<PageCard>
    <PageCardHeader cls="flex flex-row justify-between">
        <PageCardTitle>Clients</PageCardTitle>
        <span>actions</span>
    </PageCardHeader>

    <ListTable {data}></ListTable>
</PageCard>

<style></style>