//g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

class Solution
{
public:
    int poorPigs(int buckets, int minutesToDie, int minutesToTest)
    {
        int pigs = 0, product = 1;
        while (product < buckets)
        {
            product *= minutesToTest / minutesToDie + 1;
            pigs++;
        }
        return pigs;
    }
};
// TESTS
struct Test
{
    int buckets;
    int minutesToDie;
    int minutesToTest;
    int expected;
    void run()
    {
        Solution sol;
        int actual = sol.poorPigs(buckets, minutesToDie, minutesToTest);
        cout << buckets << " buckets, "
             << minutesToDie << " minutes to die, "
             << minutesToTest << " minutes to test requires pigs -> "
             << actual
             << endl;
        assert(actual == expected);
    }
};

int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {4, 15, 15, 2},
        {4, 15, 60, 1},
        {25, 15, 60, 2},
        {1000, 15, 60, 5}};
    for (auto &t : tests)
        t.run();
    return 0;
}
