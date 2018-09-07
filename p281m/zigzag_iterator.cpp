// g++ -std=c++11 *.cpp -o test && ./test && rm -f test

#include <vector>
#include <queue>
#include <utility>
#include <iostream>

using namespace std;

class ZigzagIteratorV1 {
    vector<int> d_v1;
    vector<int> d_v2;
    vector<int>::const_iterator d_p1;
    vector<int>::const_iterator d_p2;
    int d_count;
public:
    ZigzagIteratorV1(vector<int>& v1, vector<int>& v2)
    :d_v1(v1), d_v2(v2), d_p1(d_v1.begin()), d_p2(d_v2.begin()), d_count(0) {
    }

    int next() {
        if (d_p1 == d_v1.end()) {
            return *(d_p2++);
        } else if (d_p2 == d_v2.end()) {
            return *(d_p1++);
        } else {
            return (d_count++ % 2) ? *(d_p2++) : *(d_p1++);
        }
    }

    bool hasNext() {
        return d_p1 != d_v1.end() || d_p2 != d_v2.end();
    }
};
class ZigzagIteratorV2 {
    queue<pair<vector<int>::const_iterator, vector<int>::const_iterator>> d_queue;
public:
    ZigzagIteratorV2(vector<int>& v1, vector<int>& v2) {
        if (v1.size() != 0)
            d_queue.push(make_pair(v1.begin(), v1.end()));
        if (v2.size() != 0)
            d_queue.push(make_pair(v2.begin(), v2.end()));
    }

    int next() {
        auto it = d_queue.front().first;
        auto end= d_queue.front().second;
        d_queue.pop();
        if (it + 1 != end)
            d_queue.push(make_pair(it + 1, end));
        return *it;
    }

    bool hasNext() {
        return !d_queue.empty();
    }
};
/**
 * Your ZigzagIterator object will be instantiated and called as such:
 * ZigzagIterator i(v1, v2);
 * while (i.hasNext()) cout << i.next();
 */
struct Test {
    vector<int> v1;
    vector<int> v2;
    void run() {
        ZigzagIteratorV2 i(v1, v2);
        while (i.hasNext()) cout << i.next() << " ";
        cout << endl;
    }
};
int main(int argc, char const *argv[])
{
    vector<Test> tests = {
        {
            {},
            {1,2,3,4,5,6},
        },
        {
            {1,2,3,4,5,6},
            {},
        },
        {
            {1,3},
            {2,4,5,6},
        },
    };
    for (auto& t: tests) t.run();
    return 0;
}
