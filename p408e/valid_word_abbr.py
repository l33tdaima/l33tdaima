class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        count, iword = 0, -1
        for a in abbr:
            if a.isdigit():
                if a == '0' and count == 0: # check the case abbr has 01
                    return False
                count = count * 10 + (ord(a) - ord('0'))
            else:
                iword += count + 1
                count = 0
                if iword >= len(word) or word[iword] != a:
                    return False
        iword += count + 1
        return iword == len(word)
# TESTS
tests = [
  {
    'word': 'a',
    'abbr': '01',
    'expected': False
  },
  {
    'word': 'internationalization',
    'abbr': 'i12iz4n',
    'expected': True
  },
  {
    'word': 'internationalization',
    'abbr': 'i18n',
    'expected': True
  },
  {
    'word': 'internationalization',
    'abbr': 'i19',
    'expected': True
  },
  {
    'word': 'apple',
    'abbr': 'a2e',
    'expected': False
  },
  {
    'word': 'apple',
    'abbr': '5',
    'expected': True
  }
]
for t in tests:
    sol = Solution()
    actual = sol.validWordAbbreviation(t['word'], t['abbr'])
    print('Is', t['abbr'], 'a valid abbreviation of', t['word'], '->', actual);
    assert(actual == t['expected']);
