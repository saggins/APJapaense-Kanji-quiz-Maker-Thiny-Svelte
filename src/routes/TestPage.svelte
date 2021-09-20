<script>
    import { onMount } from "svelte";
    export let params = {};
    let kanjiCards = [];
	onMount(async function() {
        const response = await fetch("cardData/" + params.id + ".json");
        let json = await response.json()
        kanjiCards = json.list;
    });
</script>

<main>
    {#each kanjiCards as card}
        <p>{card.kanji}</p>
    {:else}
        <!-- this block renders when photos.length === 0 -->
        <p>loading...</p>
    {/each}
</main>
