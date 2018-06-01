// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <string>
#include <sstream>
#include <iostream>

using namespace std;
class Solution {
private:
    struct TrieNode {
        string word = "";
        TrieNode* next[26] = { nullptr };
        // Methods
        // Add a word into the trie
        void addWord(const string& w) {
            auto p = this;
            for (int i = 0; i < w.length(); ++i) {
                int pos = w[i] - 'a';
                if (!(p->next)[pos]) {
                    (p->next)[pos] = new TrieNode();
                }
                p = (p->next)[pos];
            }
            p->word = w;
        }
        // Search a prefix
        string searchPrefix(const string& w) {
            auto p = this;
            for (int i = 0; i < w.length(); ++i) {
                int pos = w[i] - 'a';
                if (p->word != "") { return p->word; }
                if ((p->next)[pos]) {
                    p = (p->next)[pos];
                } else {
                    return "";
                }
            }
            return "";
        }
    };
public:
    string replaceWords(vector<string>& dict, string sentence) {
        // Build the trie
        TrieNode trie;
        for (const string& w: dict) {
            trie.addWord(w);
        }
        string ans;
        // replace
        istringstream ss(sentence);
        string token;
        bool first = true;
        while (getline(ss, token, ' ')) {
            string rep = trie.searchPrefix(token);
            //cout << "|" << token << "," << rep << "|";
            if (rep.empty()) { rep = token; }
            if (first) {
                ans = rep; first = false;
            } else {
                ans += " " + rep;
            }
        }
        if (sentence[sentence.size() - 1] == ' ') { ans += " "; }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> dict;
    string sentence;
    void run() {
        Solution sol;
        cout << "Replace '" << sentence << "' with -> '";
        cout << sol.replaceWords(dict, sentence) << "'" << endl;
    }
};
int main() {
    vector<Test> tests = {
        {
            {"cat", "bat", "rat"},
            "the cattle was rattled by the battery "
        },
        {
            {"cat", "bat", "rat"},
            " the  cattle was rattled by the battery  "
        }
    };
    for (auto t: tests) {
        t.run();
    }
    return 0;
}