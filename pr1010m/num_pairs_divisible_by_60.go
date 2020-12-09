package main

import "fmt"

func numPairsDivisibleBy60V1(time []int) int {
	mp := make(map[int]int)
	ans := 0
	for _, t := range time {
		count, _ := mp[(60-t%60)%60]
		ans += count
		mp[t%60]++
	}
	return ans
}
func numPairsDivisibleBy60V2(time []int) int {
	ht := make([]int, 60)
	ans := 0
	for _, t := range time {
		ans += ht[(60-t%60)%60]
		ht[t%60]++
	}
	return ans
}

type Test struct {
	time     []int
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
		actual := numPairsDivisibleBy60V1(t.time)
		fmt.Println("# of pairs having total duration divisible by 60 in", t.time, "->", actual)
		if actual != t.expected || t.expected != numPairsDivisibleBy60V2(t.time) {
			panic("Test failed")
		}
	}
}
