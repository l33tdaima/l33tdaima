class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        for token in path.split("/"):
            if token == "." or token == "":
                continue
            elif token == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(token)
        return "/" + "/".join(stack)


# TESTS
for path, expected in [
    ("", "/"),
    ("/", "/"),
    ("/a/b", "/a/b"),
    ("/home/", "/home"),
    ("/../", "/"),
    ("/home//foo/", "/home/foo"),
    ("/a/./b/../../c/", "/c"),
]:
    sol = Solution()
    actual = sol.simplifyPath(path)
    print("Simplified canonical path of", path, "->", actual)
    assert actual == expected
