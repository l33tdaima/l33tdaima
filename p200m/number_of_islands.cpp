// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
    void dfs(vector<vector<char>>& grid, int i, int j) {
        grid[i][j] = 'x'; // visited
        if (i > 0 && grid[i-1][j] == '1') {
            dfs(grid, i-1, j);
        }
        if (j > 0 && grid[i][j-1] == '1') {
            dfs(grid, i, j-1);
        }
        if (i < grid.size() - 1 && grid[i+1][j] == '1') {
            dfs(grid, i+1, j);
        }
        if (j < grid[i].size() - 1 && grid[i][j+1] == '1') {
            dfs(grid, i, j+1);
        }
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int rows = grid.size();
        if (rows == 0) { return 0; }
        int cols = grid[0].size();
        int count = 0;
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count ++;
                }
            }
        }
        return count;
    }
};
// TEST
struct Test {
    vector<vector<char>> grid;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.numIslands(grid);
        cout << "Number of islands -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{'1'}},
            1
        },
        {
            {{'0','0'},
             {'1','1'}},
            1
        },
        {
            {{'0','1'},
             {'1','0'}},
            2
        },
        {
            {{'0','1','0','0'},
             {'1','1','1','0'},
             {'0','1','0','0'},
             {'1','1','0','0'}},
             1
        },
        {
            {{'1','1','0','0','0'},
             {'1','1','0','0','0'},
             {'0','0','1','0','0'},
             {'0','0','0','1','1'}},
            3
        }
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
