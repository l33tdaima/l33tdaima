#include <string>
#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int charFreq[256] = {0};
        for (char c: magazine) { charFreq[c] ++; }
        for (char c: ransomNote) {
            charFreq[c] --;
            if (charFreq[c] < 0) return false;
        }
        return true;
    }
};
// TEST
struct Test {
    string ransomNote;
    string magazine;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.canConstruct(ransomNote, magazine);
        cout << "Ransom note '" << ransomNote 
             << "' can be constructed from magazine '" << magazine
             << "' -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            "a", "b", false
        },
        {
            "aa", "ba", false
        },
        {
            "aa", "aba", true 
        },
    };
    for (auto& t: tests) t.run();
    return 0;
}