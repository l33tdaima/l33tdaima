// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <utility>
#include <limits>
#include <iostream>

using namespace std;

class Solution {
    struct Direction {
        string dir;
        int rowDelta;
        int colDelta;
    };
    const vector<Direction> DIR = {
        {"d", 1, 0},
        {"l", 0, -1},
        {"r", 0, 1},
        {"u", -1, 0}
    };
    const string IMPOSSIBLE = "impossible";

    bool canRoll(const vector<vector<int>>& maze, int row, int col) {
        if (row < 0 || row >= maze.size() || col < 0 || col >= maze[0].size()) { return false; }
        return maze[row][col] == 0;
    }
    // Roll the ball to a new stop point to make a decision
    vector<int> roll(const vector<vector<int>>& maze, const vector<int>& hole,
                     int row, int col, int rdelta, int cdelta, int dist) {
        while (canRoll(maze, row + rdelta, col + cdelta)) {
            row += rdelta;
            col += cdelta;
            dist ++;
            if (row == hole[0] && col == hole[1]) { break; }
        }
        return {row, col, dist};
    }
    string dfs(vector<vector<int>>& maze, vector<vector<int>>& distance,
               vector<int>& ball, const vector<int>& hole, const string& direction) {
        int row = ball[0], col = ball[1], dist = ball[2];
        // cout << "By " << direction << " to (" << row << ", " << col << ", " << dist << ")" << endl;
        if (dist >= distance[row][col]) { return IMPOSSIBLE; }
        if (row == hole[0] && col == hole[1] && dist < distance[row][col]) {
            distance[row][col] = dist;
            return direction;
        }
        distance[row][col] = dist;
        string ans = IMPOSSIBLE;
        for (int i = 0; i < DIR.size(); ++i) {
            vector<int> next = roll(maze, hole, ball[0], ball[1], DIR[i].rowDelta, DIR[i].colDelta, dist);
            if (next[0] == ball[0] && next[1] == ball[1]) { continue; }
            string way = dfs(maze, distance, next, hole, direction + DIR[i].dir);
            if ( way != IMPOSSIBLE) {
                // cout << "Return " << way << " from (" << row << ", " << col << ", " << dist << ")" << endl;
                ans = way;
            }
        }
        return ans;
    }
public:
    string findShortestWay(vector<vector<int>>& maze, vector<int>& ball, vector<int>& hole) {
        if (maze.size() == 0 || maze[0].size() == 0) { return IMPOSSIBLE; }
        vector<vector<int>> distance(maze.size(), 
                                     vector<int>(maze[0].size(), numeric_limits<int>::max()));
        vector<int> start(ball);
        start.push_back(0); // (row, col, dist_from_start_location)
        return dfs(maze, distance, ball, hole, "");
    }
};
vector<vector<int>> maze = {
    {0,0,0,0,0},
    {1,1,0,0,1},
    {0,0,0,0,0},
    {0,1,0,0,1},
    {0,1,0,0,0}
};
struct Test {
    vector<int> ball;
    vector<int> hole;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.findShortestWay(maze, ball, hole);
        cout << "Shortest way from (" << ball[0] << ", " << ball[1]
             << ") to (" << hole[0] << ", " << hole[1]
             << ") -> " << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        { {4,3}, {0,1}, "lul" },
        { {4,3}, {3,0}, "impossible" },
        { {2,2}, {2,3}, "r" },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}