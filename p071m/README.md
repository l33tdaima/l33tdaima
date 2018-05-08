# 71. Simplify Path (Medium)

Given an absolute path for a file (Unix-style), simplify it.

For example,
```
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
```

### Corner Cases:
- Did you consider the case where path = "/../"?
In this case, you should return "/".
- Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
In this case, you should ignore redundant slashes and return "/home/foo".

## Solution
### Clarification
- Any other special character like *, \ etc.?
- Do we need to check invalid input like ... or ....?

### Algorithm
- Split the input string by /
- Scan the array for the following cases
  - regular directory name: push stack
  - empty string coming from //: no op
  - .: no op
  - ..: pop stack if not empty
- Output from stack

#FB #MSFT

#String #Stack
