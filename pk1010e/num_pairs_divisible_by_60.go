package main

import "fmt"

func numPairsDivisibleBy60V1(time []int) int {
	mp := make(map[int]int)
	ans := 0
	for _, v := range time {
		m := v % 60
		count, ok := mp[(60-m)%60]
		if ok {
			ans += count
		}
		mp[m]++
	}
	return ans
}
func numPairsDivisibleBy60V2(time []int) int {
	ht := make([]int, 60)
	ans := 0
	for _, v := range time {
		ans += ht[(60-v%60)%60]
		ht[v%60]++
	}
	return ans
}

type Test struct {
	input    []int
	expected int
}

func main() {
	tests := []Test{
		{
			[]int{},
			0,
		},
		{
			[]int{31, 21, 153, 100, 48},
			0,
		},
		{
			[]int{30, 20, 150, 100, 40},
			3,
		},
		{
			[]int{60, 60, 60},
			3,
		},
	}
	for _, t := range tests {
		act := numPairsDivisibleBy60V1(t.input)
		fmt.Println("# of pairs having total duration divisible by 60 in", t.input, "->", act)
		if act != t.expected || t.expected != numPairsDivisibleBy60V2(t.input) {
			panic("Test failed")
		}
	}
}
