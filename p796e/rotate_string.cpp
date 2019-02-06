#include <string>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    bool rotateString(string A, string B) {
        return A.size() == B.size() && (A + A).find(B) != string::npos;
    }
};

int main(int argc, char** argv) {
    vector< vector<string> > tests = {
        {"abcde", "cdeab"},
        {"abcde", "abced"}
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Rotate string " << t[0] << ", " << t[1] << " -> "
             << sol.rotateString(t[0], t[1]) << endl;
    }
    return 0;
}
