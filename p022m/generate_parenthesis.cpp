// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <iostream>
#include <sstream>

using namespace std;
class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        if (n < 0) { return ans; }
        std::function<void(string,int,int)> recBtHelper = 
        [&](string ps, int open, int close) -> void {
            if (open == 0 && close == 0) {
                ans.push_back(ps);
                return;
            }
            if (close > 0) {
                recBtHelper(ps + ")", open, close - 1);
            }
            if (open > 0) {
                recBtHelper(ps + "(", open - 1, close + 1);
            }
        };
        recBtHelper("", n, 0);
        return ans;
    }
};
// TEST
int main(int argc, char* argv[]) {
    if (argc <= 1) {
        cout << "Please input a number" << endl;
        return 1;
    }
    stringstream ss(argv[1]);
    int n = 0;
    ss >> n;
    Solution sol;
    vector<string> ans = sol.generateParenthesis(n);
    for (const string& s: ans) {
        cout << s << endl;
    }
    return 0;
}