<script>
    import InputSwitch from "./InputSwitch.svelte";

    let data = {
        cols: [
            {
                label: 'First Name',
                id: 'fn',
                width: '12'
            },
            {
                label: 'Last Name',
                id: 'ln',
                width: '12'
            },
            {
                label: 'Contact Info',
                id: 'ci',
                width: '15'
            },
            {
                label: 'Address',
                id: 'ad',
                width: '20'
            },
            {
                label: '',
            }
        ],
        rows: [
            {

            }
        ]
    };
</script>

<div class="table">
    <div class="headers">
        {#each data.cols as col}
        <div class="cell header" style="width: {col.width || '10'}rem">{col.label}</div>
        {/each}
        <!-- <div class="cell header">Last Name</div>
        <div class="cell header">Contact Info</div>
        <div class="cell header">Address</div>
        <div class="cell header"></div> -->
    </div>
    <div class="rows">
        <div class="row">
            <div class="cell">
                <InputSwitch />
            </div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
    </div>
</div>

<!-- <table class="table">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Info</th>
            <th>Address</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>marlon</td>
            <td>villarama</td>
            <td>1234567890</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    <tfoot></tfoot>
</table> -->

<style>
    .table {
        border: 1px solid var(--color-border);
        border-collapse: collapse;
        border-radius: var(--radius);
        height: 100%;
        width: 100%;
    }
    .header, .cell {
        /* border-bottom: 1px solid var(--color-border); */
        color: var(--color-text-muted);
        /* display: inline-block; */
        font-size: var(--fs-xs);
        /* height: 1.5rem; */
        letter-spacing: 0.25px;
        /* line-height: 2rem; */
        /* min-width: 10rem; */
        padding: 0.5rem 1rem;
        /* width: 15rem; */
        text-align: left;
        /* border: 1px solid red; */
    }
    .header {
        font-weight: 600;
    }
    .header:not(:last-child) {
        border-right: 1px solid var(--color-border);
    }
    .headers {
        border-bottom: 1px solid var(--color-border);
        display: flex;
        flex-direction: row;
        gap: 0;
        align-items: center;
    }
</style>