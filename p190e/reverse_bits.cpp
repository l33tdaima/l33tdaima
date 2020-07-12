// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <bitset>
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        int rev = 0;
        for (int i = 0; i < 32; ++i) {
            rev = (rev << 1) | (n & 1);
            n >>= 1;
        }
        return rev;
    }
    uint32_t reverseBitsV2(uint32_t n) {
        bitset<32> bset(n);
        for (int i = 0; i < 32 / 2; ++i) {
            bool temp = bset[i];
            bset[i] = bset[bset.size() - 1 - i];
            bset[bset.size() - 1 - i] = temp;
        }
        return (uint32_t) bset.to_ulong();
    }
};

// TEST
struct Test {
    uint32_t n;
    uint32_t exp;
    void run() {
        Solution sol;
        uint32_t act = sol.reverseBits(n);
        cout << "Reverse bits " << bitset<32>(n) << " -> " 
             << bitset<32>(act) << endl;
        assert(act == exp);
        assert(act == sol.reverseBitsV2(n));
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {0, 0},
        {43261596, 964176192},
        {4294967293, 3221225471}
    };
    for (auto& t: tests) t.run();
    return 0;
}
