// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>
#include <stdexcept>

using namespace std;

class Solution {
private:
    int parent[2001] = {0};
    
    int root(int i) {
        while (i != parent[i]) {
            parent[i] = parent[parent[i]];
            i = parent[i];
        }
        return i;
    };   
    bool find(int p, int q) {
        return root(p) == root(q);
    };
    void unite(int p, int q) {
        int rp = root(p);
        int rq = root(q);
        parent[rp] = rq;
    };

public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        if (edges.size() < 3) { throw runtime_error("Invalid input"); }
        // Union find array for parent ids
        for (int i = 1; i <= edges.size(); ++i) { parent[i] = i; }

        for (auto& e: edges) {
            if (find(e[0], e[1])) { return e; }
            unite(e[0], e[1]);
        }
        throw runtime_error("Not found");
    }
};

class SolutionLambda {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        if (edges.size() < 3) { throw runtime_error("Invalid input"); }
        // Union find array for parent ids
        vector<int> parent(edges.size() + 1);
        for (int i = 1; i <= parent.size(); ++i) { parent[i] = i; }

        // lambda: get root
        auto root = [&](int i) -> int {
            while (i != parent[i]) {
                parent[i] = parent[parent[i]]; // path compression
                i = parent[i];
            }
            return i;
        };
        // lambda: find
        auto find = [&](int p, int q) -> bool {
            return root(p) == root(q);
        };
        // lambda: union
        auto unite = [&](int p, int q) {
            int rp = root(p);
            int rq = root(q);
            parent[rp] = rq;
        };
        for (auto& e: edges) {
            if (find(e[0], e[1])) { return e; }
            unite(e[0], e[1]);
        }
        throw runtime_error("Not found");
    }
};
// TEST
struct Test {
    vector<vector<int>> edges;
    vector<int> expected;
    void run() {
        SolutionLambda sol;
        cout << "Redundant connection -> ";
        vector<int> actual = sol.findRedundantConnection(edges);
        cout << "[" << actual[0] << ", " << actual[1] << "]" << endl;
        assert(actual[0] == expected[0] && actual[1] == expected[1]);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{2,7},{7,8},{3,6},{2,5},{6,8},{4,8},{2,8},{1,8},{7,10},{3,9}},
            {2,8}
        },
        {
            {{1,2}, {1,3}, {2,3}},
            {2,3}
        },
        {
            {{1,2}, {2,3}, {3,4}, {1,4}, {1,5}},
            {1,4}
        }
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
