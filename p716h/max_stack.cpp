// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <list>
#include <vector>
#include <map>
#include <iostream>

using namespace std;

class MaxStack {
    list<int> stack;
    map<int, vector<list<int>::iterator>> bst;
public:
    /** initialize your data structure here. */
    MaxStack() {}
    
    void push(int x) {
        stack.push_front(x);
        bst[x].push_back(stack.begin());
    }
    
    int pop() {
        int v = stack.front();
        bst[v].pop_back();
        if (bst[v].empty()) { bst.erase(v); }
        stack.pop_front();
        return v;
    }
    
    int top() {
        return stack.front();
    }
    
    int peekMax() {
        return bst.rbegin()->first;
    }
    
    int popMax() {
        auto it = bst.rbegin();
        int v = it->first;
        stack.erase(it->second.back());
        it->second.pop_back();
        if (it->second.empty()) { bst.erase(v); }
        return v;
    }
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
 */
int main(int argc, char const *argv[])
{
    MaxStack stack;
    stack.push(5); 
    stack.push(1);
    stack.push(5);
    assert(stack.top() == 5);
    assert(stack.popMax() == 5);
    assert(stack.top() == 1);
    assert(stack.peekMax() == 5);
    assert(stack.pop() == 1);
    assert(stack.top() == 5);
    return 0;
}
