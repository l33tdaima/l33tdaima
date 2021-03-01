from collections import defaultdict


class FreqStack:
    def __init__(self):
        self.freq = defaultdict(int)  # faster than Counter
        self.freqstack = defaultdict(list)  # the stack for a given freq
        self.maxfreq = 0  # keep track of the max freq so far

    def push(self, x: int) -> None:
        freq, freqstack = self.freq, self.freqstack
        freq[x] += 1
        self.maxfreq = max(self.maxfreq, freq[x])
        freqstack[freq[x]].append(x)

    def pop(self) -> int:
        freq, freqstack, maxfreq = self.freq, self.freqstack, self.maxfreq
        x = freqstack[maxfreq].pop()
        if not freqstack[maxfreq]:
            self.maxfreq -= 1
        freq[x] -= 1
        return x


# Your FreqStack object will be instantiated and called as such:
fs = FreqStack()
for x in [5, 7, 5, 7, 4, 5]:
    fs.push(x)
assert fs.pop() == 5
assert fs.pop() == 7
assert fs.pop() == 5
assert fs.pop() == 4
