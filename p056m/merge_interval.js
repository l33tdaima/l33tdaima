/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }
    // sort by .start then .end
    intervals.sort((a, b) =>
        a.start === b.start ?
        (a.end - b.end) : (a.start - b.start)
    );

    let merged = [];
    let curr = intervals[0];
    for (let i = 1; i < intervals.length; ++i) {
        // with overlapping
        if (intervals[i].start <= curr.end) {
            if (intervals[i].end > curr.end) {
                curr.end = intervals[i].end;
            }
        }
        // without overlapping
        else {
            merged.push(curr);
            curr = intervals[i];
        }
    }
    merged.push(curr);
    return merged;
};

var testArray = [[12,15],[1,3],[2,6],[8,10],[15,18]];
var testIntervals = testArray.map((val) => new Interval(val[0], val[1]));
console.log("Before:");
console.log(testIntervals);
console.log("After:");
console.log(merge(testIntervals));
