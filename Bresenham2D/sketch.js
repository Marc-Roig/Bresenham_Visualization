let rows = 20
let columns = 20

let grid = new Array()

let lastPoint = {x:0, y:0}

function setup() {
    
    createCenteredCanvas()
    frameRate(30)

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < columns; j++) {
            grid[i][j] = false;
        }
    }

    grid[0][0] = true
    
}

function draw() {
    
    background('#0e0e0e')
    drawFrame()

    drawGrid()
    // noLoop()
    // fill(255)

}

function emptyGrid() {

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            grid[i][j] = false;
        }
    }
    grid[0][0] = true

}

function mousePressed() {

    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {

        let col = Math.floor(mouseX/width * columns)
        let row = Math.floor(mouseY/height * rows)

        if (lastPoint.y != 0 || lastPoint.x != 0) grid[lastPoint.y][lastPoint.x] = false;

        // grid[row][col] = true;
        emptyGrid()
        plotLine(0,0,col,row)
        lastPoint.y = row;
        lastPoint.x = col;

    }


}

function plotLine(x0, y0, x1, y1) {

    const dx = abs(x1-x0)
    const sx = (x0 < x1) ? 1 : -1

    const dy = -abs(y1-y0)
    const sy = (y0 < y1) ? 1 : -1

    let err = dx + dy
    let e2

    let count = 0
    while(count++ < 100) {

        grid[y0][x0] = true
        if (x0 == x1 && y0 == y1) break

        e2 = 2*err
        if (e2 >= dy) {
            err += dy
            x0  += sx            
        }
        if (e2 <= dx) {
            err += dx
            y0 += sy
        }

    }

}


function windowResized() {
  createCenteredCanvas()
}


function createCenteredCanvas() {

  const size =
    (windowWidth <= 540 || windowHeight <= 630) +
    (windowWidth <= 960 || windowHeight <= 800)
  const dim = [600, 450, 300][size]
  createCanvas(dim, dim).position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  )

}

function drawFrame() {

    push()
    stroke(100)
    strokeWeight(3)
    line(0, 0, width, 0)
    line(0, 0, 0, height)
    // line(width/2, 0, width/2, height)
    line(width-1, height-1, width-1, 0)
    line(width-1, height-1, 0, height-1)
    pop()

}