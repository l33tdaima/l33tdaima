// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <functional>
#include <iostream>
#include <cassert>

using namespace std;

class Solution {
public:
    // DFS solution
    vector<double> calcEquation(vector<vector<string>> equations,
                                vector<double>& values,
                                vector<vector<string>> queries) {
        // adjacency list of map variable to map of (variable, quotient)
        unordered_map<string, unordered_map<string, double>> graph;
        int i = 0;
        for (auto& eq: equations) {
            graph[eq[0]].emplace(eq[1], values[i]);
            graph[eq[1]].emplace(eq[0], 1.0/values[i]);
            i++;
        }
        function<double(unordered_set<string>&, const string&, const string&, double)> recDfsCalc =
            [&](unordered_set<string>& visited, const string& from, const string& to, double r) -> double {
            visited.emplace(from);
            for (auto& v: graph[from]) {
                if (visited.find(v.first) != visited.end()) continue;
                if (v.first == to) {
                    return r * v.second;
                } else {
                    double rr = recDfsCalc(visited, v.first, to, r * v.second);
                    if (rr > 0) { return rr; }
                }
            }
            return -1.0;
        };
        vector<double> ans;
        for (auto& q: queries) {
            if (graph.find(q[0]) == graph.end()) {
                ans.push_back(-1.0);
            } else if (q[0]== q[1]) {
                ans.push_back(1.0);
            } else {
                unordered_set<string> visited;
                ans.push_back(recDfsCalc(visited, q[0], q[1], 1.0));
            }
        }
        return ans;
    }

    // Union-Find solution
    vector<double> calcEquationUF(vector<vector<string>> equations,
                                  vector<double>& values,
                                  vector<vector<string>> queries) {
        unordered_map<string, pair<string, double>> parents; // dividend -> divisor, divisor is parent
        for (int i = 0; i < equations.size(); ++i) {
            const string& x = equations[i][0];
            const string& y = equations[i][1];
            if (!parents.count(x) && !parents.count(y)) {
                parents[x] = {y, values[i]};
                parents[y] = {y, 1.0};
            } else if (!parents.count(x)) {
                parents[x] = {y, values[i]};
            } else if (!parents.count(y)) {
                parents[y] = {x, 1.0 / values[i]};
            } else { // union
                auto& rx = root(x, parents);
                auto& ry = root(y, parents);
                parents[rx.first] = {ry.first, values[i] / rx.second * ry.second};
            }
        }
        //dumpParents(parents);
        vector<double> ans;
        for (const auto& pair : queries) {
            const string& x = pair[0];
            const string& y = pair[1];
            if (!parents.count(x) || !parents.count(y)) {
                ans.push_back(-1.0);
                continue;
            }
            auto& rx = root(x, parents); // {rx, x / rx}
            auto& ry = root(y, parents); // {ry, y / ry}
            if (rx.first != ry.first) {
                ans.push_back(-1.0);
            } else { // X / Y = (X / rX / (Y / rY))
                ans.push_back(rx.second / ry.second);
            }
        }
        //dumpParents(parents);
        return ans;
    }
private:
    pair<string, double>& root(const string& v, unordered_map<string, pair<string, double>>& parents) {
        if (v != parents[v].first) {
            const auto& p = root(parents[v].first, parents);
            parents[v].first = p.first; // path compression to root, iterative path compression not working here
            parents[v].second *= p.second;
        }
        return parents[v];
    }
    void dumpParents(const unordered_map<string, pair<string, double>>& parents) {
        cout << "Dump parents: {" << endl;
        for (const auto& p: parents) {
            cout << "  " << p.first << ": (" 
                 << p.second.first << ", " 
                 << p.second.second << ")" << endl;
        }
        cout << "}" << endl;
    }
};
// TEST
struct Test {
    vector<vector<string>> equations;
    vector<double> values;
    vector<vector<string>> queries;
    vector<double> expected;
    void run() {
        Solution sol;
        vector<double> actual = sol.calcEquation(equations, values, queries);
        assert(actual.size() == expected.size());
        cout << "Queries by DFS:" << endl;
        for (int i = 0; i < actual.size(); ++i) {
            cout << queries[i][0] << "/" << queries[i][1] << "="
                 << actual[i] << ", ";
            assert(abs(actual[i] - expected[i]) < 0.0001);
        }
        cout << "\n---" << endl;
    }
    void runUF() {
        Solution sol;
        vector<double> actual = sol.calcEquationUF(equations, values, queries);
        assert(actual.size() == expected.size());
        cout << "Queries by Union-Find:" << endl;
        for (int i = 0; i < actual.size(); ++i) {
            cout << queries[i][0] << "/" << queries[i][1] << "="
                 << actual[i] << ", ";
            assert(abs(actual[i] - expected[i]) < 0.0001);
        }
        cout << "\n---" << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{"a","b"}, {"b","c"}},
            {2.0, 3.0},
            {{"x","x"}, {"b","a"}, {"a","c"}, {"b","c"}, {"b","b"}, {"b","a"}, {"c","b"}},
            {-1.0, 0.5, 6.0, 3.0, 1.0, 0.5, 0.33333}
        },
        {
            {{"a","b"}, {"b","c"}, {"d","e"}, {"a","d"}},
            {2.0, 3.0, 4.0, 5.0},
            {{"b","a"}, {"a","c"}, {"b","c"}, {"a","e"}},
            {0.5, 6.0, 3.0, 20.0}
        },
    };
    for (auto& t: tests) {
        t.run();
        t.runUF();
    }
    return 0;
}
