<script lang="ts">
  import {currentUser, pb} from './lib/pocketbase';

  import Login from './lib/Login.svelte'
  import Dashboard from './lib/Dashboard.svelte';
</script>

{#if $currentUser}
  <Dashboard />
{:else}
  <Login />
{/if}