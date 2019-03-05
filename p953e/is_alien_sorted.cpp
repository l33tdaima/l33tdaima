// ++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <unordered_map>

#include <iostream>

using namespace std;

class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        unordered_map<char, int> ordermap;
        for (int i = 0; i < order.length(); ++i) ordermap[order[i]] = i;

        for (int i = 1; i < words.size(); ++i) {
            bool sorted = false;
            for (int j = 0; j < words[i-1].length() && j < words[i].length(); ++j) {
                if (ordermap[words[i - 1][j]] > ordermap[words[i][j]]) return false;
                if (ordermap[words[i - 1][j]] < ordermap[words[i][j]]) {
                    sorted = true;
                    break;
                }
            }
            if (!sorted && words[i - 1].length() > words[i].length()) return false;
        }
        return true;
    }
};
// TESTS
struct Test {
    vector<string> words;
    string order;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.isAlienSorted(words, order);
        cout << "Is words alien sorted in order \'" << order << "\' -> " 
             << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {"hello", "leetcode"},
            "hlabcdefgijkmnopqrstuvwxyz",
            true
        },
        {
            {"word","world","row"},
            "worldabcefghijkmnpqstuvxyz",
            false    
        },
        {
            {"apple","app"},
            "abcdefghijklmnopqrstuvwxyz",
            false
        },
        {
            {"kuvp","q"},
            "ngxlkthsjuoqcpavbfdermiywz",
            true
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}