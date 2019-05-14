package main

import (
	"fmt"
	"math"
)

func maxProfit(prices []int) int {
	maxClosed, maxOpen := 0, math.MaxInt32
	for _, p := range prices {
		if p-maxOpen > maxClosed {
			maxClosed = p - maxOpen
		}
		if p < maxOpen {
			maxOpen = p
		}
	}
	return maxClosed
}

func main() {
	tests := [][]int{
		{},
		{1},
		{7, 1, 5, 3, 6, 4},
		{7, 6, 4, 3, 1},
	}
	for _, t := range tests {
		fmt.Println("Max profit by one transaction in", t,
			"->", maxProfit(t))
	}
}
