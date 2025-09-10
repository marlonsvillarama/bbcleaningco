<script>
    import BusyBeeLogo from '$lib/images/Last_logo2.svg';
    import CircleUserIcon from '@lucide/svelte/icons/circle-user';
    import HelpIcon from '@lucide/svelte/icons/info';
    import HistoryIcon from '@lucide/svelte/icons/history';
    import LogoutIcon from '@lucide/svelte/icons/log-out';

    import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
    import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";
    import Button from '$lib/components/ui/button/button.svelte';
    import Input from '$lib/components/ui/input/input.svelte';
    import Label from '$lib/components/ui/label/label.svelte';
</script>

<header class="fixed top-0 left-0 right-0 shadow">
    <div class="flex flex-row align-center justify-between px-8 bg-accent">
        <img src={BusyBeeLogo} alt="Busy Bee Cleaning Co" class="logo">
        <!-- <div class="flex flex-row align-center border">
            <Input type="text" class="border" placeholder="Search here..." />
        </div> -->
        <div class="flex flex-row align-center">
            <Button variant="menu">Help</Button>
            <Button variant="menu">Log Out</Button>
        </div>
    </div>

    <div class="bg-white px-4 flex flex-row align-center justify-between">
        <NavigationMenu.Root viewport={false}>
            <NavigationMenu.List>
                <NavigationMenu.Item class="rounded-0">
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/" class={navigationMenuTriggerStyle()}>Dashboard</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/quotations" class={navigationMenuTriggerStyle()}>Quotations</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/dispatch" class={navigationMenuTriggerStyle()}>Dispatch</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/clients" class={navigationMenuTriggerStyle()}>Clients</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/clients" class={navigationMenuTriggerStyle()}>Employees</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/clients" class={navigationMenuTriggerStyle()}>Teams</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/clients" class={navigationMenuTriggerStyle()}>Reports</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link>
                        {#snippet child()}
                        <a href="/clients" class={navigationMenuTriggerStyle()}>Settings</a>
                        {/snippet}
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>

        <Button variant="menu">History</Button>
    </div>

</header>

<style>
    img.logo {
        height: 3.5rem;
    }
</style>
