<script>
    import PlusIcon from '$lib/images/plus.svg';

    let { icon, label, onactionclick } = $props();

    const ICONS = {
        'plus': PlusIcon
    };
</script>

<button>
    {#if icon}
        <img src={ICONS[icon]} alt="">
    {/if}
    {label}
</button>

<style>
    button {
        align-items: center;
        background-color: white;
        border: 1px solid var(--color-border);
        display: flex;
        font-size: var(--fs-2xs);
        font-weight: 500;
        gap: 0.5rem;
        padding: 0.375rem 1rem;
    }
    button:hover {
        background-color: var(--color-bg);
        /* border-color: var(--color-accent); */
    }
    img {
        /* margin-right: 1rem; */
        height: 1rem;
    }
</style>