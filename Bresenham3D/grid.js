// class Cell {
    
//  constructor(x, y){

//      this.x = x
//      this.y = y

//      this.g = 0
//      this.h 
//      this.f 

//      this.parent = null
//      this.neighbours = []
//      this.diagonalNeigh = []

//      this.valid = true

//      if (random(1) < 0.3) this.valid = false

//      this.color = color(52, 73, 94)
//      // this.special = false
        
//      return this
//  }

//  setNeighbour(neighbour) {

//      if (neighbour instanceof Cell) this.neighbours.push(neighbour)
//      return this

//  }

//  setDiagonalNeighbour(neighbour) {

//      if (neighbour instanceof Cell) this.diagonalNeigh.push(neighbour)
//      return this

//  }

//  resetNeighbours() {
//      this.neighbours = []
//      this.diagonalNeigh = []
//      return this
//  }

//  resetParent() {
//      this.parent = null
//      return this
//  }

// }

function drawGrid() {

    const spaceBetSquareX = (cubeLength) / columns
    const spaceBetSquareY = (cubeLength) / rows
    const spaceBetSquareZ = (cubeLength) / depth

    push()

    //Center cube
    translate (-cubeLength/2 + spaceBetSquareX/2, -cubeLength/2 + spaceBetSquareY/2, -cubeLength/2 + spaceBetSquareY/2)

    stroke(130)
    strokeWeight(0.1)

    for (let i = 0; i < grid.length; i++) {

        push()

        for (let j = 0; j < grid[0].length; j++) {
            
            push()

            for (let k = 0 ; k < grid[0][0].length; k++) {

                if (grid[i][j][k]) {
                    fill(255,255,255,150)
                    box(spaceBetSquareX, spaceBetSquareY, spaceBetSquareZ)

                } else  {
                    noFill()
                    box(spaceBetSquareX, spaceBetSquareY, spaceBetSquareZ)
                }    

                translate(spaceBetSquareX, 0, 0)

            }

            pop()
            translate(0, spaceBetSquareY, 0)

        }

        pop()
        translate(0, 0, spaceBetSquareZ)

    }

    pop()

}
