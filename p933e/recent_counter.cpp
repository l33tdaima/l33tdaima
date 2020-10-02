// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <queue>
#include <iostream>
#include <cassert>

using namespace std;

class RecentCounter {
    queue<int> calls;
public:
    RecentCounter():
    calls() { }
    
    int ping(int t) {
        calls.push(t);
        while (!calls.empty() && t - calls.front() > 3000) {
            calls.pop();
        }
        return calls.size();
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */
int main(int argc, char* argv[]) {
    RecentCounter obj;
    assert(obj.ping(1) == 1);
    assert(obj.ping(100) == 2);
    assert(obj.ping(3001) == 3);
    assert(obj.ping(3002) == 3);
    return 0;
}
