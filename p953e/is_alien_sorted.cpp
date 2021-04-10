// ++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order)
    {
        unordered_map<char, int> ordermap;
        for (int i = 0; i < order.length(); ++i)
            ordermap[order[i]] = i;

        auto gt = [&ordermap](const string& w1, const string& w2) -> bool {
            for (int i = 0; i < w1.length() && i < w2.length(); ++i) {
                if (w1[i] != w2[i])
                    return ordermap[w1[i]] > ordermap[w2[i]];
            }
            return w1.length() > w2.length();
        };

        for (int i = 1; i < words.size(); ++i) {
            if (gt(words[i - 1], words[i]))
                return false;
        }
        return true;
    }
};
// TESTS
struct Test {
    vector<string> words;
    string order;
    bool expected;
    void run()
    {
        Solution sol;
        bool actual = sol.isAlienSorted(words, order);
        cout << "Is words alien sorted in order \'" << order << "\' -> "
             << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[])
{
    vector<Test> tests = {
        { { "hello", "leetcode" },
            "hlabcdefgijkmnopqrstuvwxyz",
            true },
        { { "word", "world", "row" },
            "worldabcefghijkmnpqstuvxyz",
            false },
        { { "apple", "app" },
            "abcdefghijklmnopqrstuvwxyz",
            false },
        { { "kuvp", "q" },
            "ngxlkthsjuoqcpavbfdermiywz",
            true }
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
