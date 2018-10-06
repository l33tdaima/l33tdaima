// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <memory>
#include <iostream>

using namespace std;
class Trie {
    enum { MAXC = 26 };
    unique_ptr<Trie> next[MAXC] = { nullptr };
    vector<string> wordsPrefix; // words prefixed from this path
public:
    void insert(const string& word) {
        Trie* p = this;
        for (auto c: word) {
            size_t i = c - 'a';
            if (p->next[i] == nullptr) {
                p->next[i] = unique_ptr<Trie>(new Trie());
            }
            p = p->next[i].get();
            p->wordsPrefix.push_back(word);
        }
    }
    vector<string> search(const string& prefix) {
        Trie* p = this;
        for (char c: prefix) {
            size_t i = c - 'a';
            if (p->next[i] == nullptr) return vector<string>();
            p = p->next[i].get();
        }
        return p->wordsPrefix;
    }
};
class Solution {
    void recHelper(vector<vector<string>>& output,
                   vector<string>& wip,
                   const unique_ptr<Trie>& trie,
                   const int wlen) {
        if (wip.size() == wlen) {
            output.push_back(wip);
            return;
        }
        string prefix;
        for (int i = 0; i < wip.size(); ++i) {
            prefix += wip[i][wip.size()];
        }
        for (auto& w: trie->search(prefix)) {
            // cross reference trie if this word can contribute to word square
            wip.push_back(w);
            recHelper(output, wip, trie, wlen);
            wip.pop_back();
        }
    }
public:
    vector<vector<string>> wordSquares(vector<string> &words) {
        int wlen = words[0].length();
        // build a trie
        unique_ptr<Trie> root = unique_ptr<Trie>(new Trie()); 
        for (auto& w: words) { root->insert(w); }
        // Use recursive helper to backtrack
        vector<vector<string>> ans;
        vector<string> wip;
        for (auto& w: words) {
            wip.push_back(w);
            recHelper(ans, wip, root, wlen);
            wip.pop_back();
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> words;
    void run() {
        cout << "Word squares from [ ";
        for (const auto& w: words) {
            cout << "\"" << w << "\", ";
        }
        cout << "] ->" << endl;
        Solution sol;
        vector<vector<string>> results = sol.wordSquares(words);
        for (auto& result: results) {
            cout << "[" << endl;
            for (const string& s: result) {
                cout << "  " << s << "," << endl;
            }
            cout << "]" << endl;
        }
    }


};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {"area","lead","wall","lady","ball"}
        },
        {
            {"abat","baba","atan","atal"}
        }
    };
    for (auto& t: tests) { t.run(); }
    return 0;
}
