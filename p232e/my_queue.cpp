// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <stack>

using namespace std;

class MyQueue {
    stack<int> in;
    stack<int> out;

    void transfer()
    {
        while (!in.empty()) {
            out.push(in.top());
            in.pop();
        }
    }

public:
    /** Initialize your data structure here. */
    MyQueue()
        : in()
        , out()
    {
    }

    /** Push element x to the back of queue. */
    void push(int x)
    {
        in.push(x);
    }

    /** Removes the element from in front of queue and returns that element. */
    int pop()
    {
        if (out.empty()) {
            transfer();
        }
        int ret = out.top();
        out.pop();
        return ret;
    }

    /** Get the front element. */
    int peek()
    {
        if (out.empty()) {
            transfer();
        }
        return out.top();
    }

    /** Returns whether the queue is empty. */
    bool empty()
    {
        return in.empty() && out.empty();
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * bool param_4 = obj.empty();
 */
int main(int argc, char const* argv[])
{
    MyQueue queue;
    queue.push(1);
    queue.push(2);
    assert(queue.peek() == 1);
    assert(queue.pop() == 1);
    assert(queue.empty() == false);
    return 0;
}
