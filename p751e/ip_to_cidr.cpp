#include <string>
#include <vector>
#include <sstream>
#include <iostream>

using namespace std;
class Solution {
    string xToCIDR(long x, int step) {
        int cidr[4];
        for (int i = 0; i < 4; ++i) {
            cidr[i] = x & 255;
            x >>= 8;
        }
        int prefixLen = 33;
        while (step > 0) {
            prefixLen --;
            step /= 2;
        }
        ostringstream oss;
        oss << cidr[3] << "." << cidr[2] << "."
            << cidr[1] << "." << cidr[0] << "/" << prefixLen;
        return oss.str();
    }
public:
    vector<string> ipToCIDR(string ip, int n) {
        // convert ip to integer representation
        long x = 0;
        size_t s = 0, e = 0;
        while ((e = ip.find('.', s)) != string::npos) {
            string token = ip.substr(s, e - s);
            x = stoi(token) + x * 256;
            s = e + 1;
        }
        x = stoi(ip.substr(s)) + x * 256;
        vector<string> ans;
        // find the closest power of 2 from x and return this group
        while (n > 0) {
            // The power of 2 corresponding to the location of the first 1 in x.
            long step = x & (-x);
            while (step > n) step /= 2;
            ans.push_back(xToCIDR(x, step));
            x += step;
            n -= step;
        }
        return ans;
    }
};
struct Test {
    string ip;
    int n;
    void run() {
        Solution sol;
        vector<string> act = sol.ipToCIDR(ip, n);
        cout << "IP " << ip << " to CIDR blocks of " << n << " -> [";
        for (auto& s: act) {
            cout << "\"" << s << "\", ";
        }
        cout << "]" << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {"0.0.0.4", 1},
        {"255.0.0.7", 10},
        {"255.0.0.0", 10},
    };
    for (auto& t: tests) t.run();
    return 0;
}
