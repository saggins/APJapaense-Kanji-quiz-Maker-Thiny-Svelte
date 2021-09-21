import { writable } from 'svelte/store';
function createStore() {
    const { subscribe, set, update } = writable([]);
    return {
        subscribe,
        add: (kanji) => update(bigList => bigList.push(kanji)),
        reset: () => set([])
    }; 
}
export const listOfCompletedKanji = createStore();
