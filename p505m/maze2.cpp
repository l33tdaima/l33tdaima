// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <queue>
#include <limits>
#include <iostream>

using namespace std;

void dump(const vector<vector<int>>& matrix) {
    cout << "Dump matrix: {" << endl;
    for (const auto& row: matrix) {
        cout << "{ ";
        for (int cell: row) {
            if (cell == numeric_limits<int>::max()) {
                cout << "--, ";
            } else {
                cout << cell << ", ";
            }
        }
        cout << "}," << endl;
    }
    cout << " }" << endl;
}
void dump(const deque<vector<int>>& queue) {
    cout << "Dump queue: [ ";
    for (const auto& item: queue) {
        cout << "{";
        for (const auto& v: item) {
            cout << v << ",";
        }
        cout << "}, ";
    }
    cout << "]" << endl;
}

class Solution {
    const vector<int> DIR = {0, -1, 0, 1, 0};
    
    bool canRoll(const vector<vector<int>>& maze, int row, int col) {
        if (row < 0 || row >= maze.size() || col < 0 || col >= maze[0].size()) { return false; }
        return maze[row][col] == 0;
    }
    // Roll the ball to a new stop point to make a decision
    vector<int> roll(const vector<vector<int>>& maze, int row, int col, int rdelta, int cdelta, int dist) {
        while (canRoll(maze, row + rdelta, col + cdelta)) {
            row += rdelta;
            col += cdelta;
            dist ++;
        }
        return {row, col, dist};
    }
public:
    int shortestDistance(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        if (maze.size() == 0 || maze[0].size() == 0) { return -1; }
        vector<vector<int>> distance(maze.size(), vector<int>(maze[0].size(), numeric_limits<int>::max()));
        deque<vector<int>> queue;
        queue.emplace_back(vector<int>({start[0], start[1], 0})); // {row, col, distance_from_start}
        while (!queue.empty()) {
            // dump(distance); dump(queue);
            int row = queue.front()[0], col = queue.front()[1], dist = queue.front()[2];
            queue.pop_front();
            if (dist < distance[row][col]) {
                distance[row][col] = dist;
            } else {
                continue;
            }
            for (int i = 0; i < DIR.size() - 1; ++i) {
                vector<int> next = roll(maze, row, col, DIR[i], DIR[i + 1], dist);
                if (row != next[0] || col != next[1]) {
                    queue.emplace_back(next);
                }
            }
        }
        return distance[destination[0]][destination[1]] == numeric_limits<int>::max() ?
                -1 : distance[destination[0]][destination[1]];
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
    int expected;
    void run() {
        Solution sol;
        int actual = sol.shortestDistance(maze, start, destination);
        cout << "Shortest distance from (" << start[0] << ", " << start[1]
             << ") to (" << destination[0] << ", " << destination[1]
             << ") -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {0,4}, {4,4}, 12
        },
        {
            {0,4}, {3,2}, -1 
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}