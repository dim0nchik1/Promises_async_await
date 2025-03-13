import GameSavingLoader from "../js/Promises/GameSavingLoader";
import GameSaving from "../js/async/GameSaving";


test('Checking the work GameSavingLoader', (done) => {
    const expected = JSON.stringify({
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: "Hitman",
            level: 10,
            points: 2000,
        },
    });
    GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(expected);
        done();
    });
});

test('Checking the work GameSaving', async () => {
    const result = await GameSaving.load();
    expect(result).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    });

});
