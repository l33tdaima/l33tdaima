class StockSpanner:
    def __init__(self):
        self.stack = []

    def next(self, price: int) -> int:
        sum_count = 1
        while self.stack and self.stack[-1][0] <= price:
            sum_count += self.stack.pop()[1]
        self.stack.append((price, sum_count))
        return sum_count


# Your StockSpanner object will be instantiated and called as such:
obj = StockSpanner()
tests = [(100, 1), (80, 1), (60, 1), (70, 2), (60, 1), (75, 4), (85, 6)]
for t in tests:
    actual = obj.next(t[0])
    print("Span of price", t[0], "->", actual)
    assert actual == t[1]
