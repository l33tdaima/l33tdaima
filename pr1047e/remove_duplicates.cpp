// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <stack>
#include <string>

#include <cassert>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    string removeDuplicatesStack(string S)
    {
        stack<char> stack;
        for (char c : S) {
            if (stack.empty() || stack.top() != c) {
                stack.push(c);
            } else {
                stack.pop();
            }
        }
        string ans(stack.size(), 0);
        for (int i = ans.length() - 1; i >= 0; --i) {
            ans[i] = stack.top();
            stack.pop();
        }
        return ans;
    }
    string removeDuplicates(string S)
    {
        string ans = "";
        for (char c : S) {
            if (ans.size() == 0 || ans.back() != c) {
                ans.push_back(c);
            } else {
                ans.pop_back();
            }
        }
        return ans;
    }
};

// TESTS
int main(int argc, char* argv[])
{
    vector<vector<string>> tests = {
        { "abcd", "abcd" },
        { "abbaca", "ca" }
    };
    Solution sol;
    for (auto& t : tests) {
        string actual = sol.removeDuplicates(t[0]);
        cout << "Remove duplicates in " << t[0] << " -> " << actual << endl;
        assert(actual == t[1]);
    }
    return 0;
}
