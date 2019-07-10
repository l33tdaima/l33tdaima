class StringIterator:
    def __init__(self, compressedString: str):
        self.s = compressedString
        self.letter = ' ';
        self.count = 0;
        self.inext = 0;

    def next(self) -> str:
        if not self.hasNext():
            return ' '
        if self.count == 0:
            self.letter = self.s[self.inext] if self.inext < len(self.s) else ' '
            self.inext += 1
            while self.inext < len(self.s) and self.s[self.inext].isdigit():
                self.count = self.count * 10 + int(self.s[self.inext])
                self.inext += 1
        self.count -= 1
        return self.letter

    def hasNext(self) -> bool:
        return self.count > 0 or self.inext < len(self.s)

# Your StringIterator object will be instantiated and called as such:
# obj = StringIterator(compressedString)
# param_1 = obj.next()
# param_2 = obj.hasNext()
tests = [
    '',
    'L2',
    'L1e2t1C1o1d1e1'
]
for t in tests:
    it = StringIterator(t)
    print('Decompress \"' + t + '\" ->', end = ' ')
    while it.hasNext():
        print(it.next(), end = "")
    print()
