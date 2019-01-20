// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <queue>
#include <iostream>

using namespace std;

class MyStack {
    queue<int> qimpl;
    queue<int> qbuff;
public:
    /** Initialize your data structure here. */
    MyStack() {
    }
    
    /** Push element x onto stack. */
    void push(int x) {
        qimpl.push(x);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        assert(!empty());
        int size = qimpl.size();
        for (int i = 1; i < size; ++i) {
            qbuff.push(qimpl.front());
            qimpl.pop();
        }
        int ret = qimpl.front();
        qimpl.pop(); // pop the last one which is the stack top
        qimpl.swap(qbuff);
        return ret;
    }
    
    /** Get the top element. */
    int top() {
        assert(!empty());
        return qimpl.back();
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return qimpl.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * bool param_4 = obj.empty();
 */
int main(int argc, char const *argv[])
{
    MyStack stack;
    stack.push(1);
    stack.push(2);
    assert(stack.top() == 2);
    assert(stack.pop() == 2);
    assert(stack.top() == 1);
    assert(stack.empty() == false);
    return 0;
}
