// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;
/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode** pp = &head;
        while (*pp) {
            if ((*pp)->val == val) { // remove
                ListNode* del = *pp;
                *pp = (*pp)->next;
                delete del;
            } else {
                pp = &((*pp)->next);
            }
        }
        return head;
    }
};
int main(int argc, char const *argv[])
{
    vector<int> testVals = {6,1,2,3,6,4,5,6};
    ListNode* dummy = new ListNode(0);
    ListNode* p = dummy;
    for (int v: testVals) {
        p->next = new ListNode(v);
        p = p->next;
    }

    Solution sol;
    ListNode* after = sol.removeElements(dummy->next, 6);

    cout << "After removal: ";
    p = after;
    while (p != nullptr) {
        cout << p->val << "->";
        p = p->next;
    }
    cout << endl;
    return 0;
}
