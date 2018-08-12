// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <iostream>

using namespace std;

class Vector2D {
    vector<vector<int>> d_vec2d;
    vector<vector<int>>::const_iterator d_rowIt;
    vector<int>::const_iterator d_colIt;
    void forwardToNext() {
        while (d_rowIt != d_vec2d.end() && d_colIt == d_rowIt->end()) {
            d_colIt = (++d_rowIt)->begin();
        }
    }
public:
    Vector2D(vector<vector<int>>& vec2d)
    : d_vec2d(vec2d), d_rowIt(d_vec2d.begin()) {
        if (d_rowIt != d_vec2d.end()) {
            d_colIt = d_rowIt->begin();
            forwardToNext();
        }
    }

    int next() {
        if (!hasNext()) { return INT_MAX; }
        int val = *d_colIt;
        d_colIt ++;
        forwardToNext();
        return val;
    }

    bool hasNext() {
        return d_rowIt != d_vec2d.end();
    }
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * Vector2D i(vec2d);
 * while (i.hasNext()) cout << i.next();
 */
int main(int argc, char const *argv[])
{
    vector<vector<vector<int>>> tests = {
        {},
        {{}},
        {{1}},
        {{1}, {2, 3}, {4}},
        {{1}, {}, {2, 3}, {4, 5}},
        {{}, {1}, {}, {2,3,4}, {}, {}, {5,6}},
    };
    for (auto& t: tests) {
        Vector2D v(t);
        cout << "[ ";
        while (v.hasNext()) {
            cout << v.next() << ",";
        }
        cout << "]" << endl;
    }
    return 0;
}
