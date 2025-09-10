<script>
    let { data } = $props();
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
        <tr class="row {index % 2 > 0 ? 'bg-accent/10' : ''} hover:bg-accent/15 hover:shadow transition-all duration-200 ease-in-out">
            {#each data.columns as col}
                <td
                    class="cell px-4 py-2 text-xs font-light {col.width ? `w-${col.width}` : ''} text-left align-top cursor-pointer"
                    data-col-id="col-{col.id}">
                    {row[col.id]}
                </td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
    .cell {
        white-space: pre-line;
        line-height: 1.25rem;
    }
</style>