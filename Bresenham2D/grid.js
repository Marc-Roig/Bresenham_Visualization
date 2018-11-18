// class Cell {
	
// 	constructor(x, y){

// 		this.x = x
// 		this.y = y

// 		this.g = 0
// 		this.h 
// 		this.f 

// 		this.parent = null
// 		this.neighbours = []
// 		this.diagonalNeigh = []

// 		this.valid = true

// 		if (random(1) < 0.3) this.valid = false

// 		this.color = color(52, 73, 94)
// 		// this.special = false
		
// 		return this
// 	}

// 	setNeighbour(neighbour) {

// 		if (neighbour instanceof Cell) this.neighbours.push(neighbour)
// 		return this

// 	}

// 	setDiagonalNeighbour(neighbour) {

// 		if (neighbour instanceof Cell) this.diagonalNeigh.push(neighbour)
// 		return this

// 	}

// 	resetNeighbours() {
// 		this.neighbours = []
// 		this.diagonalNeigh = []
// 		return this
// 	}

// 	resetParent() {
// 		this.parent = null
// 		return this
// 	}

// }

function drawGrid(path) {

	const spaceBetSquareCol = (width -1) / grid[0].length
	const spaceBetSquareRow = (height-1) / grid.length

	push()

	stroke(120)
    strokeWeight(1)

	for (let i = 0; i < grid.length; i++) {

		const distRow = i * spaceBetSquareRow

		for (let j = 0; j < grid[0].length; j++) {

			const distCol = j * spaceBetSquareCol

			if (grid[i][j]) fill(255)
			else fill(0)

			rect(distCol, distRow, spaceBetSquareCol, spaceBetSquareRow)

		}

	}

	fill(142, 68, 173)
	pop()

}
