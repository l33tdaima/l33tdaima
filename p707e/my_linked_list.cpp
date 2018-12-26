// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <iostream>

using namespace std;

class MyLinkedList {
    struct Node {
        Node* prev;
        Node* next;
        int val;
        Node(Node* p, Node* n, int v)
        : prev(p), next(n), val(v) {
        }
    };
    Node* head;
    Node* tail;
public:
    /** Initialize your data structure here. */
    MyLinkedList():
    head(new Node(nullptr, nullptr, INT_MIN)),
    tail(new Node(nullptr, nullptr, INT_MAX)) {
        head->next = tail;
        tail->prev = head;
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    int get(int index) {
        Node* p = head;
        for (int i = 0; i <= index; ++i) {
            if (p->next == tail) return -1;
            p = p->next;
        }
        return p->val;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    void addAtHead(int val) {
        Node* newnode = new Node(head, head->next, val);
        head->next->prev = newnode;
        head->next = newnode;
    }
    
    /** Append a node of value val to the last element of the linked list. */
    void addAtTail(int val) {
        Node* newnode = new Node(tail->prev, tail, val);
        tail->prev->next = newnode;
        tail->prev = newnode;
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    void addAtIndex(int index, int val) {
        Node* p = head;
        for (int i = 0; i <= index; ++i) {
            if (p->next == tail && i < index) return;
            p = p->next;
        }
        Node* newnode = new Node(p->prev, p, val);
        p->prev->next = newnode;
        p->prev = newnode;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    void deleteAtIndex(int index) {
        Node* p = head;
        for (int i = 0; i <= index; ++i) {
            if (p->next == tail) return;
            p = p->next;
        }
        p->prev->next = p->next;
        p->next->prev = p->prev;
        delete p;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
int main(int argc, char const *argv[])
{
    MyLinkedList list;
    list.addAtHead(1);
    list.addAtTail(3);
    list.addAtIndex(1, 2);
    assert(list.get(1) == 2);
    list.deleteAtIndex(1);
    assert(list.get(1) == 3);
    return 0;
}
