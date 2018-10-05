// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <string>
#include <vector>
#include <memory>
#include <iostream>

using namespace std;

class LinkedListTrie {
    enum { MAXC = 26 };
    bool m_charMap[MAXC] = { false };
    unique_ptr<LinkedListTrie> m_next = nullptr;
public:
    LinkedListTrie() {}
    void insert(const string& word) {
        LinkedListTrie* p = this;
        for (auto c: word) {
            p->m_charMap[c - 'a'] = true;
            if (p->m_next == nullptr) {
                p->m_next = unique_ptr<LinkedListTrie>(new LinkedListTrie());
            }
            p = p->m_next.get();
        }
    }
    bool hasPrefixOf(const string& word) {
        for (char c: word) {
            if (m_charMap[c - 'a'] == false) return false;
        }
        return true;
    }
    const unique_ptr<LinkedListTrie>& next() {
        return m_next;
    }
};


class Solution {
    void recHelper(vector<vector<string>>& output,
                   vector<string>& wip,
                   const unique_ptr<LinkedListTrie>& trie,
                   const vector<string>& words,
                   const int wlen) {
        if (wip.size() == wlen) {
            output.push_back(wip);
            return;
        }
        for (auto& w: words) {
            // The new word must match the existing wip
            bool valid = true;
            int j = wip.size();
            for (int i = 0; i < wip.size(); ++i) {
                if (wip[i][j] != w[i]) valid = false;
            }
            // cross reference trie if this word can contribute to word square
            if (valid && trie->hasPrefixOf(w)) {
                wip.push_back(w);
                recHelper(output, wip, trie->next(), words, wlen);
                wip.pop_back();
            }
        }
    }
public:
    vector<vector<string>> wordSquares(vector<string> &words) {
        int wlen = words[0].length();
        // build a trie
        unique_ptr<LinkedListTrie> root = unique_ptr<LinkedListTrie>(new LinkedListTrie()); 
        for (auto& w: words) { root->insert(w); }
        // Use recursive helper to backtrack
        vector<vector<string>> ans;
        vector<string> wip;
        recHelper(ans, wip, root, words, wlen);
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
