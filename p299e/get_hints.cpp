#include <string>
#include <vector>
#include <iostream>

using namespace std;
class Solution {
public:
    string getHint(string secret, string guess) {
        vector<int> digits(10, 0);
        int bulls = 0, cows = 0;
        for (int i = 0; i < guess.length(); ++i) {
            int s = secret[i] - '0';
            int g = guess[i] - '0';
            if (s == g) bulls++;
            else {
                if (digits[s] < 0) cows++;
                if (digits[g] > 0) cows++;
                digits[s]++;
                digits[g]--;
            }
        }
        return to_string(bulls) + "A" + to_string(cows) + "B";
    }
};
// TESTS
struct Test {
    string secret;
    string guess;
    string expected;
    void run() {
        Solution sol;
        string actual = sol.getHint(secret, guess);
        cout << "getHint(\"" << secret << "\", \"" << guess
             << "\") -> " << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            "1807", "7810", "1A3B"
        },
        {
            "1123", "0111", "1A1B"
        },
        {
            "1122", "2211", "0A4B"
        }

    };
    for (auto& t: tests) t.run();
    return 0;
}