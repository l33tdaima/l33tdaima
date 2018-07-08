// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <string>
#include <sstream>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    string similarRGB(string color) {
        auto helper = [](const string& codestr) -> string {
            istringstream iss(codestr);
            int code = 0;
            iss >> hex >> code;
            ostringstream oss;
            oss << hex << (code + 8) / 17 << (code + 8) / 17;
            return oss.str();
        };
        return "#" + helper(color.substr(1,2)) + helper(color.substr(3,2)) + helper(color.substr(5,2));
    }
};
// TEST

int main(int argc, char const *argv[])
{
    vector<string> tests = {
        "#000102",
        "#09f166",
        "#eff3ff",
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Most simliar shorthand to " << t << " -> "
             << sol.similarRGB(t) << endl;
    }
    return 0;
}
