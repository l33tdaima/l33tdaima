// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
    bool backtrack(vector<int>& ans, const string& s, int start) {
        if (start == s.length()) return ans.size() > 2;
        int maxLen = s[start] == '0' ? 1 : 10;
        long num = 0;
        for (int i = start; i < s.length() && i < start + maxLen; ++i) {
            num = num * 10 + (s[i] - '0');
            if (num > INT_MAX) break;
            if (ans.size() >= 2) {
                long sum = static_cast<long>(ans.rbegin()[0])
                         + ans.rbegin()[1];
                if (num < sum) continue;
                if (num > sum) break;
            }
            ans.push_back(num);
            if (backtrack(ans, s, i + 1))
                return true;
            else
                ans.pop_back();
        }
        return false;
    }
public:
    vector<int> splitIntoFibonacci(string S) {
        vector<int> ans;
        backtrack(ans, S, 0);
        return ans;
    }
};
// TEST
struct Test {
    string input;
    void run() {
        Solution sol;
        vector<int> act = sol.splitIntoFibonacci(input);
        cout << "Split \"" << input << "\" into Fibonacci -> [";
        for (int n: act)
            cout << n << ",";
        cout << "]" << endl;
    }
};
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        { "123456579" },
        { "11235813" },
        { "112358130" },
        { "0123" },
        { "1101111" }
    };
    for (auto& t: tests) t.run();
    return 0;
}