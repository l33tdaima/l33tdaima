// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <functional>
#include <iostream>
#include <queue>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k)
    {
        // 1. convert graph representation to adjacency list representation
        vector<vector<vector<int>>> graph(n + 1);
        for (auto& e : times) {
            graph[e[0]].push_back({ e[1], e[2] });
        }
        // 2. Dijkstra's algorithm to find shortest distance from k
        unordered_map<int, int> dist;

        auto cmp = [](const vector<int>& lhs, const vector<int>& rhs) -> bool {
            return lhs[1] > rhs[1];
        };
        priority_queue<vector<int>, vector<vector<int>>, decltype(cmp)> minheap(cmp);

        minheap.push({ k, 0 }); // start from k
        while (!minheap.empty()) {
            vector<int> v = minheap.top(); // Pick the vertex with minimum distance
            minheap.pop();
            if (dist.count(v[0]))
                continue; // Shortest path will be insert and processed first
            dist[v[0]] = v[1];
            for (auto& next : graph[v[0]]) {
                if (!dist.count(next[0])) {
                    minheap.push({ next[0], v[1] + next[1] });
                }
            }
        }
        // 3. Compute the delay to reach all nodes
        if (dist.size() != n)
            return -1;
        int ans = 0;
        for (auto& d : dist) {
            ans = max(ans, d.second);
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<vector<int>> times;
    int n;
    int k;
    int expected;
    void run()
    {
        Solution sol;
        int actual = sol.networkDelayTime(times, n, k);
        cout << "Network delay time from node " << k << " -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const* argv[])
{
    vector<Test> tests = {
        { { { 2, 1, 1 }, { 2, 3, 1 }, { 3, 4, 1 } },
            4, 2, 2 },
        { { { 1, 2, 4 }, { 1, 3, 9 }, { 2, 3, 3 } },
            3, 1, 7 }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
