<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { currentUser, pb } from './pocketbase'
    import { goto } from ''

    // states
    let showCreateTreeModal = false;

    let trees: any[] = [];

    let newTreeName: string = '';
    

    onMount(async () => {
        // Get user's trees
        const resultList = await pb.collection('tree').getList(1, 5, {
            sort: 'created',
            expand: 'user',
            filter: `user.id = "${$currentUser!.id}"`,
        })

        trees = resultList.items

        pb
            .collection('tree')
            .subscribe('*', async ({ action, record }) => {
                if (record.user === $currentUser!.id) {
                    if (action === 'create') {
                        trees = [...trees, record];
                    }
                    if (action === 'delete') {
                        trees = trees.filter((t) => t.id !== record.id);
                    }
                }
            });
    })

    function toggleCreateTreeModal() {
        showCreateTreeModal = !showCreateTreeModal;
    }

    async function createTree() {
        const data = {
            'user': $currentUser!.id,
            'name': newTreeName,
        }

        const newTree = await pb.collection('tree').create(data);
        newTreeName = '';
        toggleCreateTreeModal();
        
    }

    let body = document.querySelector('body');
    body?.addEventListener('keydown', async (e) => {
        if (e.key =='Enter') {
            e.preventDefault();
            await createTree();
        }
    })
</script>

<p class="mb-3">Signed in as {$currentUser?.username}</p>

<div class="h-6/12 flex flex-col gap-3 overflow-y-auto w-full">
    {#each trees as tree (tree.id)}
        <a href="/tree/{tree.id}">
            <div 
                class="h-24 border-2 border-gray-500 rounded-lg flex justify-center align-middle hover:bg-zinc-600 transition-all"

            >
                <div class="flex flex-col justify-center align-middle ">
                    {tree.name}
                </div>
            </div>
        </a>
    {/each}
</div>

<div id="createTreeModal" tabindex="-1" aria-hidden="true" class="hidden modal "
    class:hidden={!showCreateTreeModal}
>
    <div class="modal-content">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow-md">
            <!-- Modal header -->
            <div class="flex items-center justify-between px-1 py-2">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    New Tree
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-zinc-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    on:click={toggleCreateTreeModal}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="space-y-4 px-1 py-2">
                <form on:submit|preventDefault={createTree}
                    class="flex flex-col gap-3"
                >
                    <input
                        placeholder="Name"
                        type="text"
                        class="focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 border rounded-lg border-orange-500 placeholder-gray-400 
                        text-white px-5 py-3"
                        bind:value={newTreeName}
                    >
                </form>
                
            </div>
            <!-- Modal footer -->
            <div class="flex items-center px-1 py-2">
                <button on:click={createTree} type="submit" class="text-white bg-orange-500 hover:bg-zinc-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create</button>
            </div>
        </div>
    </div>
</div>

<button
    type="button"
    class="relative bottom-5 right-5
        bg-orange-500 rounded-full text-white
        size-12 p-3
        text-5xl text-center
    "
    on:click={toggleCreateTreeModal}
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="white">
        <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
    </svg>
</button>