<script>
    import { page } from '$app/stores';
    import CalendarIcon from '$lib/images/calendar.svg';
    import ClientIcon from '$lib/images/client.svg';
    import EmployeeIcon from '$lib/images/employee.svg';
    import EstimateIcon from '$lib/images/estimate.svg';
    import FlagIcon from '$lib/images/flag.svg';
    import GearIcon from '$lib/images/gear.svg';
    import HomeIcon from '$lib/images/home.svg';
    import LeaderboardIcon from '$lib/images/leaderboard.svg';
    import ReportIcon from '$lib/images/reports.svg';

    let { icon, label, link, onlinkclick } = $props();
    let thisActive = $state(false);

    const ICONS = {
        'calendar': CalendarIcon,
        'client': ClientIcon,
        'employee': EmployeeIcon,
        'estimate': EstimateIcon,
        'flag': FlagIcon,
        'gear': GearIcon,
        'home': HomeIcon,
        'leaderboard': LeaderboardIcon,
        'report': ReportIcon
    };
</script>

<a href={link} class:active="{$page.url.pathname.includes(link)}">
    <img src={ICONS[icon]} alt={label}>
    <span>{label}</span>
</a>

<style>
    a {
        align-items: center;
        border: 1px solid transparent;
        border-radius: var(--radius);
        color: var(--color-text-muted);
        cursor: pointer;
        display: flex;
        flex-direction: row;
        font-weight: 500;
        gap: 1rem;
        padding: 0.5rem 1rem;
    }
    a.active {
        background-color: var(--color-accent);
        border: 1px solid var(--color-accent);
        color: var(--color-text);
    }
    a:hover {
        border: 1px solid var(--color-accent);
    }
    img {
        height: 1.125rem;
    }
    span {
        font-size: var(--fs-2xs);
    }
</style>