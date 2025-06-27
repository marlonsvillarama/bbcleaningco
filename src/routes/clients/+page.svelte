<script>
    import HeaderAction from "../../components/HeaderAction.svelte";
    import DataTable from "../../components/DataTable.svelte";
</script>

<div class="page">
    <div class="page-header">
        <div class="title">Clients</div>
        <div class="actions">
            <HeaderAction icon="plus" label="Add client" onactionclick={() => {}} />
            <HeaderAction label="Show Inactives" onactionclick={() => {}} />
        </div>
    </div>
    <div class="page-contents">
        <DataTable />
    </div>
</div>

<style></style>