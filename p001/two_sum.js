/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; ++i) {
        var complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
}

var testCases = [3, 2, 4];
var target = 6;

var result = twoSum(testCases, target);
if(result.length > 0)
{
    console.log("Two numbers sum up to " + target + 
                " are: " + result[0] + ", " + result[1]);
    console.log(testCases[result[0]] +
                " and " +
                testCases[result[1]]);
}
else
{
    console.log("Not found");
}