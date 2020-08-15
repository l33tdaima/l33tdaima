from os.path import commonprefix


class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.chs = characters
        self.len = combinationLength
        self.state = ""

    def next(self) -> str:
        if self.state == "":
            self.state = self.chs[: self.len]
        else:
            end = len(commonprefix([self.chs[::-1], self.state[::-1]]))
            place = self.chs.index(self.state[-end - 1])
            self.state = self.state[: -end - 1] + self.chs[place + 1 : place + 2 + end]
        return self.state

    def hasNext(self) -> bool:
        return self.state != self.chs[-self.len :]


# Your CombinationIterator object will be instantiated and called as such:
obj = CombinationIterator("abc", 2)
assert obj.next() == "ab"
assert obj.hasNext() == True
assert obj.next() == "ac"
assert obj.hasNext() == True
assert obj.next() == "bc"
assert obj.hasNext() == False
