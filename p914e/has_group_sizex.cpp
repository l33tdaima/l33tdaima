// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;
class Solution {
    int gcd(int a, int b) {
        return a == 0 ? b : gcd(b % a, a);
    }
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        if (deck.size() < 2) return false;
        int cardCount[10000] = {0};
        for (int card: deck) { cardCount[card] ++; } 
        int g = -1;
        for (int i = 0; i < 10000; ++i) {
            if (cardCount[i] == 0) continue;
            if (cardCount[i] == 1) return false;
            if (g == -1) g = cardCount[i];
            else g = gcd(g, cardCount[i]);
        }
        return g >= 2;
    }
};
// TEST
struct Test {
    vector<int> deck;
    bool expected;
    void run() {
        Solution sol;
        bool actual = sol.hasGroupsSizeX(deck);
        cout << "Has group size X -> " << boolalpha << actual << endl;
        assert(actual == expected);
    }
};

int main(int argc, char* argv[]) {
    vector<Test> tests = {
        { {1,2,3,4,4,3,2,1}, true },
        { {1,1,1,2,2,2,3,3}, false },
        { {1}, false },
        { {1, 1}, true },
        { {1,1,2,2,2,2}, true }
    };
    for (auto& t: tests) t.run();
    return 0;
}