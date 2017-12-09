// http://adventofcode.com/2017/day/6

const banks = `4	1	15	12	0	9	9	5	5	8	7	3	14	5	12	3`.split('\t').map(Number)
const history = {}
let _ = 0
do {
	history[banks] = _
	const max = Math.max(...banks)
	let i = banks.findIndex(n => n === max)
	let x = max
	banks[i] = 0
	while(x--){
		i = (i + 1) % banks.length
		banks[i]++
	}
	_++
	console.log(_, banks)
}while(!(banks in history))
console.log(_) // Part 1
console.log(_ - history[banks]) // Part 2