// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <stack>
#include <unordered_map>
#include <unordered_set>
#include <iostream>

using namespace std;

class Solution {
private:
    typedef unordered_map<char, unordered_set<char>> Graph;
    typedef unordered_map<char, unordered_set<char>>::const_iterator GraphCIt;
    void dumpGraph(Graph& graph) {
        cout << "graph_dump(";
        for (auto& kv: graph) {
            cout << "'" << kv.first << "':";
            for (auto &v: kv.second) {
                cout << "'" << v << "' ";
            }
            cout << ", ";
        }
        cout << ") ";
    }

    void recBuildDAG(Graph& graph, vector<string>& words) {
        if (words.size() < 1) return;
        char prev = '\0';
        vector<string> subwords;
        for (int i = 0; i < words.size(); ++i) {
            // cout << "word:" << words[i] << ", prev:" << prev << endl;
            if (words[i].empty()) continue;
            if (i == 0) prev = words[i][0];
            if (prev != words[i][0]) {
                // cout << "Adding " << prev << "->" << words[i][0] << endl;
                graph[prev].emplace(words[i][0]);
                prev = words[i][0];
                recBuildDAG(graph, subwords);
                subwords.clear();
            }
            if (words[i].length() > 1) {
                subwords.push_back(words[i].substr(1));
            }
        }
        recBuildDAG(graph, subwords);
        // Single node without edges should also be considered
        if (prev != '\0' && graph.count(prev) == 0) {
            graph.emplace(prev, unordered_set<char>());
        }
    }
    bool recTopologicalSort(string& stack,
                            const Graph& graph, char curr,
                            unordered_map<char, int>& visited) {
        visited[curr] = 1; // visiting
        GraphCIt it = graph.find(curr);
        if (it != graph.end()) {
            for (auto& c: it->second) {
                if (visited.count(c) == 0) {
                    if (!recTopologicalSort(stack, graph, c, visited)) return false;
                } else if (visited[c] == 1) {
                    return false;
                }
            }
        }
        visited[curr] = 2; // visited
        stack = curr + stack;
        return true;
    }
public:
    string alienOrder(vector<string>& words) {
        Graph graph;
        string ans = "";
        // build the DAG
        recBuildDAG(graph, words);  //dumpGraph(graph);
        // topological sort
        unordered_map<char, int> visited; 
        for (auto& kv: graph) {
            if (visited.count(kv.first) == 0) {
                if (! recTopologicalSort(ans, graph, kv.first, visited)) return "";
            }
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> words;
    void run() {
        Solution sol;
        cout << "Alien order of [ ";
        for (auto& w: words) {
            cout << w << ", ";
        }
        string act = sol.alienOrder(words);
        cout << "] is -> \"" << act << "\"" << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {"wrt", "wrtkj"}
        },
        {
            {"xz", "xy"}
        },
        {
            {"z"}
        },
        {
            {"z", "z"}
        },
        {
            {"z", "z", "z"}
        },
        {
            { "wrt", "wrf", "er", "ett", "rftt" }
        },
        {
            { "z", "x" }
        },
        {
            { "z", "x", "z" }
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}