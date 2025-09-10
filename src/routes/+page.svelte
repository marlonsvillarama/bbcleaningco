<script>
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Button, { buttonVariants } from "$lib/components/ui/button/button.svelte";
    import { Action } from "$lib/components/ui/alert-dialog/index.js";
    let { data } = $props();

    const clickButton = () => {
        alert('clicked');
    };
</script>

<ul>
    {#each data.instruments as instrument}
        <li>{instrument.name}</li>
    {/each}
</ul>

<!-- 
<Button variant="default" class="hover:cursor-pointer" onclick={clickButton}>Click me</Button> -->

<!-- <Dialog.Root>
    <Dialog.Trigger class={ buttonVariants({ variant: "secondary" }) }>Delete Profile</Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Are you sure?</Dialog.Title>
            <Dialog.Description>Deleting your profile cannot be undone. Please consult your Administrator for help.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
            <Button class="cursor-pointer" variant="default">Proceed</Button>
            <Button class="cursor-pointer" variant="ghost">Cancel</Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root> -->

