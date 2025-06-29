<script>
    import HeaderAction from "../../components/HeaderAction.svelte";
    import ClientTable from "../../components/ClientTable.svelte";
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
        <ClientTable />
    </div>
</div>

<style></style>