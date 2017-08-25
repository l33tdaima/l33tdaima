/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /**
     * binary search helper closure with binded nums and target
     * @param {number} start index
     * @param {number} end index
     * @return {number} index
     */
    if (nums.length === 0) {
        return -1;
    }

    var bsearch = function(start, end) {
        if (start < 0 || end >= nums.length) {
            throw "Invalid start or end index";
        }
        if (start === end) {
            return (nums[start] === target) ? start : -1;
        }
        // exact mid index if odd elements, low mid if even elements
        let mid = Math.floor((end + start)/2);
        if (mid === start) {
            if(target === nums[mid]) {
                return mid;
            }
            else {
                return bsearch(mid + 1, end);
            }
        }
        // You may assume no duplicate exists in the array
        if (nums[start] === nums[end]) {
            throw "Invalid array";
        }
        // Standard binary search
        if (nums[start] < nums[end]) {
            if (target === nums[mid]) {
                return mid;
            }
            else if (target < nums[mid]) {
                return bsearch(start, mid - 1);
            }
            else {
                return bsearch(mid + 1, end);
            }
        }
        // Rotated binary search
        else { // (nums[start] > nums[end])
            if (target === nums[mid]) {
                return mid;
            }
            // a less than half low portion rotated to the right
            if (nums[mid] > nums[start]) {
                // no ambiguity, search target in the higher end
                if (target > nums[mid]) {
                    return bsearch(mid + 1, end);
                }
                // target could be lower end or higher end
                else { // (target < nums[mid]
                    if (target < nums[start]) {
                        return bsearch(mid + 1, end);
                    }
                    else {
                        return bsearch(start, mid - 1);
                    }
                }
            }
            // a less than half high portion rotated to the left
            else { // (nums[mid] <= nums[start])
                // no ambiguity, search target in the lower end
                if (target < nums[mid]) {
                    return bsearch(start, mid - 1);
                }
                // target could be lower or higher end
                else {
                    if (target > nums[end]) {
                        return bsearch(start, mid - 1);
                    }
                    else {
                        return bsearch(mid + 1, end);
                    }
                }

            }
        } // end of Rotated binary search 
    };
    return bsearch(0, nums.length - 1);
};

// var testArray = [ 5, 6, 7, 9, 0, 1, 2, 4];
var testArray = [1, 3];
var targets = [0, 3, 1, 4];
console.log("Search in array: ", testArray);
targets.forEach(function(val) {
    console.log("Search " + val + ": index = " + search(testArray, val));
}, this);
