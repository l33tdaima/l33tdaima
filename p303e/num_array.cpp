// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <iostream>
#include <vector>

using namespace std;

class NumArray {
    vector<long> sums;

public:
    NumArray(vector<int> nums)
    {
        long s = 0;
        for (int n : nums) {
            sums.push_back(s);
            s += n;
        }
        sums.push_back(s);
    }

    int sumRange(int left, int right)
    {
        return sums[right + 1] - sums[left];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */
int main(int argc, char* argv[])
{
    NumArray obj = NumArray({ 1, 2, 3, 4, 5 });
    cout << "sumRange(0, 0) -> " << obj.sumRange(0, 0) << endl;
    cout << "sumRange(0, 3) -> " << obj.sumRange(0, 3) << endl;
    NumArray obj2 = NumArray({ -2, 0, 3, -5, 2, -1 });
    cout << "sumRange(0, 2) -> " << obj2.sumRange(0, 2) << endl;
    cout << "sumRange(2, 5) -> " << obj2.sumRange(2, 5) << endl;
    cout << "sumRange(0, 5) -> " << obj2.sumRange(0, 5) << endl;
    return 0;
}
