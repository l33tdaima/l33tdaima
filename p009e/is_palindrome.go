package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 || (x != 0 && x%10 == 0) {
		return false
	}
	left := x
	reverse := 0
	for reverse < left {
		reverse = reverse*10 + left%10
		left = left / 10
	}
	return left == reverse || left == reverse/10
}

type Test struct {
	input    int
	expected bool
}

func main() {
	tests := []Test{
		{
			input:    -3489,
			expected: false,
		},
		{
			input:    12345,
			expected: false,
		},
		{
			input:    12321,
			expected: true,
		},
		{
			input:    7887,
			expected: true,
		},
		{
			input:    55555,
			expected: true,
		},
		{
			input:    12210,
			expected: false,
		},
		{
			input:    200,
			expected: false,
		},
		{
			input:    10,
			expected: false,
		},
		{
			input:    6,
			expected: true,
		},
		{
			input:    0,
			expected: true,
		},
	}
	for _, t := range tests {
		act := isPalindrome(t.input)
		fmt.Printf("Is %v a palindrome -> %v, %v\n", t.input, act, t.expected == act)
	}
}
