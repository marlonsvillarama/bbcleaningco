<script>
    import ArrowLeft from '@lucide/svelte/icons/arrow-left';
    import Pencil from '@lucide/svelte/icons/pencil';
    import Tag from '@lucide/svelte/icons/tag';
    import UserRound from '@lucide/svelte/icons/user-round';

    import Badge from "$lib/components/ui/badge/badge.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    import Card from '$lib/components/global/card.svelte';
    import PageCard from '$lib/components/global/page-card.svelte';
    import PageCardHeader from '$lib/components/global/page-card-header.svelte';
    import PageCardTitle from '$lib/components/global/page-card-title.svelte';
    import PageCardContent from '$lib/components/global/page-card-content.svelte';
    import PageCardContentColumn from '$lib/components/global/page-card-content-column.svelte';

    import ClientPrimaryDetails from '$lib/components/cards/client-primary-details.svelte';

    let { data } = $props();
    console.log('+page data', data);

    const backToList = () => window.location.href = '/app/clients';
</script>

<PageCard>
    <PageCardHeader cls="flex flex-row justify-between">
        <div class="flex flex-row items-center gap-12">
            <div class="flex flex-row items-center gap-3">
                <UserRound class="text-sm" />
                <PageCardTitle>{data.last_name}, {data.first_name}</PageCardTitle>
            </div>
            <Badge variant="secondary" class="px-2 py-1">{data.client_status.name}</Badge>
        </div>
        <div class="flex flex-row items-center gap-3">
            <Button variant="default" size="sm" class="text-xs">
                <Pencil /> Edit
            </Button>
            <Button variant="secondary" size="sm" class="text-xs">
                <Tag /> New Quotation
            </Button>
            <Button variant="secondary" size="sm" class="text-xs" onclick={backToList}>
                <ArrowLeft /> Back to list
            </Button>
        </div>
    </PageCardHeader>

    <PageCardContent cls="flex flex-row">
        <PageCardContentColumn width="3/4">
            <ClientPrimaryDetails />

            <Card title="Notes">
                content
            </Card>
            <Card title="Service History">
                content
            </Card>
            <Card title="Audit Trail">
                content
            </Card>
            <Card title="Audit Trail">
                content
            </Card>
            <Card title="Audit Trail">
                content
            </Card>
        </PageCardContentColumn>
        <PageCardContentColumn width="1/4">
            <Card title="Sales">
                content
            </Card>
            <Card title="Financials">
                content
            </Card>
        </PageCardContentColumn>
    </PageCardContent>
</PageCard>
