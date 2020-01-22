class Cupcake {
  #x;
  #y;
  #width;
  #height;
  #speed;

  constructor(x, y, width, height, speed) {
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#speed = speed;
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

  setWidth(width) {
    this.#width = width;
  }

  getHeight() {
    return this.#height;
  }

  setHeight(height) {
    this.#height = height;
  }

  getSpeed() {
    return this.#speed;
  }

  setSpeed(speed) {
    this.#speed = speed;
  }
}

export default Cupcake;