package main

import "fmt"

func maxProfit(prices []int) int {
	ans := 0
	for i := 1; i < len(prices); i++ {
		if prices[i] > prices[i-1] {
			ans += prices[i] - prices[i-1]
		}
	}
	return ans
}

func main() {
	tests := [][]int{
		{},
		{1},
		{7, 1, 5, 3, 6, 4},
		{7, 6, 4, 3, 1},
	}
	for _, t := range tests {
		fmt.Println("Max profit by inf transaction in", t,
			"->", maxProfit(t))
	}
}
