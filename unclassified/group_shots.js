/**
 * Given a list of movie shots represented by a letter a - z, group them
 * in such a way that no one shot should show up in more than one subsequence.
 * Amazon assessment
 * 
 * @param {string[]} inputList of a list of letters labelling the movie shots
 * @return {num[]}   size of each subsequence
 */
var groupShots = function(inputList) {
    let result = [];
    let dupMap = Array.from({length: 26}, (v) => []);
    let len = inputList.length;
    for (let i = 0; i < len; ++i) {
        dupMap[inputList[i].charCodeAt(0) - 97].push(i);
    }
    //console.log(dupMap);
    let cutStart = -1, cutEnd = -1;
    for (let i = 0; i < len; ++i) {
        let dup = dupMap[inputList[i].charCodeAt(0) - 97];
        if (i === dup[0]) {
            if (cutStart >= 0) { // except the beginning
                result.push(cutEnd - cutStart + 1);
            }
            cutStart = i;
        }
        cutEnd = dup[dup.length - 1]; // jump
        i = cutEnd;
    }
    result.push(cutEnd - cutStart + 1);
    return result;
};
// TEST
[
    ['a','b','c'],
    ['a','b','c','a'],
    ['a','b','c','d','a','e','f','g','h','i','j','e','k'],
    ['z','z','c','b','z','c','h','f','i','h','i'],

].forEach(test => {
    console.log("Group shots of", test, "->",
                groupShots(test));
});
