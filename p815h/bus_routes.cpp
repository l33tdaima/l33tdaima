// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <queue>
#include <utility>
#include <iostream>

using namespace std;

class Solution {
public:
    int numBusesToDestination(vector<vector<int>>& routes, int S, int T) {
        unordered_map<int, unordered_set<int>> mapStopRoute;
        for (int rid = 0; rid < routes.size(); ++rid) {
            for (int stop: routes[rid]) {
                mapStopRoute[stop].emplace(rid);
            }
        }
        unordered_set<int> visited; // visited flag
        queue<pair<int, int>> bfsQueue;
        bfsQueue.push(make_pair(S, 0));
        while (!bfsQueue.empty()) {
            int stop = bfsQueue.front().first;
            int transfer = bfsQueue.front().second;
            if (stop == T) { return transfer; }
            bfsQueue.pop();
            visited.emplace(stop);
            for (int rid: mapStopRoute[stop]) {
                for (int s: routes[rid]) {
                    if (visited.find(s) == visited.end()) 
                        bfsQueue.push(make_pair(s, transfer + 1));
                }
                routes[rid].clear(); // clear visited route to avoid TLE error
                                     // or use a visited set if immutable
            }
        }
        return -1;
    }
};
// TEST
struct Test {
    vector<vector<int>> routes;
    int S;
    int T;
    void run() {
        Solution sol;
        cout << "The least number of buses from "
             << S << " to " << T << " -> "
             << sol.numBusesToDestination(routes, S, T)
             << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{1,2,7}, {3,6,7}},
            1,
            6
        },
        {
            {{1,2,7}, {3,6,7}},
            1,
            7
        },
        {
            {{1,2,7}, {3,6,7}, {6,8}},
            1,
            8
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
