# 157. Read N Characters Given Read4 (Easy)

The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function will only be called once for each test case.

## Solution
The key here is to understand buf and buf4 both are output to store the data read from read4() API, not input. I simulated it by reading from a global array. Also note they are array of string/char, not string which is immutable.

#FB

#String

#Similar questions [#157e](../p157e/README.md) [#158h](../p158h/README.md)
