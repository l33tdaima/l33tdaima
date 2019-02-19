// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class NumArray {
private:
    vector<int> d_nums;
    vector<int> d_bitree;
    static inline int lowbit(int x) { return x & (-x); }
public:
    NumArray(vector<int> nums)
    :d_nums(nums.size(), 0), d_bitree(nums.size() + 1, 0) {
        for (int i = 0; i < nums.size(); ++i) {
            update(i, nums[i]);
        }
    }
    
    void update(int i, int val) {
        int delta = val - d_nums[i];
        d_nums[i] = val;
        i++;
        while (i < d_bitree.size()) {
            d_bitree[i] += delta;
            i += lowbit(i);
        }
    }
    
    int sumRange(int i, int j) {
        return query(j) - query(i - 1);
    }

    int query(int i) {
        i++;
        int sum = 0;
        while (i > 0) {
            sum += d_bitree[i];
            i -= lowbit(i);
        }
        return sum;
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * obj.update(i,val);
 * int param_2 = obj.sumRange(i,j);
 */
int main(int argc, char const *argv[])
{
    NumArray obj({1,3,5});
    cout << "sumRange(0, 2) = " << obj.sumRange(0,2) << endl;
    obj.update(1, 2);
    cout << "sumRange(0, 2) = " << obj.sumRange(0,2) << endl;
    return 0;
}
