// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> diStringMatch(string S) {
        int i = 0, d = S.length();
        vector<int> ans;
        for (char c: S) {
            if (c == 'I') ans.push_back(i++);
            else ans.push_back(d--);
        }
        ans.push_back(i);
        return ans;
    }
};
// TEST
struct Test {
    string input;
    vector<int> expected;
    void run() {
        Solution sol;
        cout << "Permutation matching DI string \""
             << input << "\" -> [";
        vector<int> actual = sol.diStringMatch(input);
        for (int i = 0; i < actual.size(); ++i) {
            assert(actual[i] == expected[i]);
            cout << actual[i] << " ";
        }
        cout << "]" << endl;
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            "IDID",
            {0,4,1,3,2}
        },
        {
            "III",
            {0,1,2,3}
        },
        {
            "DDI",
            {3,2,0,1}
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
