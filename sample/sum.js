module.exports = async function (a, b) {
    if (global.tortor) {
        if (global.tortor.willRun('antras describe')) {
            // a++;
        }
    }
    const c = a + b;
    const z = 'testas';
    const d = { mano: 4.20, kitas: { o: 3 }, a: [1, 2, 3], d: null, e: true, f: 'testas' };
    const h = [1, 2, 3, 4, 5];
    // await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(c, z, d);
    if (global.tortor) {
        global.tortor.ti(null, null, () => {
            console.log(global.tortor.runner.test.title);
        });
        global.tortor.ti(null, 'mano trumpas testas', () => {
            global.tortor.assert.equal(c, 7);
        });
    }
};