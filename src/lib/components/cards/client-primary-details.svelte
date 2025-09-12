<script>
    import Card from "$lib/components/global/card.svelte";
    import FieldSet from "$lib/components/global/fieldset.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";

    let { data } = $props();
</script>

<Card title="Primary Details">
    <div class="flex flex-col gap-8 items-top">
        <FieldSet label="First Name">
            {#if data.edit === true}
            <Input class="font-light" placeholder="First Name" value={data.first_name} />
            {:else}
            <Label class="font-light">{data.first_name}</Label>
            {/if}
        </FieldSet>

        <FieldSet label="Last Name">
            {#if data.edit === true}
            <Input class="font-light" placeholder="Last Name" value={data.last_name} />
            {:else}
            <Label class="font-light">{data.last_name}</Label>
            {/if}
        </FieldSet>
    </div>
</Card>
