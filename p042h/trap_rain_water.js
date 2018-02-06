/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let fringe = 0, fIndex = -1;
    let totalTrap = 0, singleTrap = 0;
    let len = height.length;
    for (let i = 0; i < len; ++i) {
        let h = height[i];
        if (singleTrap === 0 && h >= fringe) {
            // build up fringe when no water trapped yet
            fringe = h; fIndex = i;
        } else {
            // h < fringe || has water trapped potentially
            if (h < fringe) {
                singleTrap += fringe - h;
            } else { // h >= fringe && singleTrap !== 0
                // console.assert(singleTrap > 0); // must have water
                totalTrap += singleTrap;
                singleTrap = 0;
                fringe = h; fIndex = i;
            }
        }
    }
    if (singleTrap > 0) { // work backward
        singleTrap = 0; fringe = 0;
        for (let i = len - 1; i >= fIndex; --i) {
            let h = height[i];
            if (singleTrap === 0 && h >= fringe) {
                fringe = h;
            } else {
                if (h < fringe) {
                    singleTrap += fringe - h;
                } else {
                    totalTrap += singleTrap;
                    singleTrap = 0;
                    fringe = h;
                }
            }
        }
    }
    return totalTrap;
};
var trapFaster = function(height) {
    let left = 0, right = height.length - 1;
    let frLeft = 0, frRight = 0;
    let totalTrap = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] < frLeft) {
                totalTrap += frLeft - height[left];
            } else {
                frLeft = height[left];
            }
            ++ left;
        } else {
            if (height[right] < frRight) {
                totalTrap += frRight - height[right];
            } else {
                frRight = height[right];
            }
            -- right;
        }
    }
    return totalTrap;
};
// TEST
[
    [0,1,0,2,1,0,1,3,2,1,2,1], // 6
    [1,0,1,3,2,1,2,1,0,0,1,0], // 4
].forEach(function (test) {
    console.log("Trapped rain water in", test, " -> ", 
                trap(test), trapFaster(test));
});
