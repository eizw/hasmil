<script lang="ts">
    import { currentUser, pb } from '$lib/pocketbase';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let { children } = $props();

    let persons: any[] = [];
    let families: any[] = [];
    const treeId: string = $page.params.id || '';

    onMount(async () => {
        // Get tree data
        const families = await pb.collection('family').getFullList({
            filter: `tree.id = "${treeId}"`
        })

        console.log(treeId, families);
    })
</script>

{@render children()}