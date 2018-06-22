// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int maxVacationDays(vector<vector<int>>& flights, vector<vector<int>>& days) {
        if (days.size() == 0 || flights.size() == 0) return 0;
        int N = flights.size();
        int K = days[0].size();
        vector<vector<int>> dp(N, vector<int>(K+1, {0}));
        for (int k = K - 1; k >= 0; --k) { // per week
            for (int i = 0; i < N; ++i) { // per city in week k
                for (int j = 0; j < N; ++j) { // from i to which candidate city?
                    if (i != j && flights[i][j] == 0) { continue; }
                    dp[i][k] = max(dp[i][k], days[j][k] + dp[j][k+1]);
                }
            }
        }
        return dp[0][0];
    }
};
// TEST
struct Test {
    vector<vector<int>> flights;
    vector<vector<int>> days;
    int expected;
    void run() {
        Solution sol;
        int actual = sol.maxVacationDays(flights, days);
        cout << "Max vacation days -> "
             << actual << ", " << boolalpha << (actual == expected)
             << endl;
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {{0,1,1},{1,0,1},{1,1,0}},
            {{1,3,1},{6,0,3},{3,3,3}},
            12
        },
        {
            {{0,0,0},{0,0,0},{0,0,0}},
            {{1,1,1},{7,7,7},{7,7,7}},
            3
        },
        {
            {{0,1,1},{1,0,1},{1,1,0}},
            {{7,0,0},{0,7,0},{0,0,7}},
            21
        }
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}
