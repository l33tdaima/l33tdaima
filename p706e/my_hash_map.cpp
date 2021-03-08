// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <cassert>
#include <iostream>
#include <list>
#include <utility>
#include <vector>

using namespace std;

class HashNode {
    list<pair<int, int>> m_list;

public:
    void put(int key, int val)
    {
        for (auto& it : m_list) {
            if (key == it.first) {
                it.second = val;
                return;
            }
        }
        m_list.push_front(make_pair(key, val));
    }
    int get(int key)
    {
        for (const auto& it : m_list) {
            if (key == it.first) {
                return it.second;
            }
        }
        return -1;
    }
    void remove(int key)
    {
        m_list.remove_if([=](pair<int, int>& elem) -> bool {
            return elem.first == key;
        });
    }
};

class MyHashMap {
    enum {
        MAXKEY = 1000000,
        MAXCAP = 10000
    };
    vector<HashNode> hashTable;
    int hash(int key)
    {
        return key / (MAXKEY / MAXCAP);
    }

public:
    /** Initialize your data structure here. */
    MyHashMap()
        : hashTable(MAXCAP)
    {
    }

    /** value will always be non-negative. */
    void put(int key, int value)
    {
        // assert(key <= MAXKEY && key >= 0);
        hashTable[hash(key)].put(key, value);
    }

    /** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
    int get(int key)
    {
        // assert(key <= MAXKEY && key >= 0);
        return hashTable[hash(key)].get(key);
    }

    /** Removes the mapping of the specified value key if this map contains a mapping for the key */
    void remove(int key)
    {
        // assert(key <= MAXKEY && key >= 0);
        hashTable[hash(key)].remove(key);
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */
int main(int argc, char const* argv[])
{
    MyHashMap hashMap;
    hashMap.put(1, 1);
    hashMap.put(2, 2);
    assert(1 == hashMap.get(1)); // returns 1
    assert(-1 == hashMap.get(3)); // returns -1 (not found)
    hashMap.put(2, 1); // update the existing value
    assert(1 == hashMap.get(2)); // returns 1
    hashMap.remove(2); // remove the mapping for 2
    assert(-1 == hashMap.get(2)); // returns -1 (not found)
    return 0;
}
