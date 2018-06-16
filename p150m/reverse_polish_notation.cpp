// g++ -std=c++11 *.cpp -o test && ./test && rm test
#include <vector>
#include <stack>
#include <string>
#include <functional>
#include <sstream>
#include <iostream>

using namespace std;

class Token {
  public:
    virtual ~Token() {}
    virtual void process(stack<int>& stack) = 0;
};
class Operand: public Token {
    int val;
  public:
    Operand() = delete;
    Operand(int v):val(v) {}
    virtual void process(stack<int>& stack) {
        stack.push(val);
    }
};
class BinaryOperator: public Token {
    function<int(int,int)> opfun;
  public:
    BinaryOperator(function<int(int,int)> lambda)
    :opfun(lambda) {}

    virtual void process(stack<int>& stack) {
        int rhs = stack.top();
        stack.pop();
        int lhs = stack.top();
        stack.pop();
        stack.push(opfun(lhs, rhs));
    }
};
class TokenFactory {
  public:
    static Token* createToken(const string& s) {
        if (s == "+") {
            return new BinaryOperator([](int a, int b) { return a + b; });
        } else if (s == "-") {
            return new BinaryOperator([](int a, int b) { return a - b; });
        } else if (s == "*") {
            return new BinaryOperator([](int a, int b) { return a * b; });
        } else if (s == "/") {
            return new BinaryOperator([](int a, int b) { return a / b; });
        } else {
            istringstream iss(s);
            int val;
            iss >> val;
            return new Operand(val);
        }
    }
};

// Solution = RPNCalculator
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> stack;
        for (auto& s: tokens) {
            Token* token = TokenFactory::createToken(s);
            token->process(stack);
            delete token;
        }
        return stack.top();
    }
};
// TEST
int main(int argc, char const *argv[])
{
    vector<vector<string>> tests = {
        {"2", "1", "+"},
        {"2", "1", "+", "3", "*"},
        {"4", "13", "5", "/", "+"},
        {"10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"},
    };
    Solution sol;
    for (auto& t: tests) {
        cout << "Eval RPN -> " << sol.evalRPN(t) << endl;
    }
    return 0;
}
