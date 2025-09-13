<script>
    import Card from "$lib/components/global/card.svelte";
    import FieldSet from "$lib/components/global/fieldset.svelte";
    import FieldsetCheckbox from "../global/fieldset-checkbox.svelte";

    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Label from "$lib/components/ui/label/label.svelte";

    let { data } = $props();
</script>

<Card title="Primary Details" cls="grid grid-cols-2">
    <div class="flex flex-col gap-8 items-top">
        <FieldSet label="First Name">
            {#if data.edit === true}
            <Input class="font-light w-4/5" placeholder="First Name" value={data.first_name} />
            {:else}
            <Label class="font-light text-xs">{data.first_name}</Label>
            {/if}
        </FieldSet>

        <FieldSet label="Last Name">
            {#if data.edit === true}
            <Input class="font-light w-4/5" placeholder="Last Name" value={data.last_name} />
            {:else}
            <Label class="font-light text-xs">{data.last_name}</Label>
            {/if}
        </FieldSet>

        <FieldSet label="Address">
            {#if data.edit === true}
            <Input class="font-light w-4/5" placeholder="Address" value={data.address_1} />
            {:else}
            <Label class="font-light text-xs">{data.address_1}</Label>
            {/if}
        </FieldSet>
    </div>
    <div class="flex flex-col gap-8 items-top">
        <FieldSet label="Phone">
            {#if data.edit === true}
            <Input class="font-light w-32" placeholder="Phone" value={data.phone} />
            {:else}
            <Label class="font-light text-xs">{data.phone}</Label>
            {/if}
        </FieldSet>

        <FieldSet label="Email">
            {#if data.edit === true}
            <Input class="font-light w-4/5" placeholder="Email" value={data.email} />
            {:else}
            <Label class="font-light text-xs">{data.email}</Label>
            {/if}
        </FieldSet>

        <FieldsetCheckbox id={`active-${data.id}`} label="Active" checked={data.active} disabled={data.edit === false} />
    </div>
</Card>
