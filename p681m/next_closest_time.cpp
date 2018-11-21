// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <unordered_set>
#include <sstream>
#include <vector>
#include <iostream>
#include <iomanip>

using namespace std;
class Solution {
public:
    string nextClosestTime(string time) {
        int start = stoi(time.substr(0, 2), nullptr) * 60 +
                    stoi(time.substr(3), nullptr);

        unordered_set<int> digits;
        for (char c: time) {
            if (c == ':') continue;
            digits.emplace(c - '0');
        }

        int closest = start;
        int elapsed = 24 * 60;
        for (int h1: digits) {
            for (int h2: digits) {
                if (h1 * 10 + h2 >= 24) continue;
                for (int m1: digits) {
                    for (int m2: digits) {
                        if (m1 * 10 + m2 >= 60) continue;
                        int curr = (h1*10 + h2)*60 + m1*10 + m2;
                        int candElapsed = (24*60 + curr - start) % (24*60);
                        // cout << h1 << h2 << ":" << m1 << m2 << " -> " << curr << ", " << candElapsed << endl;
                        if (candElapsed > 0 && candElapsed < elapsed) {
                            closest = curr;
                            elapsed = candElapsed;
                        }
                        
                    }
                }
            }
        }
        stringstream ans;
        ans << setw(2) << setfill('0') << closest / 60 << ":" 
            << setw(2) << setfill('0') << closest % 60;
        return ans.str();
    }
};
struct Test {
    string time;
    string expected;
    void run() {
        Solution sol;
        cout << "The next closest time to " << time << " -> ";
        string actual = sol.nextClosestTime(time);
        cout << actual << endl;
        assert(expected == actual);
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        { "19:34", "19:39" },
        { "19:00", "19:01" },
        { "23:59", "22:22" },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
