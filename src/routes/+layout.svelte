<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppHeader from '$lib/components/global/app-header.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<AppHeader />

<div class="flex flex-1 flex-row gap-4 mt-28">
    <div class="flex flex-col gap-4 px-8 w-full">
		{@render children?.()}
	</div>
</div>
