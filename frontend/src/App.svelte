<script>
import Atendee from "./Atendee.svelte";
import Creator from "./Creator.svelte";

</script>

<main>
<Creator></Creator>
<Atendee>

</Atendee>
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