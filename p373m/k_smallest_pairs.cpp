// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <utility>
#include <queue>
#include <iostream>

using namespace std;

class Solution {
    struct Tuple {
        int u, v;
        int i, j;
        bool operator<(Tuple rhs) const { return u + v > rhs.u + rhs.v; }
        friend ostream& operator<<(ostream& os, const Tuple& t) {
            os << "(" << t.u << "," << t.v << "), [" << t.i << "," << t.j << "]";
            return os;
        }
    };
public:
    vector<pair<int, int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<pair<int, int>> ans;
        if (nums1.size() == 0 || nums2.size() == 0) { return ans; }
        priority_queue<Tuple> minHeap;
        for (int j = 0; j < nums2.size(); ++j) {
            Tuple tuple = {nums1[0], nums2[j], 0, j};
            minHeap.push(tuple);
        }
        while (!minHeap.empty() && k-- > 0) {
            int i = minHeap.top().i;
            int j = minHeap.top().j;
            ans.push_back(make_pair(nums1[i], nums2[j]));
            minHeap.pop();
            if (i + 1 < nums1.size()) {
                Tuple tuple = {nums1[i + 1], nums2[j], i + 1, j}; 
                minHeap.push(tuple);
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<int> nums1;
    vector<int> nums2;
    int k;
    void run() {
        cout << "The " << k << " smallest pairs -> ";
        Solution sol;
        for (const auto& p: sol.kSmallestPairs(nums1, nums2, k)) {
            cout << "[" << p.first << "," << p.second << "] ";
        }
        cout << endl;
    }
};
int main() {
    vector<Test> tests = {
        {
            {1,7,11}, // nums1
            {2,4,6},  // nums2
            4         // k
        },
        {
            {1,1,2},  // nums1
            {1,2,3},  // nums2
            2         // k
        },
        {
            {1,2},    // nums1
            {3},      // nums2
            3         // k
        },
    };
    for (Test& t: tests) {
        t.run();
    }
    return 0;
}