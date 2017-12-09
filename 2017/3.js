// http://adventofcode.com/2017/day/3

// Part 1
console.log(347991-589**2-589-1)


// Part 2
const grid = {
	[[0,0]]: 1,
	[[1,0]]: 1
}
const directions = [
	[0, 1],
	[-1, 0],
	[0, -1],
	[1, 0]
]
const diagonalDirections = [
	[1, 1],
	[1, -1],
	[-1, 1],
	[-1, -1]
]
let direction = 0
let i = 1
let position = [1, 0]
let sum = 0

const add = (p1, p2) => [p1[0] + p2[0], p1[1] + p2[1]]

while(sum <= 347991){
	const d = directions[direction]
	position = add(position, d)
	
	sum = 0
	for(const d of [...directions, ...diagonalDirections]){
		const p = add(position, d)
		sum += grid[p] | 0
	}
	grid[position] = sum
	console.log(sum)
	
	if(!( add(position, directions[(direction + 1) % 4]) in grid)){
		direction = (direction + 1) % 4
	}
}