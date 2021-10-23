class LoggerV1:
    def __init__(self):
        self.msg_logged = dict()

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        should_print = timestamp - self.msg_logged.get(message, -10) >= 10
        if should_print:
            self.msg_logged[message] = timestamp
        return should_print


class LoggerV2:
    def __init__(self):
        self.map10, self.map20 = dict(), dict()
        self.map10_createtime = -10

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if timestamp - self.map10_createtime >= 20:
            self.map10, self.map20 = dict(), dict()
            self.map10_createtime = timestamp
        elif timestamp - self.map10_createtime >= 10:
            self.map20, self.map10 = self.map10, dict()
            self.map10_createtime = timestamp

        if message in self.map10:
            return False
        if message in self.map20 and timestamp - self.map20[message] < 10:
            return False
        self.map10[message] = timestamp
        return True


# Your Logger object will be instantiated and called as such:
# obj = Logger()
# param_1 = obj.shouldPrintMessage(timestamp,message)
logger = LoggerV2()
for timestamp, message, expected in [
    [1, "foo", True],
    [2, "bar", True],
    [3, "foo", False],
    [8, "bar", False],
    [10, "foo", False],
    [11, "foo", True],
]:
    actual = logger.shouldPrintMessage(timestamp, message)
    print("Should print", timestamp, message, "->", actual)
    assert actual == expected
