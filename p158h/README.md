# 158. Read N Characters Given Read4 II - Call multiple times (Hard)

The API: int read4(char *buf) reads 4 characters at a time from a file.

The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.

Note:
The read function may be called multiple times.

## Solution
The difference with the previous question [#157e](../p157e/README.md),
- Call once: Assume you are always going to read from the start of the file/bufer.
- Call multiple times: Start reading from where you left off. This means that you have to store the last place (ptr) where you stopped and store the read but uncopied bytes to the buffer.

#GOOGL #FB #BBG

#String

#Similar questions [#157e](../p157e/README.md) [#158h](../p158h/README.md)
