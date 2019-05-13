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
		{-3489, false},
		{12345, false},
		{12321, true},
		{7887, true},
		{55555, true},
		{12210, false},
		{200, false},
		{10, false},
		{6, true},
		{0, true},
	}
	for _, t := range tests {
		act := isPalindrome(t.input)
		fmt.Printf("%v is a palindrome -> %v, %v\n", t.input, act, t.expected == act)
	}
}
