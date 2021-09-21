<script>
    import { onMount } from "svelte";
    import { Alert, Table ,Col, Container, Row } from 'sveltestrap';

    export let params = {};
    let kanjiCards = [];
    let randomCards = []
    let recallCards = []

	onMount(async function() {
        const response = await fetch("cardData/" + params.id + ".json");
        let json = await response.json()
        kanjiCards = json.list;
        let usedIndexes = [];
        for (let i = 0; i < 12; i++) {
            let randomnum = Math.floor(Math.random()*kanjiCards.length);
            while(usedIndexes.includes(randomnum)) {
                randomnum = Math.floor(Math.random()*kanjiCards.length);
            }
            
            randomCards[i] = (kanjiCards[randomnum]);
            usedIndexes.push(randomnum);
        }
        for (let i = 0; i < 6; i++) {
            let randomnum = Math.floor(Math.random()*kanjiCards.length);
            while(usedIndexes.includes(randomnum)) {
                randomnum = Math.floor(Math.random()*kanjiCards.length);
            }
            
            recallCards[i] = (kanjiCards[randomnum]);
            usedIndexes.push(randomnum);
        }
    });



</script>
<Container>
    <Row>
        <Alert color=dark>
            <h4 class="alert-heading text-capitalize">Fill in the blank</h4>
            Things and stuff with stuff and things.
          </Alert>
    </Row>
    <Row>
        <Table>
            <thead>
              <tr>
                <th>Kanji</th>
                <th>Hirigana</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
            {#each randomCards as card}
                <tr>
                    <td>{card.kanji}</td>
                    <td></td>
                    <td></td>
                </tr>
                {:else}
                <!-- this block renders when photos.length === 0 -->
                <p>loading...</p>
            {/each}
            </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <th>Kanji</th>
                <th>Hirigana</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
            {#each recallCards as card}
                <tr>
                    <td></td>
                    <td>{card.hirigana}</td>
                    <td></td>
                </tr>
                {:else}
                <!-- this block renders when photos.length === 0 -->
                <p>loading...</p>
            {/each}
            </tbody>
          </Table>
    </Row>
</Container>

<main>
    
</main>
