// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <unordered_set>
#include <iostream>

using namespace std;

class Solution {
private:
    bool dfs(string& ans, const int totalLen, const int n, const int k, unordered_set<string>& visited) {
        if (ans.length() == totalLen) { return true; }
        string node = ans.substr(ans.length() - n + 1, n - 1);
        for (char c = '0'; c < '0' + k; ++c) {
            node.push_back(c);
            if (!visited.count(node)) {
                ans.push_back(c);
                visited.insert(node);
                if (dfs(ans, totalLen, n, k, visited)) return true;
                visited.erase(node);
                ans.pop_back();
            }
            node.pop_back();
        }
        return false;
    }
public:
    string crackSafe(int n, int k) {
        int totalLen = n - 1 + pow(k, n);
        string ans(n, '0');
        unordered_set<string> visited;
        visited.emplace(ans);
        if (dfs(ans, totalLen, n, k, visited)) {
            return ans;
        } else {
            return "";
        }
    }
};
// TEST
int main(int argc, char const *argv[])
{
    Solution sol;
    for (int n = 1; n <= 4; ++n) {
        for (int k = 1; k <= 4; ++k) {
            cout << "Crack string of n = " << n << ", k = " << k << " -> "
                 << sol.crackSafe(n, k) << endl;
        }
    }
    return 0;
}
