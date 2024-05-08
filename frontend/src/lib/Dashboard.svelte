<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { currentUser, pb } from './pocketbase'

    let trees: any[] = [];

    onMount(async () => {
        // Get user's trees
        const resultList = await pb.collection('trees').getList(1, 5, {
            sort: 'created',
            expand: 'user',
        })

        trees = resultList.items
    })

</script>

<div class="trees">
    {#each trees as tree (tree.id)}
        <div class="tree">

        </div>
    {/each}
</div>