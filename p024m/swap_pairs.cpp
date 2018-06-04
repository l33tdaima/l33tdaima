// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <iostream>

using namespace std;

/**
 * Definition for singly-linked list.
 */
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* swapPairsSimple(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        // Do the first two figuring out the new head
        ListNode* one = head; 
        ListNode* two = head->next;
        ListNode* newhead = two;
        one->next = two->next;
        two->next = one;
        ListNode* p = one; // iterator pointer
        // Do the rest
        while (p->next != nullptr && p->next->next != nullptr) {
            one = p->next;
            two = p->next->next;
            one->next = two->next;
            two->next = one;
            p->next = two;
            p = p->next->next;
        }
        return newhead;
    }
    ListNode* swapPairsOpt(ListNode* head) {
        ListNode **pp = &head, *a, *b;
        while ((a = *pp) && (b = a->next)) {
            a->next = b->next;
            b->next = a;
            // modify head to point to the second node in the first iteration
            // after that pp is the address of .next member, which will point to b after swap
            *pp = b; 
            pp = &(a->next); 
        }
        return head;
    }
};
// TEST
struct Test {
    vector<int> fromArray;
    void run() {
        ListNode* dummy = new ListNode(0);
        ListNode* p = dummy;
        cout << "Swap pairs [";
        for (int x: fromArray) {
            cout << x << ",";
            p->next = new ListNode(x);
            p = p->next;
        }
        cout << "] -> [";
        Solution sol;
        p = sol.swapPairsOpt(dummy->next);
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
        {{}},
        {{1}},
        {{1,2}},
        {{1,2,3}},
        {{1,2,3,4,5,6,7}},
        {{1,2,3,4,5,6,7,8}},
    };
    for (auto& t: tests) {
        t.run();
    }
    return 0;
}