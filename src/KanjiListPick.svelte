<script>
    import { onMount } from "svelte";
    let listOfKanji = [];
	onMount(async function() {
        const response = await fetch("cardData/index.json");
        let json = await response.json()
        listOfKanji = json.list;
    });
    export let listOption = "";
</script>

<select bind:value={listOption}>
    {#each listOfKanji as list}
        <option value={list}>
            {decodeURIComponent(list)};
        </option>
    {:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
    {/each}
</select>


