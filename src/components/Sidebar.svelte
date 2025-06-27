<script>
    import Logo from "./Logo.svelte";
    import NavLink from "./NavLink.svelte";
    import UserChip from "./UserChip.svelte";

    let user = {
        fn: 'Charles Aaron',
        ln: 'Madrid',
        role: 'Brand Manager'
    };


</script>

<div class="wrapper">
    <section class="top">
        <Logo />

        <UserChip data={user} />

        <nav>
            <NavLink link="/home" icon="home" label="Dashboard" />
            <NavLink link="/calendar" icon="calendar" label="Calendar" />
            <NavLink link="/leaderboard" icon="leaderboard" label="Leaderboard" />
            <NavLink link="/quotations" icon="estimate" label="Quotations" />
            <NavLink link="/clients" icon="client" label="Clients" />
            <NavLink link="/employees" icon="employee" label="Employees" />
            <NavLink link="/teams" icon="flag" label="Teams" />
            <NavLink link="/report" icon="report" label="Reports" />
            <NavLink link="/settings" icon="gear" label="Settings" />
        </nav>
    </section>

    <button class="logout">Log Out</button>
</div>

<style>
    .wrapper {
        background-color: var(--color-bg-lite);
        border-right: 1px solid var(--color-border-lite);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* padding: 1rem; */
        height: 100%;
        justify-content: space-between;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    nav {
        /* padding: 1rem;
        padding-top: 0; */
        /* border: 1px solid red; */
        padding: 0 0.75rem;
    }
    /* h3.title {
        /* border-bottom: 1px solid var(--color-border); *
        border-top: 1px solid var(--color-border);
        font-size: var(--fs-xs);
        font-weight: 600;
        padding: 0.5rem 0.75rem 0.75rem;
    } */
    button.logout {
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        padding: 0.5rem 1rem;
        margin: 0.75rem;
    }
    button.logout:hover {
        background-color: var(--color-bg-lite);
        color: red;
    }
</style>