package main

import "fmt"

var MORSE = []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}

func uniqueMorseRepresentations(words []string) int {
	set := make(map[string]int)
	for _, word := range words {
		encoded := ""
		for _, c := range word {
			encoded += MORSE[c-'a']
		}
		set[encoded]++
	}
	return len(set)
}

type Test struct {
	words    []string
	expected int
}

func main() {
	tests := []Test{
		{
			[]string{"gin", "zen", "gig", "msg"},
			2,
		},
	}
	for _, t := range tests {
		actual := uniqueMorseRepresentations(t.words)
		fmt.Println("# of unique Morse in ", t.words, "->", actual)
	}
}
