# 173. Binary Search Tree Iterator (Medium)

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

### Note:
next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

## Solution
### Approach without memory limitation
We can simply push values during initialization from larger to small to stack like
```JS
    var init = function (root, stack) {
        if (root === null) { return; }
        init(root.right, stack);
        stack.push(root.val);
        init(root.left, stack);
    };
    this.smallerValStack = new Array();
    init(root, this.smallerValStack);
```
then pop the values.

### Approach with memory limitation
- constructor(): Push nodes to stack by walking left only, which will lead smallest at the top of stack
- hasNext(): Just check stack
- next():
  - Pop the top of stack which is the return;
  - Prepare for the next smallest by push the leftmost of right node if there is any.

#FB #GOOGL #MSFT #LNKD

#Tree #Stack
