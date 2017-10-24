/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var used = Array.from(board, (r) => Array.from(r, (c) => false));
    
    // Check if word starting from [iw] available starting board[ib, jb],
    // board, word are accessed under closure
    var recExist = function(ib, jb, iw) {
        // console.log("# Travel on [", ib, jb, "], word to match:", word.substr(0, iw + 1));

        if (ib < 0 || jb < 0 || ib >= board.length || jb >= board[ib].length) {
            return false;
        }
        if (board[ib][jb] !== word[iw]) { return false; } 
        if (used[ib][jb]) {
            // console.log("  [", ib, jb, "] has been traveled");
            return false;
        }
        if (iw === word.length - 1) { return true; }

        used[ib][jb] = true;
        // DFS search for the next char
        var found = recExist(ib - 1, jb, iw + 1) || // up
                    recExist(ib, jb - 1, iw + 1) || // left
                    recExist(ib + 1, jb, iw + 1) || // down
                    recExist(ib, jb + 1, iw + 1);   // right
        used[ib][jb] = false;
        return found;
    };
    
    // Initiate the search
    var found = false;
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[i].length; ++j) {
            if (recExist(i, j, 0)) {
                return true;
            } 
        }
    }
    return found;
};

var board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
var words = [
    "",
    "Y",
    "DECFD",
    "ASFBA",
    "ABCCEDFSA"
]

words.forEach( function (word) {
    console.log("Does", word, "exist?", exist(board, word));
});
