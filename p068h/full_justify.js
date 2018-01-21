/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let justifiedResult = [];
    let buffer = [], bufferWidth = 0;
    for (let i = 0, len = words.length; i < len; ++i) {
        let wlen = words[i].length;
        buffer.push(words[i]);
        bufferWidth += wlen + 1; // increment by word len plus space
        if (i < len - 1 && bufferWidth + words[i + 1].length <= maxWidth) {
            continue;
        }
        // flush the buffer into result
        let blen = buffer.length; let bufferStr = "";
        // corner case of only one word in buffer
        if (blen === 1 || i === len - 1) {
            bufferStr = buffer.join(" ");
            while (bufferStr.length < maxWidth) bufferStr += " ";
        } else {
            let offset = maxWidth - bufferWidth + 1;
            let quot = ~~(offset / (blen - 1));
            let delimiter = " "; // base space size between every words
            for (let j = 0; j < quot; ++j) delimiter += " ";
            let remainder = offset % (blen - 1); // additional space from remainder
            for (let k = 0; k < blen - 1; ++k) {
                bufferStr += buffer[k] + delimiter;
                if (k < remainder) bufferStr += " ";
            }
            bufferStr += buffer[blen - 1];
        }
        // reset
        justifiedResult.push(bufferStr);
        buffer = [];
        bufferWidth = 0;
    }
    return justifiedResult;
};
// TEST
[
    [["What","must","be","shall","be."], 12],
    [["This", "is", "an", "example", "of", "text", "justification."], 16],
].forEach(function (test) {
    console.log("", test[0], "->\n", fullJustify(test[0], test[1]));
});
