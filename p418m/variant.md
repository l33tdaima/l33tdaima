# Sentence Screen Biggest Font Fitting

已知screen的高和宽，给你最小和最大的fontSize，要求给定一个string，将string用尽可能大的 fontSize显示在screen里。字符串如果是句子的话，单词不能被截断，要分配到下一行。

已知两个API getHeight(int fontSize), getWidth(char c, int fontSize)，可以得到每个character在不同fontSize下的高和宽。

## Solution
和面试官交流后，确认string可以拆分成几行显示在screen中，先提出暴力解法，然后用二分法优化。

可以将屏幕按照font的宽高换算成有多少rows * cols，然后用418. Sentence Screen Fitting的思路判断是否能装下一个字符串或者句子。
上面这个作为binary search的条件，最终锁定满足条件的最大字体。(应该是返回right index)

``` java
public int getLargestFont(String s, int height, int width , int smallestFontSize, int biggestFontSize) {
    int left = smallestFontSize; int right = biggestFontSize;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (!canFit(s, height, width, mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return right;
}
/**
 * Decide if can fit a whole string, a char cannot be split into two lines.
 */
private boolean canFit(String s, int height, int width, int font) {
    int rows = height / getHeight(font);
    int len = s.length();
    int i = 0;
    for (int row = 0; row < rows && i < len; ++row) {
        int w = 0;
        // fit as much chars as possible in current row
        while (i < len && w + getWidth(s.charAt(i), font) <= width) {
            w += getWidth(s.charAt(i), font);
            ++i;
        }
    }
    return i >= len;
}
```

#GOOGL
#GOOGL.MJ

#Binary Search