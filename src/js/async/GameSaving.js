import read from '../reader.js';
import json from '../parser.js';



export default class GameSaving {
    static load() {
        return new Promise((resolve) => {
            async function main() {
                const data = await read();
                const value = await json(data);
                return resolve(JSON.parse(value));
            }

            main();
        });
    }
}