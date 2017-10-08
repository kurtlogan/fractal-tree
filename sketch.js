let gui
var startSize = 100
var startAngle = -90
var distanceMult = 0.7
var angleDiff = 25
var startWeight = 10
var weightDiff = 1

var startSizeMax = 200

var startAngleMin = -360
var startAngleMax = 360

var distanceMultStep = 0.05
var distanceMultMax = 0.9

var angleDiffMin = -360
var angleDiffMax = 360

var startWeightMax = 50

var weightDiffMax = 50

function setup() {
  createCanvas(windowWidth, windowHeight)

  gui = createGui('Controls')
  gui.addGlobals('startSize', 'startAngle', 'distanceMult', 'angleDiff', 'startWeight', 'weightDiff')

  noLoop()
}

function draw() {
  clear()
  background(0)
  stroke(255)
  drawLine(width / 2, height, startAngle, startSize, startWeight)
}

function drawLine(x, y, angle, distance, weight) {
  let newPoint = calculateNewPoint(x, y, angle, distance)

  strokeWeight(weight)
  line(x, y, newPoint.x, newPoint.y)

  if(distance > 5) {
    drawLine(newPoint.x, newPoint.y, angle - angleDiff, distance * distanceMult, weight - weightDiff)
    drawLine(newPoint.x, newPoint.y, angle + angleDiff, distance * distanceMult, weight - weightDiff)
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
