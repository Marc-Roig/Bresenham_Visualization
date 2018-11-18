let rows = 10
let columns = 10
let depth = 10

let cubeLength = 200

let grid = new Array()

let easycam

function setup() {
    
    createCanvas(windowWidth, windowHeight, WEBGL)
    setAttributes('antialias', true)
    easycam = createEasyCam()

    frameRate(30)

    for (let i = 0; i < depth; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j] = []
            for (let k = 0; k <columns ; k++) {
                grid[i][j][k] = false;
            }
        }
    }

    grid[0][0][0] = true
    
    plotLine3D(0,0,0,9,6,5)

}

var m4_camera = new p5.Matrix()
var m3_camera = new p5.Matrix('mat3')

function backupCameraMatrix(){
  // camera matrix: for transforming positions
  m4_camera.set(easycam.renderer.uMVMatrix);
  // inverse transpose: for transforming directions
  m3_camera.inverseTranspose(m4_camera);
}


function draw() {
    
    backupCameraMatrix();

    background('#171717')
    drawGrid()

}

function emptyGrid() {

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            grid[i][j] = false;
        }
    }
    grid[0][0] = true

}


// http://members.chello.at/easyfilter/bresenham.html
function plotLine3D(x0, y0, z0, x1, y1, z1) {

    const dx = abs(x1-x0)
    const sx = (x0 < x1) ? 1 : -1

    const dy = abs(y1-y0)
    const sy = (y0 < y1) ? 1 : -1

    const dz = abs(z1-z0)
    const sz = (z0 < z1) ? 1 : -1

    const dm = max(dx, dy, dz) 
    let i = dm

    x1 = dm/2
    y1 = dm/2
    z1 = dm/2

    let count = 0
    while(count++ < 100) {

        grid[z0][y0][x0] = true
        if (i-- == 0) break;

        x1 -= dx
        y1 -= dy
        z1 -= dz

        if (x1 < 0) {
            x1 += dm
            x0 += sx
        }
        if (y1 < 0) {
            y1 += dm
            y0 += sy
        }
        if (z1 < 0) {
            z1 += dm
            z0 += sz
        }

    }

}

