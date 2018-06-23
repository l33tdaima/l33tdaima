// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>
#include <stdexcept>

using namespace std;

class Solution {
private:
    int root(vector<int>& parent, int i) {
        while (i != parent[i]) {
            parent[i] = parent[parent[i]]; // path compression
            i = parent[i];
        }
        return i;
    };   
public:
    vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {
        if (edges.size() < 3) { throw runtime_error("Invalid input"); }
        vector<int> parent(edges.size() + 1, 0);
        vector<int> dualParentA, dualParentB;
        // Round 1: search dual parent
        for (auto& e: edges) {
            int p = e[0], c = e[1];
            if (parent[c] == 0) { // a child doesn't have parent yet
                parent[c] = p;
            } else { // already have a parent
                dualParentA = {parent[c], c};
                dualParentB = e;
                e[0] = 0;
            }
        }
        // union find for cycle check
        for (int i = 1; i <= edges.size(); ++i) { parent[i] = i; }
        for (auto& e: edges) {
            if (e[0] == 0) { continue; }
            int p = e[0], c = e[1];
            if (root(parent, p) == c) { // detect cycle
                if (dualParentA.empty()) { return e; }
                return dualParentA;
            }
            parent[c] = p;
        }
        return dualParentB;
    }
};
// TEST
struct Test {
    vector<vector<int>> edges;
    vector<int> expected;
    void run() {
        Solution sol;
        cout << "Redundant directed connection -> ";
        vector<int> actual = sol.findRedundantDirectedConnection(edges);
        cout << "[" << actual[0] << ", " << actual[1] << "]" << endl;
        assert(actual[0] == expected[0] && actual[1] == expected[1]);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        { // double parent
            {{1,2}, {1,3}, {2,3}},
            {2,3}
        },
        { // cycle
            {{1,2}, {2,3}, {3,4}, {4,1}, {1,5}},
            {4,1}
        },
        { // double parent and cycle
            {{2,1},{3,1},{4,2},{1,4}},
            {2,1}
        },
        { // double parent and cycle
            {{1,5},{5,3},{5,2},{2,4},{4,2}},
            {4,2}
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
