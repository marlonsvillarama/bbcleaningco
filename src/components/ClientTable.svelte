<script>
    import { onMount } from "svelte";
    import InputSwitch from "./InputSwitch.svelte";

    let data = {
        cols: [
            {
                label: 'First Name',
                id: 'fn',
                width: '10'
            },
            {
                label: 'Last Name',
                id: 'ln',
                width: '10'
            },
            {
                label: 'Contact Info',
                id: 'ci',
                width: '20'
            },
            {
                label: 'Address',
                id: 'ad',
                width: '16'
            }
        ],
        rows: [
            {
                fn: 'Benhur', ln: 'Abalos',
                ci: { ph: '0917-222-1111', em: 'benhur.abalos@mandaluyong.gov.ph' },
                ad: {
                    ad1: '143 Boni Avenue',
                    ad2: 'Brgy. Vergara',
                    city: 'Mandaluyong',
                    zip: '1601'
                },
            }
        ]
    };

    let searchValues = $state({
        fn: '',
        ln: '',
        ci: '',
        ad: ''
    })
    
    let filteredRows = $derived.by(() => {
        let output = data.rows;
        console.log('searchValues', searchValues);
        if (searchValues.fn) {
            output = output.filter(d => d.fn.indexOf(searchValues.fn) >= 0);
        }
        if (searchValues.ln) {
            output = output.filter(d => d.ln.indexOf(searchValues.ln) >= 0);
        }
        if (searchValues.ci) {
            output = output.filter(d => d.ci.ph.indexOf(searchValues.ci) >= 0 || d.ci.em.indexOf(searchValues.ci) >= 0)
        }
        if (searchValues.ad) {
            output = output.filter(d =>
                d.ad.ad1.indexOf(searchValues.ad) >= 0 ||
                d.ad.ad2.indexOf(searchValues.ad) >= 0 ||
                d.ad.city.indexOf(searchValues.ad) >= 0 ||
                d.ad.zip.indexOf(searchValues.ad) >= 0
            )
        }
        return output;
    });

    onMount(() => {
        for (let i = 0; i < 50; i++) {
            let obj = data.rows[0];
            data.rows.push({
                ...data.rows[0],
                fn: `${obj.fn} ${i.toString()}`,
                ln: `${obj.fn} ${(i*3).toString()}`,
                ci: {
                    ph: `${obj.ci.ph} ${(i * 1.25).toString()}`,
                    em: `${obj.ci.em} ${(i * 0.33).toString()}`
                },
                ad: {
                    ...obj.ad,
                    zip: `${obj.ad.zip}-${i.toString().padStart(4, '0')}`
                }
            });
            data.rows = data.rows;
            console.log(`i = ${i}; `, data.rows[data.rows.length - 1]);
        }
        console.log('data rows', data.rows);
        filteredRows = data.rows;
    });
</script>

{#snippet contact(data)}
    <span>{data.ph}</span>
    <span>{data.em}</span>
{/snippet}

{#snippet address(data)}
    <span>{data.ad1}</span>
    {#if data.ad2}
        <span>{data.ad2}</span>
    {/if}
    <span>{data.city} {data.zip}</span>
{/snippet}

<div class="table">
    <div class="rows">
        <div class="row headers">
            {#each data.cols as col}
            <div class="cell header" style="width: {col.width || '10'}rem">{col.label}</div>
            {/each}
        </div>

        <div class="row search">
            {#each data.cols as col}
            <div class="cell" style="width: {col.width || '10'}rem">
                <input type="text" bind:value={searchValues[col.id]}>
                <!-- <input type="text" onchange={(e) => filterRows(col.id, e.target.value)}> -->
            </div>
            {/each}
        </div>
    </div>

    <div class="rows content">
        {#each filteredRows as row}
        <div class="row">
            {#each data.cols as col}
                <div class="cell" style="width: {col.width || '10'}rem">
                    {#if col.id === 'ci'}
                        {@render contact(row[col.id])}
                    {:else if col.id === 'ad'}
                        {@render address(row[col.id])}
                    {:else}
                        <span>{row[col.id]}</span>
                    {/if}
                </div>
            {/each}
        </div>
        {/each}
    </div>
</div>

<style>
    .table {
        border: 1px solid var(--color-border);
        border-collapse: collapse;
        border-radius: var(--radius);
        height: 100%;
        width: 100%;

        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
    }
    .rows {
        display: flex;
        flex-direction: column;
    }
    .row {
        border-bottom: 1px solid var(--color-border);
        display: flex;
        flex-direction: row;
    }
    .headers {
        flex: 0 0 auto;
    }
    .content {
        flex: 1 1 auto;
        overflow-y: auto;
    }
    .header, .cell {
        color: var(--color-text-muted);
        font-size: var(--fs-xs);
        letter-spacing: 0.25px;
        padding: 0.5rem 1rem;
        text-align: left;
    }
    .header {
        font-weight: 600;
    }
    .header:not(:last-child) {
        border-right: 1px solid var(--color-border);
    }
    .search {
        background-color: var(--color-bg);
    }
    .search > .cell {
        padding: 0.25rem 0.25rem;
    }
    .search input[type=text] {
        border-radius: var(--radius);
    }
    .cell {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
</style>