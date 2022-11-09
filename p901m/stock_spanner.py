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
ss = StockSpanner()
for price, expected in [
    (100, 1),
    (80, 1),
    (60, 1),
    (70, 2),
    (60, 1),
    (75, 4),
    (85, 6),
]:
    actual = ss.next(price)
    print("Span of price", price, "->", actual)
    assert actual == expected
