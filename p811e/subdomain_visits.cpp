// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        unordered_map<string, int> domainVisitMap;
        for (auto &cp: cpdomains) {
            int i = cp.find_first_of(' ');
            if (i == string::npos) continue;
            int visits = stoi(cp.substr(0, i));
            string domain = cp.substr(++i);
            domainVisitMap[domain] += visits;
            i = 0;
            while ((i = domain.find('.', i)) != string::npos) {
                i++;
                domainVisitMap[domain.substr(i)] += visits;
            }
        }
        vector<string> ans;
        for (auto& kv: domainVisitMap) {
            ans.push_back(to_string(kv.second) + " " + kv.first);
        }
        return ans;
    }
};
// TEST
struct Test {
    vector<string> cpdomains;
    void run() {
        cout << "Subdomians visits: [";
        for (auto& s: cpdomains) {
            cout << "\"" << s << "\"" << ",";
        }
        Solution sol;
        vector<string> actual = sol.subdomainVisits(cpdomains);
        cout << "] -> [";
        for (auto& s: actual) {
            cout << "\"" << s << "\"" << ",";
        }
        cout << "]" << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {{"9001 discuss.leetcode.com"}},
        {{"900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"}}
    };
    for (auto& t: tests) t.run();
    return 0;
}
