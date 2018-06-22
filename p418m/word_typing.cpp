// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    int wordsTypingBrutal(vector<string>& sentence, int rows, int cols) {
        if (rows == 0 || cols == 0) { return 0; }
        vector<int> sz;
        for (auto& w: sentence) {
            if (w.length() > cols) { return 0; }
            sz.push_back(w.length() + 1);
            cout << w << "(" << w.length() + 1 << ") ";
        }
        int i = 0; // sz vector index
        int r = 0, c = 0, count = 0;
        while (r < rows) {
            if (c + sz[i] < cols) {
                c += sz[i];
            } else if (c + sz[i] <= cols + 1) { // align to the end
                c = 0; r ++;
            } else {
                c = sz[i]; r ++;
            }
            i = (i+1) % sz.size();
            if (i == 0 && r*cols + c <= rows * cols) { count ++; } // fit a full round of words
        }
        return count;
    }
    int wordsTyping(vector<string>& sentence, int rows, int cols) {
        string str;
        for (auto& w: sentence) {
            str += w + " ";
        }
        int p = 0; // index in the str which is the start of a new row
        for (int r = 0; r < rows; ++r) {
            p += cols;
            if (str[p % str.length()] == ' ')  {
                p ++; // a new row does not start with space
            } else {
                while (p > 0 && str[(p - 1) % str.length()] != ' ') {
                    p --; // retreat to the begining of a word
                }
            }
        }
        return p / str.length();
    }
};
// TEST
struct Test {
    vector<string> sentence;
    int rows;
    int cols;
    int expected;
    void run() {
        cout << "Sentence '";
        Solution sol;
        int actual = sol.wordsTyping(sentence, rows, cols);
        cout << "' fitting on " << rows << " x " << cols
             << " screen -> " << actual << boolalpha
             << ", " << (actual == expected)
             << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {"hello", "leetcode"},
            1, 10, 0
        },
        {
            {"hello", "world"},
            2, 8, 1
        },
        {
            {"a", "bcd", "e"},
            3, 6, 2
        },
        {
            {"I", "had", "apple", "pie"},
            4, 5, 1
        },
        {
            {"a"},
            20000, 20000, 10000*20000
        }
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
