#include <algorithm>
#include <utility>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    void reverseWordsSTL(vector<char>& str) {
        std::reverse(str.begin(), str.end());
        for (int l = 0, r = 0; l < str.size(); l = r + 1) {
            for (r = l; r < str.size() && str[r] != ' '; ++r) ;
            std::reverse(str.begin() + l, str.begin() + r);
        }
    }
    void reverseWords(vector<char>& str) {
        auto rev = [&str](int first, int last) {
            while ((first != last) && (first != --last)) {
                std::swap(str[first], str[last]);
                ++first;
            } 
        };
        rev(0, str.size());
        for (int l = 0, r = 0; l < str.size(); l = r + 1) {
            for (r = l; r < str.size() && str[r] != ' '; ++r) ;
            rev(l, r);
        }
    }
};
// TEST
struct Test {
    vector<char> str;
    void run() {
        cout << "Reverse '";
        for (char c: str) { cout << c; }
        cout << "' -> '";
        Solution sol;
        sol.reverseWords(str);
        for (char c: str) { cout << c; }
        cout << "'" << endl;
    }
};
int main() {
    vector<Test> tests = {
        {{}},
        {{'t','h','e','s','k','y'}},
        {{'t',' ','e',' ','a'}},
        {{'t','h','e',' ','s','k','y',' ','i','s',' ','b','l','u','e'}}
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}