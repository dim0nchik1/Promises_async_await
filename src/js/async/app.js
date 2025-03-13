import GameSavingLoader from './GameSaving.js';

(async () => {
    try {
        const saving = await GameSavingLoader.load();
        console.log(saving);
    } catch (error) {
        console.error(error);
    }
})();