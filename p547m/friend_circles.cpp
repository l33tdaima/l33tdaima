// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <initializer_list>
#include <iostream>
using namespace std;

class Solution {
private:
    void dfs(int i, const vector<vector<int>>& M, vector<bool>& visited) {
        if (i < 0 || i >= M.size()) { return; }
        visited[i] = true;
        for (int j = 0; j < M[i].size(); ++j) {
            if (j == i || visited[j]) { continue; }
            if (M[i][j] == 1) {
                dfs(j, M, visited);
            }
       }
   };
public:
    int findCircleNum(vector<vector<int>>& M) {
        int count = 0;
        vector<bool> visited(M.size(), false);
        for (int i = 0; i < M.size(); ++i) {
            if (visited[i]) { continue; }
            dfs(i, M, visited);
            count ++;
        }
        return count;
    }
};
// TEST
struct Test {
    initializer_list< initializer_list<int> > ilist;
    void run() const {
        Solution sol;
        cout << "Friend circle of test size " << ilist.size() << " [" << endl;
        vector< vector<int> > testMatrix;
        for (const auto ril: ilist) {
            vector<int> tr(ril);
            testMatrix.push_back(tr);
            for (int v: tr) {
                cout << v << ", ";
            }
            cout << endl;
        }
        cout << "]" << " -> ";
        cout << sol.findCircleNum(testMatrix) << endl;
    }
};

int main(int argc, char* argv[]) {
    initializer_list<Test> tests = {
        {
            {{1}}
        },
        {
            {{1,1,0},
             {1,1,0},
             {0,0,1}}
        },
        {
            {{1,1,0},
             {1,1,1},
             {0,0,1}}
        }
    };
    for (const Test& t: tests) {
        t.run();
    }
    return 0;
}
