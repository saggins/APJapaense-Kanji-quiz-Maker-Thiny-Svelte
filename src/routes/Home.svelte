<script>
	import KanjiListPick from '../KanjiListPick.svelte';
	import {push, pop, replace}  from 'svelte-spa-router';
    $: listOption = "";	
</script>
<main>
	<h1>Hello AP JAPENSE!</h1>
	<p>Please select any quizlet you want to study</p>
	<KanjiListPick bind:listOption={listOption}/>
	<button on:click={() => push('/test/' + listOption)}>Construct Test for {decodeURIComponent(listOption)}</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>