## Requirements

Given an array, whose index represent i'th day and corresponding element represents a stock's price for that day, we've to find maximum profit.  
The stock can be purchased and sold multiple times.

O (output) - Number that represents max profit

I (input) - An array of a stock's prices on different days(array indices)

C (constraints) -

* The array has to have atleast 2 elements.
* Can't buy on a future day and sell on present/past day.

E (edge cases) -

* Empty array
* No change in stock prices (0 profit)
* Array with 1 element?

## Strategy

#### Sample input :

[ 100, 267, 50, 677, 459, 345, 1201 ][5,4,3,2,1,7]

#### Sample output :

(267-100) + (677 - 50) + (1201-345)

We can see that to make max profit, a stock can be purchased when the next value in array is greater than current value and sold when the next value in array is less than current value.

> create totalProfit = 0  
> loop through the array with starting index = 1  
>  ---------if val at curIdx > val at prevIdx  
>  --------------totalProfit += val at curIdx - val at prevIdx  
> return totalProfit

### Justification of strategy

As the stock can be purchased and sold multiple
times, we have to check the value of the stock each day to find where profit can be made.
This leads to a simple iterative solution to this problem.

## Define test cases

[] = should return "error, empty input"  
[1] = should return "not enough data, no profit can be made"  
[1,2,3,0] = should return 2  
[ 100, 267, 50, 677, 459, 345, 1201 ] = should return 1650  
[1,2,'a','b'] = should return "error, invalid input"  
[2,0,39,39,39,41] = should return 41  
[33,33,33,33] = should return 0

## Implementation skeleton

> create totalProfit = 0  
> if input.length === 0, return “error, empty input”  
> if input.length === 1, return “not enough data, no profit can be made”  
> loop through the array with starting index = 1

> ---------if val at curIdx or val at prevIdx is not a number, return “error, invalid input”  
> ---------if val at curIdx > val at prevIdx  
> --------------totalProfit += val at curIdx - val at prevIdx  
> return totalProfit

## Actual implementation

index.js

## Execute test cases

npm test

## Big-O Analysis

As we are visiting each element in the array, the algorithm's time complexity is O(n).
Space complexity is O(1) as it remains constant with
whatever input is provided.

## Optimization (if applicable)
