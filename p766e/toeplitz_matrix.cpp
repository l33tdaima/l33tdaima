#include <cassert>
#include <iostream>
#include <vector>

using namespace std;
class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix)
    {
        for (int i = 0; i < matrix.size() - 1; ++i) {
            for (int j = 0; j < matrix[i].size() - 1; ++j) {
                if (matrix[i][j] != matrix[i + 1][j + 1])
                    return false;
            }
        }
        return true;
    }
};
struct Test {
    vector<vector<int>> matrix;
    bool expected;
    void run()
    {
        Solution sol;
        bool actual = sol.isToeplitzMatrix(matrix);
        cout << "isToeplitzMatrix? -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const* argv[])
{
    vector<Test> tests = {
        { { { 1, 2 },
              { 2, 2 } },
            false },
        { { { 1, 2, 3, 4 },
              { 5, 1, 2, 3 },
              { 9, 5, 1, 2 } },
            true },
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
