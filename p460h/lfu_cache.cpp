// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <unordered_map>
#include <list>
#include <iostream>

using namespace std;
struct Node {
    int key;
    int val;
    int freq;
    Node(int k, int v, int f)
    :key(k), val(v), freq(f) {}
};
class LFUCache {
    int capacity = 0;
    int minFreq = 0;
    unordered_map<int, list<Node>::iterator> kvMap;
    unordered_map<int, list<Node>> freqMap;
public:
    LFUCache(int capacity)
    :capacity(capacity) {
    }

    void raiseFreq(int key, int val) {
        list<Node>::iterator it = kvMap[key];
        int freq = it->freq;
        // remove from old freq
        freqMap[freq++].erase(it);
        if (freqMap[minFreq].empty()) { minFreq ++; }
        freqMap[freq].emplace_front(key, val, freq);
        kvMap[key] = freqMap[freq].begin();
    }

    int get(int key) {
        if (kvMap.find(key) == kvMap.end()) {
            return -1;
        }
        int val = kvMap[key]->val;
        raiseFreq(key, val);
        return val;
    }
    
    void put(int key, int value) {
        if (kvMap.find(key) != kvMap.end()) { // update an entry
            raiseFreq(key, value);
        } else { // create a new entry
            if (capacity == 0) { return; }
            if (kvMap.size() == capacity) { // evict if breach the cap
                kvMap.erase(freqMap[minFreq].back().key);
                freqMap[minFreq].pop_back();
            }
            minFreq = 1;
            freqMap[minFreq].emplace_front(key, value, 1);
            kvMap[key] = freqMap[minFreq].begin();
        }
    }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * LFUCache obj = new LFUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
int main(int argc, char const *argv[])
{
    LFUCache cache0(0);
    cache0.put(0, 0);
    assert(cache0.get(0) == -1);

    LFUCache cache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    assert(cache.get(1) == 1);  // returns 1
    cache.put(3, 3);            // evicts key 2
    assert(cache.get(2) == -1); // returns -1 (not found)
    assert(cache.get(3) == 3);  // returns 3.
    cache.put(4, 4);            // evicts key 1.
    assert(cache.get(1) == -1); // returns -1 (not found)
    assert(cache.get(3) == 3);  // returns 3
    assert(cache.get(4) == 4);  // returns 4
    return 0;
}
