// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <iostream>
#include <queue>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;
class Solution {
    typedef pair<string, int> WordFreqType;

public:
    vector<string> topKFrequent(vector<string>& words, int k)
    {
        // Build a word freq map
        unordered_map<string, int> wordFreq;
        for (const auto& w : words)
            wordFreq[w]++;
        // Add them into a min heap
        auto comp = [](const WordFreqType& a, const WordFreqType& b) -> bool {
            return a.second > b.second || (a.second == b.second && a.first < b.first);
        };
        typedef priority_queue<WordFreqType, vector<WordFreqType>, decltype(comp)> Heap;
        Heap minHeap(comp);
        for (const auto& w : wordFreq) {
            minHeap.push(w);
            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }
        // Output
        vector<string> ans;
        while (!minHeap.empty()) {
            ans.insert(ans.begin(), minHeap.top().first);
            minHeap.pop();
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> words;
    int k;
    void run()
    {
        Solution sol;
        cout << "Top " << k << " frequent words -> ";
        auto ans = sol.topKFrequent(words, k);
        for (const auto& w : ans)
            cout << w << " ";
        cout << endl;
    }
};
int main()
{
    vector<Test> tests = {
        { { "i", "love", "leetcode", "i", "love", "coding" }, 2 },
        { { "the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is" }, 4 }
    };
    for (auto& t : tests) {
        t.run();
    }
    return 0;
}
