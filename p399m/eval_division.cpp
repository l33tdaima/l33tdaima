// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <functional>
#include <iostream>

using namespace std;

class Solution {
public:
    // DFS solution
    vector<double> calcEquation(vector<pair<string, string>> equations,
                                vector<double>& values,
                                vector<pair<string, string>> queries) {
        // adjacency list of map variable to map of (variable, quotient)
        unordered_map<string, unordered_map<string, double>> graph;
        int i = 0;
        for (auto& eq: equations) {
            graph[eq.first].emplace(eq.second, values[i]);
            graph[eq.second].emplace(eq.first, 1.0/values[i]);
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
            if (graph.find(q.first) == graph.end()) {
                ans.push_back(-1.0);
            } else if (q.first == q.second) {
                ans.push_back(1.0);
            } else {
                unordered_set<string> visited;
                ans.push_back(recDfsCalc(visited, q.first, q.second, 1.0));
            }
        }
        return ans;
    }

    // Union-Find solution
    vector<double> calcEquationUF(vector<pair<string, string>> equations,
                                  vector<double>& values,
                                  vector<pair<string, string>> queries) {
        // parents["a"] = {"b", a/b = 2.0}
        // parents["b"] = {"c", b/c = 3.0}
        unordered_map<string, pair<string, double>> parents; // dividend -> divisor, divisor is parent
        for (int i = 0; i < equations.size(); ++i) {
            const string& x = equations[i].first;
            const string& y = equations[i].second;
            if (!parents.count(x) && !parents.count(y)) {
                parents[x] = {y, values[i]};
                parents[y] = {y, 1.0};
            } else if (!parents.count(x)) {
                parents[x] = {y, values[i]};
            } else if (!parents.count(y)) {
                parents[y] = {x, 1.0 / values[i]};
            } else { // union
                auto& rx = find(x, parents);
                auto& ry = find(y, parents);      
                parents[rx.first] = {ry.first, values[i] / rx.second * ry.second};
            }
        }
        vector<double> ans;
        for (const auto& pair : queries) {
            const string& x = pair.first;
            const string& y = pair.second;
            if (!parents.count(x) || !parents.count(y)) {
                ans.push_back(-1.0);
                continue;
            }
            auto& rx = find(x, parents); // {rx, x / rx}
            auto& ry = find(y, parents); // {ry, y / ry}
            if (rx.first != ry.first) {
                ans.push_back(-1.0);
            } else { // X / Y = (X / rX / (Y / rY))
                ans.push_back(rx.second / ry.second);
            }
        }
        return ans;
    }
private:
    pair<string, double>& find(const string& v, unordered_map<string, pair<string, double>>& parents) {
        if (v != parents[v].first) {
            const auto& p = find(parents[v].first, parents);
            parents[v].first = p.first;
            parents[v].second *= p.second;
        }
        return parents[v];
    }
};
// TEST
struct Test {
    vector<pair<string, string>> equations;
    vector<double> values;
    vector<pair<string, string>> queries;
    vector<double> expected;
    void run() {
        Solution sol;
        vector<double> actual = sol.calcEquation(equations, values, queries);
        assert(actual.size() == expected.size());
        cout << "Queries by DFS:" << endl;
        for (int i = 0; i < actual.size(); ++i) {
            cout << queries[i].first << "/" << queries[i].second << "="
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
            cout << queries[i].first << "/" << queries[i].second << "="
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
    };
    for (auto& t: tests) {
        t.run();
        t.runUF();
    }
    return 0;
}
