/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // Palindrome check
    var isPalindrome = function(s, start, end) {
        for (let i = start, j = end; i < j; ++i, --j) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false;
            }
        }
        return true;
    };

    // Recursion to DFS partial solution
    var recPartitionHelper = function(s, start, end) {
        // console.log("Current stack:", s.substring(start, end + 1));
        let solution = [];
        for (let i = start; i <= end; ++i) {
            if (isPalindrome(s, start, i)) {
                let baseSolution = [ s.substring(start, i + 1) ];
                if (i === end) {
                    // no more room to backtracking
                    solution.push(baseSolution);
                }
                else {
                    // solve for partition for the rest of the string
                    let partSolution = recPartitionHelper(s, i + 1, end);
                    // console.log("# Partial solution:", partSolution);
                    for (let j = 0; j < partSolution.length; ++j)
                    {
                        solution.push(baseSolution.concat(partSolution[j]));
                        // console.log("# Solution so far:", solution);
                    }
                }
            }
        }
        // console.log("Returning stack solution:", solution);
        return solution;
    };
    return recPartitionHelper(s, 0, s.length - 1);
};

var strTest = (process.argv[2] === undefined) ? "" : process.argv[2];
console.log(partition(strTest));
