const List = require('list');
/**
 * Simulate a Josephus circle
 * @param {number} n 
 */
var simJosephus = function(n) {
    // Return the node before node 1 as we will kill 1 first
    let makeCircle = function() {
        //console.assert(n > 0);
        let head = new List.ListNode(-1);
        let p = head;
        for (let i = 1; i <= n; ++i) {
            p.next = new List.ListNode(i);
            p = p.next;
        }
        p.next = head.next;
        return p;
    }

    let p = makeCircle();
    while (p !== p.next) {
        // elimnate one
        let kill = p.next;
        console.log("Killing", kill.val);
        p.next = kill.next;
        kill.next = null;
        // skip the next
        p = p.next;
    }
    return p.val;
}

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    if (n === 1) {
        return 1;
    } else {
        let nn = ~~(n/2);
        return 2 * (nn + 1 - lastRemaining(nn));
    }
};
/**
 * @param {number} n
 * @return {number}
 */
var lastRemainingIter = function(n) {
    let left = true, step = 1, remaining = n;
    let head = 1;
    while (remaining > 1) {
        if (left || remaining % 2 === 1) {
            head = head + step;
        }
        remaining = ~~(remaining / 2);
        step *= 2;
        left = !left;
    }
    return head;
};
// TEST
[
    1,
    4,
    9,
].forEach(function (test) {
    console.log("Last remaining by recursion f(" + test + ") ->", lastRemaining(test));
    console.log("Last remaining by counting  f(" + test + ") ->", lastRemainingIter(test));
});
