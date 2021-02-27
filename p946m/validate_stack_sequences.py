from typing import List


class Solution:
    def validateStackSequencesV1(self, pushed: List[int], popped: List[int]) -> bool:
        stack, i, j, n = [], 0, 0, len(pushed)
        while j < n:
            if len(stack) == 0 or stack[-1] != popped[j]:
                if i == n:
                    return False
                stack.append(pushed[i])
                i += 1
            else:
                stack.pop()
                j += 1
        return len(stack) == 0

    def validateStackSequencesV2(self, pushed: List[int], popped: List[int]) -> bool:
        stack, j = [], 0
        for v in pushed:
            stack.append(v)
            while len(stack) > 0 and stack[-1] == popped[j]:
                stack.pop()
                j += 1
        return len(stack) == 0


# TESTS
for pushed, popped, expected in [
    ([1, 2, 3, 4, 5], [4, 5, 3, 2, 1], True),
    ([1, 2, 3, 4, 5], [4, 3, 5, 1, 2], False),
    ([], [], True),
]:
    sol = Solution()
    actual = sol.validateStackSequencesV1(pushed, popped)
    print("Are", pushed, popped, "validate stack sequences ->", actual)
    assert actual == expected
    assert expected == sol.validateStackSequencesV2(pushed, popped)
