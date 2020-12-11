// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>
#include <cassert>

using namespace std;
class Solution
{
public:
    bool validMountainArray(vector<int> &arr)
    {
        size_t i = 0;
        while (i + 1 < arr.size() && arr[i + 1] > arr[i])
            i++;
        if (i == 0 || i == arr.size() - 1)
            return false;
        while (i + 1 < arr.size() && arr[i + 1] < arr[i])
            i++;
        return i == arr.size() - 1;
    }
};
// TEST
struct Test
{
    vector<int> arr;
    bool expected;
    void run()
    {
        Solution sol;
        bool actual = sol.validMountainArray(arr);
        cout << "Is [";
        for (int n : arr)
            cout << n << ", ";
        cout << "] valid mountain array? -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char *argv[])
{
    vector<Test> tests = {
        {{}, false},
        {{1}, false},
        {{2, 1}, false},
        {{3, 5, 5}, false},
        {{0, 3, 2, 1}, true},
        {{3, 4, 5, 7}, false},
        {{4, 3, 2, 1}, false},
        {{0, 2, 3, 4, 5, 2, 1, 0}, true},
        {{0, 2, 3, 3, 5, 2, 1, 0}, false},
        {{0, 2, 3, 1, 5, 2, 1, 0}, false},
    };
    for (auto &t : tests)
        t.run();
    return 0;
}
