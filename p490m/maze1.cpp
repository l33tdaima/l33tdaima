// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
    const vector<int> DIR = {0, -1, 0, 1, 0};

    bool canRoll(const vector<vector<int>>& maze, int row, int col) {
        if (row < 0 || row >= maze.size() || col < 0 || col >= maze[0].size()) { return false; }
        return maze[row][col] == 0;
    }
    // Roll the ball to a new stop point to make a decision
    vector<int> roll(const vector<vector<int>>& maze, int row, int col, int rdelta, int cdelta) {
        while (canRoll(maze, row + rdelta, col + cdelta)) {
            row += rdelta;
            col += cdelta;
        }
        return {row, col};
    }

    bool dfs(const vector<vector<int>>& maze,
             vector<int>& start, vector<int>& destination,
             vector<vector<bool>>& visitedStart) {
        if (visitedStart[start[0]][start[1]]) { return false; }
        if (start[0] == destination[0] && start[1] == destination[1]) { return true; }

        visitedStart[start[0]][start[1]] = true;

        for (int i = 0; i < DIR.size() - 1; ++i) {
            vector<int> stop = roll(maze, start[0], start[1], DIR[i], DIR[i+1]);
            if (dfs(maze, stop, destination, visitedStart)) { return true; }
        }
        return false;
    }
public:
    bool hasPath(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        if (maze.size() == 0 || maze[0].size() == 0) { return false; }
        vector<vector<bool>> visitedStart(maze.size(), vector<bool>(maze[0].size(), false));
        return dfs(maze, start, destination, visitedStart);
    }
};
vector<vector<int>> maze = {
    {0,0,1,0,0},
    {0,0,0,0,0},
    {0,0,0,1,0},
    {1,1,0,1,1},
    {0,0,0,0,0}
};
struct Test {
    vector<int> start;
    vector<int> destination;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.hasPath(maze, start, destination);
        cout << "Has path from (" << start[0] << ", " << start[1]
             << ") to (" << destination[0] << ", " << destination[1]
             << ") -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {0,4}, {4,4}, true
        },
        {
            {0,4}, {3,2}, false
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
