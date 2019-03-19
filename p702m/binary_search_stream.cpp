// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

// Forward declaration of ArrayReader class.
class ArrayReader {
    vector<int> array;
public:
    ArrayReader(vector<int> a)
    : array(a) {}

    int get(int k) const {
        if (k >= array.size()) return INT_MAX;
        else return array[k];
    }
};

class Solution {
public:
    int search(const ArrayReader& reader, int target) {
        int l = 0, r = INT_MAX;
        while (l <= r) {
            int m = l + (r - l)/2;
            int v = reader.get(m);
            // cout << "l = " << l << ", r = " << r << ", a[" << m << "] = " << v << endl;
            if (v >= 10000) {
                r = m / 2;
            } else {
                if (v == target) return m;
                else if (v < target) l = m + 1;
                else r = m - 1;
            }
        }
        return -1;
    }
};

// TEST
struct Test {
    vector<int> input;
    int target;
    int expected;
    void run() {
        Solution sol;
        ArrayReader reader(input);
        int actual = sol.search(reader, target);
        cout << "Search " << target << " in array -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {5},
            5,
            0
        },
        {
            {-1, 0, 3, 5, 9, 12},
            9,
            4
        },
        {
            {-1, 0, 3, 5, 9, 12},
            2,
            -1
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
