// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <sstream>
#include <iostream>

using namespace std;

class Codec {
public:
    // Encodes a list of strings to a single string.
    string encode(vector<string>& strs) {
        ostringstream oss;
        for (auto& s: strs) {
            oss << s.length() << "|" << s; // size of each segment and content
        }
        // cout << oss.str() << endl;
        return oss.str();
    }

    // Decodes a single string to a list of strings.
    vector<string> decode(string s) {
        vector<string> strs;
        int pos = 0;
        for (int i = 0; i < s.length();) {
            if (s[i] == '|') {
                int len = stoi(s.substr(pos, i - pos));
                strs.push_back(s.substr(i + 1, len));
                pos = i + 1 + len;
                i = pos;
            } else {
                ++i;
            }
        }
        return strs;
    }
};

// Your Codec object will be instantiated and called as such:
// Codec codec;
// codec.decode(codec.encode(strs));
struct Test {
    vector<string> strs;
    void run() {
        Codec codec;
        vector<string> afterDec = codec.decode(codec.encode(strs));
        assert(strs.size() == afterDec.size());
        cout << "Codec test on [";
        for (int i = 0; i < strs.size(); ++i) {
            cout << strs[i] << ",";
            assert(strs[i] == afterDec[i]);
        }
        cout << "] -> Passed" << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {}
        },
        {
            {""}
        },
        {
            {"abc"}
        },
        {
            {"a", "b", "c"}
        },
        {
            {"My codec test string", "", "@~)@#)&#*)$)(*)(#$", "z"}
        },
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
