package main

import (
	"fmt"
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	s = strings.ToLower(s)
	re := regexp.MustCompile("[[:alnum:]]")
	for lo, hi := 0, len(s)-1; lo < hi; {
		if !re.MatchString(string(s[lo])) {
			lo++
		} else if !re.MatchString(string(s[hi])) {
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
