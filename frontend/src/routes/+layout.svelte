<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import { currentUser, pb } from '$lib/pocketbase';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if $currentUser}
<nav class="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 w-full">
	<div class="mx-auto w-full px-2">
	  <div class="relative flex h-16 items-center justify-between">
		<div class="absolute inset-y-0 left-0 flex items-center">
		  <!-- Mobile menu button-->
		  <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
			<span class="absolute -inset-0.5"></span>
			<span class="sr-only">Open main menu</span>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
			  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
			  <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		  </button>
		</div>
		<div class="flex flex-1 items-center justify-center">
		</div>
		<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  
		  <!-- Profile dropdown -->
		  <el-dropdown class="relative ml-3">
			<button class="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
			  <span class="absolute -inset-1.5"></span>
			  <span class="sr-only">Open user menu</span>
			  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
			</button>
  
			<el-menu anchor="bottom end" popover class="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in bg-gray-800 shadow-none -outline-offset-1 outline-white/10">
			  <a href="/" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden text-gray-300 focus:bg-white/5">Your profile</a>
			  <a href="/" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden text-gray-300 focus:bg-white/5">Settings</a>
			  <a href="/" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden text-gray-300 focus:bg-white/5">Sign out</a>
			</el-menu>
		  </el-dropdown>
		</div>
	  </div>
	</div>
  
	<el-disclosure id="mobile-menu" hidden class="block">
	  <div class="space-y-1 px-2 pt-2 pb-3">
		<!-- Current: "bg-gray-900 bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
		<a href="/" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white bg-gray-950/50">Dashboard</a>
		<a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
		<a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
		<a href="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
	  </div>
	</el-disclosure>
</nav>
{/if}

{@render children()}
