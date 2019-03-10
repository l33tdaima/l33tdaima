// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

// Employee info
struct Employee {
    // It's the unique ID of each node.
    // unique id of this employee
    int id;
    // the importance value of this employee
    int importance;
    // the id of direct subordinates
    vector<int> subordinates;
};

class Solution {
public:
    int getImportance(vector<Employee *> employees, int id) {
        unordered_map<int, Employee *> idMap;
        for (auto e: employees) idMap[e->id] = e;
        int ans = 0;
        function<void(int)> recDfs = [&](int id) -> void {
            if (! idMap.count(id)) return;
            ans += idMap[id]->importance;
            for (int sub: idMap[id]->subordinates) recDfs(sub);
        };
        recDfs(id);
        return ans;
    }
};
// TEST
struct Test {
    vector<Employee> employees;
    int id;
    int expected;
    void run() {
        vector<Employee *> pEmployees;
        for (Employee& e: employees) pEmployees.push_back(&e);
        Solution sol;
        int actual = sol.getImportance(pEmployees, id);
        cout << "Total importance of employee id " << id << " -> "
             << actual << endl;
        assert(actual == expected);
    }
};
int main(int argc, char* argv[]) {
    vector<Test> tests = {
        {
            {
                {1, 5, {2, 3}},
                {2, 3, {}},
                {3, 3, {}}
            },
            1, // id
            11 // expected
        }
    };
    for (auto& t: tests) t.run();
    return 0;
}
