// Build program by
// g++ -std=c++11 *.cpp -o test && ./test && rm test

#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <iostream>
#include <ctime>
#include <cstdlib>

using namespace std;
class RandomizedCollection {
    vector<int> d_valArray;
    unordered_map<int, unordered_set<int> > d_valPosMap;
public:
    /** Initialize your data structure here. */
    RandomizedCollection() {
       srand(time(nullptr));
    }
    
    /** Inserts a value to the collection. Returns true if the collection did not already contain the specified element. */
    bool insert(int val) {
        bool notFound = (d_valPosMap.find(val) == d_valPosMap.end());
        d_valPosMap[val].insert(d_valArray.size());
        d_valArray.push_back(val);
        return notFound;
    }
    
    /** Removes a value from the collection. Returns true if the collection contained the specified element. */
    bool remove(int val) {
        if (d_valPosMap.find(val) == d_valPosMap.end()) {
            return false;
        }
        int posToDel = *(d_valPosMap[val].begin());
        // remove from map
        d_valPosMap[val].erase(posToDel);
        if (d_valPosMap[val].empty()) {
            d_valPosMap.erase(val);
        }
        // swap with the last
        if (posToDel < d_valArray.size() - 1) {
            int valToSwap = d_valArray.back();
            d_valArray[posToDel] = valToSwap;
            d_valPosMap[valToSwap].erase(d_valArray.size() - 1);
            d_valPosMap[valToSwap].insert(posToDel);
        }
        // remove from array
        d_valArray.pop_back();
        return true;
    }
    
    /** Get a random element from the collection. */
    int getRandom() {
        return d_valArray[rand() % d_valArray.size()]; // will throw for empty collection
    }
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * bool param_1 = obj.insert(val);
 * bool param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
int main(int argc, char* argv[]) {
    RandomizedCollection collection;
    cout << "collection.insert(1) -> " << boolalpha << collection.insert(1) << endl;
    cout << "collection.insert(1) -> " << collection.insert(1) << endl;
    cout << "collection.insert(2) -> " << collection.insert(2) << endl;
    cout << "collection.insert(1) -> " << collection.insert(1) << endl;
    cout << "collection.insert(2) -> " << collection.insert(2) << endl;
    cout << "collection.insert(2) -> " << collection.insert(2) << endl;
    cout << "collection.remove(1) -> " << collection.remove(1) << endl;
    cout << "collection.remove(2) -> " << collection.remove(2) << endl;
    cout << "collection.remove(2) -> " << collection.remove(2) << endl;
    cout << "collection.remove(2) -> " << collection.remove(2) << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    cout << "collection.getRandom() -> " << collection.getRandom() << endl;
    return 0;
}