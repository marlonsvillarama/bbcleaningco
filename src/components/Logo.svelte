<script>
    import LogoImage from '$lib/images/logo.svg';
</script>

<div class="logo">
    <img src={LogoImage} alt="">
</div>

<style>
    .logo {
        background-color: var(--color-accent);
        /* border-bottom: 1px solid red; */
        padding: 0;
    }
    img {
        display: block;
        height: 3.5rem;
        margin: 0 auto;
    }
</style>