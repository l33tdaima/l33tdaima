// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <sstream>
#include <iostream>

using namespace std;

class Solution {
public:
    string mostCommonWord(string p, vector<string>& banned) {
        unordered_set<string> ban(banned.begin(), banned.end());
        unordered_map<string, int> count;
        for (auto & c: p) c = isalpha(c) ? tolower(c) : ' ';
        istringstream iss(p);
        string w;
        pair<string, int> res ("", 0);
        while (iss >> w)
            if (ban.find(w) == ban.end() && ++count[w] > res.second)
                res = make_pair(w, count[w]);
        return res.first;
    }
};
// TEST
struct Test {
    string paragraph;
    vector<string> banned;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.mostCommonWord(paragraph, banned);
        cout << "Most common word -> " << actual << endl;
        assert(expected == actual);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            "Bob hit a ball, the hit BALL flew far after it was hit.",
            { "hit" },
            "ball"
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
