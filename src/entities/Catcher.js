class Catcher {
  #name;
  #x;
  #y;
  #width;
  #height;
  #maxJumpHeight;
  #verticalSpeed;
  #isGoingUp;
  #isGoingDown;
  #horizontalSpeed;
  #leftPressed;
  #rightPressed;
  #gravityPull;
  #isSafe;

  constructor(name, x, y, width, height, maxJumpHeight, verticalSpeed, isGoingUp, isGoingDown, horizontalSpeed, leftPressed, rightPressed, gravityPull, isSafe) {
    this.#name = name;
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#maxJumpHeight = maxJumpHeight;
    this.#verticalSpeed = verticalSpeed;
    this.#isGoingUp = isGoingUp;
    this.#isGoingDown = isGoingDown;
    this.#horizontalSpeed = horizontalSpeed;
    this.#leftPressed = leftPressed;
    this.#rightPressed = rightPressed;
    this.#gravityPull = gravityPull;
    this.#isSafe = isSafe;
  }

  getX() {
    return this.#x;
  }

  setX(value) {
    this.#x = value;
  }

  getY() {
    return this.#y;
  }

  setY(value) {
    this.#y = value;
  }

  getWidth() {
    return this.#width;
  }

  setWidth(value) {
    this.#width = value;
  }

  getHeight() {
    return this.#height;
  }

  setHeight(value) {
    this.#height = value;
  }

  setMaxJumpHeight(value) {
    this.#maxJumpHeight = value;
  }

  getMaxJumpHeight() {
    return this.#maxJumpHeight;
  }

  getVerticalSpeed() {
    return this.#verticalSpeed;
  }

  setVerticalSpeed(value) {
    this.#verticalSpeed = value;
  }

  getIsGoingUp() {
    return this.#isGoingUp
  }

  setIsGoingUp(value) {
    this.#isGoingUp = value;
  }

  getIsGoingDown() {
    return this.#isGoingDown;
  }

  setIsGoingDown(value) {
    this.#isGoingDown = value;
  }

  getHorizontalSpeed() {
    return this.#horizontalSpeed;
  }

  setHorizontalSpeed(value) {
    this.#horizontalSpeed = value;
  }

  getLeftPressed() {
    return this.#leftPressed;
  }

  setLeftPressed(value) {
    this.#leftPressed = value;
  }

  getRightPressed() {
    return this.#rightPressed;
  }

  setRightPressed(value) {
    this.#rightPressed = value;
  }

  getGravityPull() {
    return this.#gravityPull;
  }

  setGravityPull(value) {
    this.#gravityPull = value;
  }

  getIsSafe() {
    return this.#isSafe;
  }

  setIsSafe(value) {
    this.#isSafe = value;
  }
}

export default Catcher;