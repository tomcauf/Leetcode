/**
 * @return {Generator<number>}
*/
// var fibGenerator = function*() {
//     let [prev, curr] = [0, 1];

//     while (true) {
//         yield prev;
//         [prev, curr] = [curr, prev + curr];
//     }
// };
var fibGenerator = function* () {
    let prev = 0;
    let curr = 1;

    yield prev;
    yield curr;

    while (true) {
        const next = prev + curr;
        yield next;

        prev = curr;
        curr = next;
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */