<script>
    import ListTablePaginator from "./list-table-paginator.svelte";

    let { data } = $props();
    const SIZE = 3;
    let page = $state(0);
    let start = $derived(page * SIZE);
    let end = $derived(start + SIZE);

    /* let data_2 = {
        columns: [
            { id: 'id', label: 'ID', width: 20 },
            { id: 'name', label: 'Name', width: 48 },
            { id: 'address', label: 'Address', width: 48 },
            { id: 'email', label: 'Email', width: 32 },
            { id: 'phone', label: 'Phone', width: 28 },
            { id: 'status', label: 'Status', width: 24 },
            { id: 'active', label: 'Active', width: 20 },
            { id: 'actions', label: '' },
        ],
        rows: [
            {
                id: '100234',
                name: 'Employee, Test 1',
                phone: '022-123-4567',
                address: `123 Main Street
                Kelvin Grove
                Palmerston North`,
                email: 'employee_1@test.com',
                status: 'Approved',
                active: 'Yes'
            },
            {
                id: '123',
                name: 'Employee, Test 1',
                phone: '022-123-4567',
                address: `123 Main Street
                Kelvin Grove
                Palmerston North`,
                email: 'marlonsvillarama@gmail_test.com',
                status: 'Draft',
                active: 'Yes'
            },
            {
                id: '123',
                name: 'Employee, Test 1',
                phone: '022-123-4567',
                address: `123 Main Street
                Kelvin Grove
                Palmerston North`,
                email: 'employee_1@test.com',
                status: 'Approved',
                active: 'Yes'
            }
        ]
    }; */
    console.log('data', data);
</script>

<table class="w-full" cellpadding="0" cellspacing="0" border="0">
    <thead class="px-5 headers bg-accent/50">
        <tr>
        {#each data.columns as col, index}
            <th class="px-4 py-3 text-xs font-semibold {col.width ? `w-${col.width}` : ''} text-left" data-col-id="col-{col.id}">{col.label}</th>
        {/each}
        </tr>
    </thead>

    <tbody>
        {#each data.rows as row, index}
        <tr class="row {index % 2 > 0 ? 'bg-accent/10' : ''} hover:shadow transition-all duration-100 ease-in-out">
            {#each data.columns as col, ci}
                {#if ci === data.columns.length - 1}
                    <td class="cell px-4 py-2 text-xs font-semibold text-right align-top flex flex-row gap-2">
                        <a href={row.links.view} class="hover:underline">View</a> | <a href={row.links.edit} class="hover:underline">Edit</a>
                    </td>
                {:else}
                    <td
                        class="cell px-4 py-2 text-xs font-light {col.width ? `w-${col.width}` : ''} text-left align-top"
                        data-col-id="col-{col.id}">
                        {row[col.id]}
                    </td>
                {/if}
            {/each}
        </tr>
        {/each}
    </tbody>

    <tfoot>
        <tr>
            <th colspan={data.columns.length}>
                <ListTablePaginator count={data.rows.length} page={start} size={SIZE} />
            </th>
        </tr>
    </tfoot>
</table>

<style>
    .cell {
        white-space: pre-line;
        line-height: 1.25rem;
    }
</style>