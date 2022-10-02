<script>
import Atendee from "./Atendee.svelte";
import Creator from "./Creator.svelte";
let createOrJoin = -1
</script>

<main>
	<p>CREATE OR JOIN EVENT</p>
<select bind:value={createOrJoin}>
	<option value=0>CREATE EVENT</option>
	<option value=1>JOIN EVENT</option>
</select>
{#if createOrJoin == 0}
<Creator></Creator>
{/if}
{#if createOrJoin == 1}
<Atendee></Atendee>
{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>