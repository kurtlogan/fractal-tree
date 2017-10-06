let gui
var startSize = 100
var startAngle = -90
var distanceMult = 0.7
var angleDiff = 25

var startSizeMax = 200

var startAngleMin = -360
var startAngleMax = 360

var distanceMultStep = 0.05
var distanceMultMax = 0.9

var angleDiffMin = -360
var angleDiffMax = 360

function setup() {
  createCanvas(windowWidth, windowHeight)

  gui = createGui('Controls')
  gui.addGlobals('startSize', 'startAngle', 'distanceMult', 'angleDiff')

  noLoop()
}

function draw() {
  clear()
  background(0)
  stroke(255)
  drawLine(width / 2, height, startAngle, startSize)
}

function drawLine(x, y, angle, distance) {
  let newPoint = calculateNewPoint(x, y, angle, distance)
  line(x, y, newPoint.x, newPoint.y)

  if(distance > 2) {
    drawLine(newPoint.x, newPoint.y, angle - angleDiff, distance * distanceMult)
    drawLine(newPoint.x, newPoint.y, angle + angleDiff, distance * distanceMult)
  }
}

function calculateNewPoint(x, y, angle, distance) {
  let result = {}

  result.x = round(cos(angle * PI / 180) * distance + x)
  result.y = round(sin(angle * PI / 180) * distance + y)

  return result
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
