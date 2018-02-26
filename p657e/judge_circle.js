/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for (let i = 0, len = moves.length; i < len; ++i) {
        switch (moves.charAt(i)) {
            case "U":
                y++; break;
            case "D":
                y--; break;
            case "R":
                x++; break;
            case "L":
                x--; break;
            default:
                console.log("Invalid move");
        }
    }
    if (x === 0 && y === 0) {
        return true;
    } else {
        return false;
    }
};
// TEST
[
    "",
    "UD",
    "LL",
    "URDL",
    "UUURRRDDDLLL",
    "UURDRDDDLLL",
    "UDRRRRLDULLLUUU",
].forEach(test => {
    console.log("Move", test, "makes a circle ->",
                judgeCircle(test));
});
