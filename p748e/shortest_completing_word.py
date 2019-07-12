from typing import List
from collections import defaultdict, Counter
class Solution:
    def shortestCompletingWordV1(self, licensePlate: str, words: List[str]) -> str:
        # build the signature of licensePlate
        sig = defaultdict(int)
        for c in licensePlate.upper():
            if c.isalpha():
                sig[c] += 1
        # search for the min length word matching the signature
        ans = ''
        for word in words:
            wsig = sig.copy()
            for c in word:
                cu = c.upper()
                if cu not in wsig:
                    continue
                wsig[cu] -= 1
                if wsig[cu] == 0:
                    del wsig[cu]
                if len(wsig) == 0 and (len(word) < len(ans) or ans == ''):
                    ans = word
                    break
        return ans
    def shortestCompletingWordV2(self, licensePlate: str, words: List[str]) -> str:
        """
        In first line, just filter out all none letters from the plate and make sure all letters are lower case.
        In second line, produce Counter of each words and use Counter operater & (intersection) to extract the count of shared letters between the word and the plate.
        If all the counts are equal, this returns true. Then, just extract the word that satisfies this condition and has the shortest length.
        This is slower than V1 though
        """
        pc = Counter(filter(lambda x : x.isalpha(), licensePlate.lower()))
        return min([w for w in words if Counter(w) & pc == pc], key=len)

# TESTS
tests = [
    {
        'licensePlate': "1s3 PSt",
        'words': ["step", "steps", "stripe", "stepple"],
        'expected': "steps"
    },
    { 
        'licensePlate': "1s3 456",
        'words': ["looks", "pest", "stew", "show"],
        'expected': "pest"
    },
    { 
        'licensePlate': "AN87005",
        'words': ["participant","individual","start","exist","above","already","easy","attack","player","important"],
        'expected': "important"
    }
]
for t in tests:
    sol = Solution()
    actual = sol.shortestCompletingWordV2(t['licensePlate'], t['words'])
    print('Shorted completing word matching', t['licensePlate'], 'in', t['words'], '->', actual)
    assert(actual == t['expected'])
    assert(t['expected'] == sol.shortestCompletingWordV2(t['licensePlate'], t['words']))
