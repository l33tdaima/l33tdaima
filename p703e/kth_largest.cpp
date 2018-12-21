// g++ -std=c++11 *.cpp -o test && ./test && rm -f test

#include <vector>
#include <queue>
#include <functional>
#include <iostream>

using namespace std;

class KthLargest {
    priority_queue<int, vector<int>, greater<int> > d_minHeap;
    int d_cap;
public:
    KthLargest(int k, vector<int> nums)
    : d_cap(k) {
        for (int i = 0; i < nums.size(); ++i) {
            if (i < k) d_minHeap.push(nums[i]);
            else add(nums[i]);
        }
    }
    
    int add(int val) {
        if (d_minHeap.size() < d_cap) {
            d_minHeap.push(val);
        } else if (val > d_minHeap.top()) {
            d_minHeap.pop();
            d_minHeap.push(val);
        }
        return d_minHeap.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */
int main(int argc, char const *argv[])
{
    int k = 3;
    vector<int> nums = {4, 5, 8, 2};
    KthLargest kthLargest(k, nums);
    assert(kthLargest.add(3) == 4);
    assert(kthLargest.add(5) == 5);
    assert(kthLargest.add(10) == 5);
    assert(kthLargest.add(9) == 8);
    assert(kthLargest.add(4) == 8);
    return 0;
}
