/**
 * Definition for an interval.
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
const pq = require('priority_queue');
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var minMeetingRoomsHeap = function(intervals) {
    if (intervals.length === 0) { return 0; }
    intervals.sort((a, b) => a.start - b.start);
    // console.log("sorted:", intervals);
    let rooms = 1;
    let endHeap = new pq.PriorityQueue; // min heap by default
    endHeap.push(intervals[0].end);
    for (let i = 1, len = intervals.length; i < len; ++i) {
        if (endHeap.top() > intervals[i].start) {
            rooms ++;
        } else {
            endHeap.shift();
        }
        endHeap.push(intervals[i].end);
    }
    return rooms;
};
var minMeetingRoomsCounter = function(intervals) {
    if (intervals.length === 0) { return 0; }
    let tuples = [];
    for (let interval of intervals) {
        tuples.push([interval.start, 0]);
        tuples.push([interval.end, 1]);
    }
    tuples.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0]
        }
    }); // console.log(tuples);
    let rooms = 0, count = 0;
    for (let tuple of tuples) {
        if (tuple[1] === 0) { // start
            count ++;
        } else {
            count --;
        }
        rooms = Math.max(rooms, count);
    }
    return rooms;
};
// TEST
[
    { data: [[2,15],[36,45],[9,29],[16,23],[4,9]], exp: 2 },
    { data: [[0, 30],[5, 20],[10, 15],[15, 25]], exp: 3 },
    { data: [[0, 30],[5, 20],[10, 15]], exp: 3},
    { data: [[0, 30],[5, 10],[15, 20]], exp: 2},
    { data: [[0, 10],[5, 10],[15, 20]], exp: 2},
    { data: [[0, 10],[5, 15],[10, 20]], exp: 2},
    { data: [[0, 1],[5, 10],[10, 20]], exp: 1},
    { data: [[1, 3]], exp: 1},
    { data: [], exp: 0},
].forEach(t => {
    let iv = t.data.map(v => new Interval(v[0], v[1]));
    console.log("Minimal meeting rooms needed for", t.data, "-> test",
                minMeetingRoomsCounter(iv) === t.exp);
});
