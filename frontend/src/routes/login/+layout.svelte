<script lang="ts">
    import { onMount, getContext } from 'svelte';
    import { currentUser, pb } from '$lib/pocketbase';
    import { goto } from '$app/navigation';

    let username: string;
    let password: string;

    async function login() {
        await pb.collection('users').authWithPassword(username, password);
    }

    async function signUp() {
        try {
            const data = {
                username,
                password,
                passwordConfirm: password,
                name: ''
            }

            const createdUser = await pb.collection('users').create(data);
            await login();

        } catch (err) {
            console.log(err);
        }
    }

    function signOut() {
        pb.authStore.clear();
    }

    onMount(async () => {
        if (currentUser != null) {
            goto('/');
        }

        let body = document.querySelector('body');
        body?.addEventListener('keydown', async (e) => {
            if (e.key =='Enter') {
                e.preventDefault();
                await login();
            }
        })
    })
</script>

<form on:submit|preventDefault
    class="flex flex-col gap-3"
>
    <div class="flex justify-center">
        <img src="logo.png" alt="hasmil" class="max-w-52">
    </div>
    <input
        placeholder="Username"
        type="text"
        class="
        block w-full p-2.5 border rounded-lg border-orange-500 placeholder-gray-400 
        text-white px-5 py-3"
        required
        bind:value={username}
    >
    <input
        placeholder="Password"
        type="password"
        class="
        block w-full p-2.5 border rounded-lg border-orange-500 placeholder-gray-400 
        text-white px-5 py-3"
        required
        bind:value={password}
    >
    <button on:click={signUp}
    >Sign Up</button>
    <button on:click={login} type="submit">Login</button>
</form>