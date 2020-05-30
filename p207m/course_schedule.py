from typing import List


class Solution:
    def canFinish(
        self, numCourses: int, prerequisites: List[List[int]]
    ) -> bool:
        indegree = [0] * numCourses
        graph = [[] for _ in range(numCourses)]
        for j, i in prerequisites:
            graph[i].append(j)
            indegree[j] += 1
        queue = [i for i in range(numCourses) if indegree[i] == 0]
        for i in queue:
            for j in graph[i]:
                indegree[j] -= 1
                if indegree[j] == 0:
                    queue.append(j)
        return len(queue) == numCourses


tests = [
    [1, [], True],
    [2, [[0, 1]], True],
    [2, [[0, 1], [1, 0],], False,],
    [4, [[0, 1], [1, 2], [3, 1],], True,],
    [4, [[0, 1], [1, 2], [2, 0], [3, 1],], False,],
]
for t in tests:
    sol = Solution()
    actual = sol.canFinish(t[0], t[1])
    print("Can finish", t[0], "courses depicted by", t[1], "->", actual)
    assert actual == t[2]
