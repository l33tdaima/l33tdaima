// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;
class Logger {
    unordered_map<string, int> map;
    const int threshold = 10;

public:
    /** Initialize your data structure here. */
    Logger()
        : map()
    {
    }

    /** Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. */
    bool shouldPrintMessage(int timestamp, string message)
    {
        if (timestamp < map[message]) {
            return false;
        }
        map[message] = timestamp + threshold;
        return true;
    }
};
struct Test {
    int timestamp;
    string message;
    bool expected;
};
/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = new Logger();
 * bool param_1 = obj.shouldPrintMessage(timestamp,message);
 */
int main(int argc, char const* argv[])
{
    Logger logger;
    vector<Test> tests = {
        { 1, "foo", true },
        { 2, "bar", true },
        { 3, "foo", false },
        { 8, "bar", false },
        { 10, "foo", false },
        { 11, "foo", true },
    };
    for (auto& t : tests) {
        cout << t.timestamp << ":" << t.message << ", test passed: " << boolalpha
             << (t.expected == logger.shouldPrintMessage(t.timestamp, t.message)) << endl;
    }
    return 0;
}
