// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <limits>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<string> commonChars(vector<string>& A) {
        vector<vector<int> > occurence(A.size(), vector<int>(26, 0));
        for (int i = 0; i < A.size(); ++i) {
            for (char c: A[i]) occurence[i][c - 97]++;
        }
        vector<string> ans;
        for (char c = 'a'; c <= 'z'; ++c) {
            int mincount = numeric_limits<int>::max();
            for (int i = 0; i < A.size(); ++i) {
                if (occurence[i][c - 97] == 0) { mincount = 0; break; }
                mincount = min(mincount, occurence[i][c - 97]);
            }
            for (int i = 1; i <= mincount; ++i) ans.push_back(string(1, c));
        }
        return ans;
    }
};
struct Test {
    vector<string> input;
    void run() {
        Solution sol;
        cout << "Common chars in [";
        for (auto& w: input) cout << w << " ";
        cout << "] -> [";
        vector<string> output = sol.commonChars(input);
        for (auto& w: output) cout << w << " ";
        cout << "]" << endl;
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {"bella","label","roller"}
        },
        {
            {"cool","lock","cook"}
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}