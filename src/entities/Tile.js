class Tile {
  #x;
  #y;
  #width;
  #height;
  #isCollidedWithCupcake;

  constructor(x, y, width, height, isCollidedWithCupcake) {
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#isCollidedWithCupcake = isCollidedWithCupcake;
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

  getIsCollidedWithCupcake() {
    return this.#isCollidedWithCupcake;
  }

  setIsCollidedWithCupcake(value) {
    this.#isCollidedWithCupcake = value;
  }
}

export default Tile;