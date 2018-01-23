/**
 * Definition for an interval.
 */
 function Interval(start, end) {
    this.start = start;
    this.end = end;
 }

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let ilen = intervals.length;
    let result = [];
    let i = 0;
    while (i < ilen && intervals[i].end < newInterval.start) {
        result.push(intervals[i++]);
    }
    let mergedStart = newInterval.start, mergedEnd = newInterval.end;
    while (i < ilen && intervals[i].start <= newInterval.end) {
        mergedStart = Math.min(intervals[i].start, mergedStart);
        mergedEnd   = Math.max(intervals[i].end, mergedEnd);
        i++;
    }
    result.push(new Interval(mergedStart, mergedEnd));
    while (i < ilen) {
        result.push(intervals[i++]);
    }
    return result;
};
// TEST
[
    {
        intervals: [],
        newInterval: [2,5]
    },
    {
        intervals: [[1,3]],
        newInterval: [4,5]
    },
    {
        intervals: [[4,8]],
        newInterval: [2,3]
    },
    {
        intervals: [[4,8]],
        newInterval: [4,7]
    },
    {
        intervals: [[4,8]],
        newInterval: [3,9]
    },
    {
        intervals: [[1,3],[6,9]],
        newInterval: [2,5]
    },
    {
        intervals: [[1,2],[3,5],[6,7],[8,10],[12,16]],
        newInterval: [4,9]
    },
].forEach(function (test) {
    let intervals = [];
    test.intervals.forEach(function (elem) {
        intervals.push(new Interval(elem[0], elem[1]));
    });
    let newInterval = new Interval(test.newInterval[0], test.newInterval[1]);
    console.log("Insert", test.newInterval, "into", test.intervals, "->");
    let merged = insert(intervals, newInterval).map(function (i) {
        return [i.start, i.end];
    });
    console.log(merged);
});
