// g++ -std=c++11 *.cpp -o test && ./test && rm -f test
#include <vector>
#include <string>
#include <sstream>
#include <iostream>

using namespace std;

// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(Node* root) {
        string data = "";
        function<void(Node*)> recHelper = [&](Node* node) -> void {
            if (!node) return;
            data += " " + to_string(node->val)
                  + " " + to_string(node->children.size());
            for (auto child: node->children) {
                recHelper(child);
            }
        };
        recHelper(root);
        return data;
    }

    // Decodes your encoded data to tree.
    Node* deserialize(string data) {
        stringstream ss(data);
        function<Node*(stringstream&)> recHelper = [&](stringstream& ss) -> Node* {
            int val, size;
            if (ss >> val >> size) {
                vector<Node*> children;
                for (int i = 0; i < size; ++i) {
                    children.push_back(recHelper(ss));
                }
                return new Node(val, children);
            } else {
                return nullptr;
            }
        };
        return recHelper(ss);
    }
};

// Your Codec object will be instantiated and called as such:
// Codec codec;
// codec.deserialize(codec.serialize(root));
int main(int argc, char* argv[]) {
    vector<string> tests = {
        "",
        " 1 0",
        " 1 1 2 0",
        " 1 2 2 0 3 0",
        " 1 3 2 0 3 0 4 0",
        " 1 10 2 0 3 0 4 0 5 0 6 0 7 0 8 0 9 0 10 0 11 0",
        " 1 1 2 1 3 0",
        " 1 3 3 2 5 0 6 0 2 0 4 0"
    };
    Codec codec;
    for (auto& t: tests) {
        Node* tree = codec.deserialize(t);
        cout << "Deserialize/Serialize " << t << " -> "
             << boolalpha << (codec.serialize(tree) == t) << endl;
    }
    return 0;
}
