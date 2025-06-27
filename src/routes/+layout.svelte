<script>
    import '../css/app.css';
    import Sidebar from '../components/Sidebar.svelte';

    let { children } = $props();
</script>

<main>
    <div class="sidebar"sidebar>
        <Sidebar />
    </div>
    <div class="content">
        {@render children()}
    </div>
</main>

<style>
    main {
        /* border: 1px solid red; */
        height: 100%;
        position: relative;
    }
    .sidebar {
        bottom: 0;
        left: 0;
        position: fixed;
        top: 0;
        width: 18rem;
        z-index: 999;
    }
    .content {
        /* height: 1000px; */
        margin-left: 18rem;
    }
</style>