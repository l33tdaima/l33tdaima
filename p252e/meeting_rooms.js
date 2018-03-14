/**
 * Definition for an interval.
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 1, len = intervals.length; i < len; ++i) {
        if (intervals[i - 1].end > intervals[i].start) {
            return false;
        }
    }
    return true;
};
// TEST
[
    [[0, 30],[5, 10],[15, 20]],
    [[0, 2],[5, 10],[15, 20]],
].forEach(t => {
    let intervals = t.map(v => new Interval(v[0], v[1]));
    console.log("Can attend meetings", t, "->",
                canAttendMeetings(intervals));
});
