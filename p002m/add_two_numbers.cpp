/**
 * Definition for singly-linked list.
 */
#include <cstdlib>
#include <iostream>
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x)
        : val(x)
        , next(NULL)
    {
    }
};

using namespace std;

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2)
    {
        ListNode sentinel(0);
        ListNode* p = &sentinel;
        div_t sum = { 0, 0 };
        while (sum.quot > 0 || l1 || l2) {
            if (l1) {
                sum.quot += l1->val;
                l1 = l1->next;
            }
            if (l2) {
                sum.quot += l2->val;
                l2 = l2->next;
            }
            sum = div(sum.quot, 10);
            p->next = new ListNode(sum.rem);
            p = p->next;
        }
        return sentinel.next;
    }
};
