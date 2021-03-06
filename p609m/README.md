# 609. Find Duplicate File in System (Medium)

Given a list `paths` of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

- `"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"`

It means there are `n` files `(f1.txt, f2.txt ... fn.txt)` with content `(f1_content, f2_content ... fn_content)` respectively in the directory `"root/d1/d2/.../dm"`. Note that `n >= 1` and `m >= 0`. If `m = 0`, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

- `"directory_path/file_name.txt"`

### Example 1:

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

### Example 2:

```
Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
```

### Constraints:

- 1 <= paths.length <= 2 \* 10^4
- 1 <= paths[i].length <= 3000
- 1 <= sum(paths[i].length) <= 5 \* 10^5
- paths[i] consist of English letters, digits, '/', '.', '(', ')', and ' '.
- You may assume no files or directories share the same name in the same directory.
- You may assume each given directory info represents a unique directory. A single blank space separates the directory path and file info.

## Solution

Iterate the input list and establish the hash table map content (or SHA1 hash in real file system) to the list of file paths which duplicates.

## Follow-up beyond contest:

1. Imagine you are given a real file system, how will you search files? DFS or BFS?

   I would go for BFS because in real file system you never know how deep subdir/file path can be, so that we want to avoid too many function stack push/pop and overflow risks. While BFS using extra memory, it can be dynamic allocated and even move to external file/FIFO to become scalable.

2. If the file content is very large (GB level), how will you modify your solution?

   In a real life solution we will not hash the entire file content, since it’s not practical. Instead we will first map all the files according to size. Files with different sizes are guaranteed to be different. We will than hash a small part of the files with equal sizes (using MD5 checksum). Only if the md5 is the same, we will compare the files byte by byte.

3. If you can only read the file by 1kb each time, how will you modify your solution?
   This won’t change the solution. We can create the hash from the 1kb chunks, and then read the entire file if a full byte by byte comparison is required.

4. What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?
   Time complexity is O(n^2 \* k) since in worse case we might need to compare every file to all others. k is the file size

5. How to make sure the duplicated files you find are not false positive?
   We will use several filters to compare: File size, Hash and byte by byte comparisons.

#DBX

#Hash Table #String
