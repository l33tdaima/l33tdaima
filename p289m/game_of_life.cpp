// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        int rows = board.size();
        if (rows == 0) { return; }
        int cols = board[0].size();
        // Count the live neighbors of a given cell
        // closure/capture: board, rows, cols
        auto countLiveNeighbors = [=](int r, int c) -> int {
            int count = 0;
            for (int i = r-1; i <= r+1; ++i) {
                for (int j = c-1; j <= c+1; ++j) {
                    if (i >= 0 && i < rows && j >= 0 && j < cols) {
                        count += board[i][j] & 1;
                    }
                }
            }
            count -= board[r][c] & 1;
            // cout << r << ", " << c << ": count =" << count << endl;
            return count;
        };
        // calcualate the new state
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                int lc = countLiveNeighbors(i, j);
                if ((board[i][j] & 1) == 1) { // live
                    board[i][j] = (lc < 2 || lc > 3) ? 1 : 3;
                } else { // dead
                    board[i][j] = (lc == 3) ? 2 : 0;
                }
            }
        }
        // decode the new state and update
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                board[i][j] = board[i][j] >> 1;
            }
        }
    }
};
// TEST
struct Test {
    vector<vector<int>> board;
    void print() {
        for (auto& r: board) {
            cout << "{";
            for (int c: r) {
                cout << c << ", ";
            }
            cout << "}" << endl;
        }
    }
    void run() {
        cout << "Before:" << endl;
        print();
        Solution sol;
        sol.gameOfLife(board);
        cout << "After:" << endl;
        print();
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {{{}}},
        {{{1,0}, {0,1}}},
        {{{1,0,0},{0,1,1},{1,0,1}}},
        {{{0,1,0},{0,0,1},{1,1,1},{0,0,0}}}
    };
    for (auto& t: tests) {
        t.run();
        cout << "------" << endl;
    }
    return 0;
}
