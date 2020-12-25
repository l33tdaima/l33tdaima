// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <iostream>
#include <vector>

using namespace std;

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x)
        : val(x)
        , next(NULL)
    {
    }
};
class Solution {
public:
    ListNode* swapPairs(ListNode* head)
    {
        ListNode **pp = &head, *a, *b;
        while ((a = *pp) && (b = a->next)) {
            // go from *pp == a -> b -> (b->next) to *pp == b -> a -> (b->next)
            a->next = b->next;
            b->next = a;
            *pp = b; // pp holds the prev pointer
            // moves pp to the next pair
            pp = &(a->next);
        }
        return head;
    }
};
// TEST
struct Test {
    vector<int> fromArray;
    void run()
    {
        ListNode* dummy = new ListNode(0);
        ListNode* p = dummy;
        cout << "Swap pairs [";
        for (int x : fromArray) {
            cout << x << ",";
            p->next = new ListNode(x);
            p = p->next;
        }
        cout << "] -> [";
        Solution sol;
        p = sol.swapPairs(dummy->next);
        while (p != nullptr) {
            ListNode* d = p;
            cout << p->val << ",";
            p = p->next;
            delete d;
        }
        cout << "]" << endl;
        delete dummy;
    }
};

int main()
{
    vector<Test> tests = {
        { {} },
        { { 1 } },
        { { 1, 2 } },
        { { 1, 2, 3 } },
        { { 1, 2, 3, 4, 5, 6, 7 } },
        { { 1, 2, 3, 4, 5, 6, 7, 8 } },
    };
    for (auto& t : tests)
        t.run();
    return 0;
}
