package main

import (
	"fmt"
	"strings"
)

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	for lo, hi := 0, len(s)-1; lo < hi; {
		if (s[lo] < 'a' || s[lo] > 'z') && (s[lo] < '0' || s[lo] > '9') {
			lo++
		} else if (s[hi] < 'a' || s[hi] > 'z') && (s[hi] < '0' || s[hi] > '9') {
			hi--
		} else {
			if s[lo] != s[hi] {
				return false
			}
			lo++
			hi--
		}
	}
	return true
}

type Test struct {
	input    string
	expected bool
}

func main() {
	tests := []Test{
		{"", true},
		{"A man, a plan, a canal: Panama", true},
		{"race a car", false},
		{"0P", false},
	}
	for _, t := range tests {
		act := isPalindrome(t.input)
		fmt.Printf("Is \"%v\" valid palindrome -> %v\n", t.input, act)
		if act != t.expected {
			panic("failed")
		}
	}
}
