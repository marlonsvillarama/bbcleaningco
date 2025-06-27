<script>
    import AvatarIcon from '$lib/images/avatar.svg';

    let { data } = $props();
</script>

<div class="wrapper">
    <img src={AvatarIcon} alt="">
    <div class="info">
        <span class="name">{data.fn} {data.ln}</span>
        <span class="role">{data.role}</span>
    </div>
</div>

<style>
    .wrapper {
        align-items: center;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        /* height: 1rem; */
        padding: 0 0.75rem;
        width: 100%;
    }
    img {
        height: 2.5rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        /* gap: -0.25rem; */
    }
    .name {
        font-size: var(--fs-sm);
        font-weight: 700;
    }
    .role {
        font-size: var(--fs-2xs);
    }
</style>