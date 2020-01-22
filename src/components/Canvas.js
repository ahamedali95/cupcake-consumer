import React, { Component, createRef } from 'react';
import Tile from '../entities/Tile';
import Catcher from '../entities/Catcher';
import getImages from '../utilities/getImages';
import Cupcake from '../entities/Cupcake';
import Sound from '../entities/Sound';
import Fruit from '../entities/Fruit';
import Instructions from './Instructions';

class App extends Component {
  canvas = createRef();
  context; // 2D context of html canvas
  canvasWidth = 500;
  canvasHeight = 500;
  loadedImages= {};
  setInterval;
  animationFlag = 0;
  tileList = [];
  updatedTileList = [];
  CATCHER = new Catcher('Catcher', 100, 350, 30, 50, 0, 5, false, false, 0, false, false, 5, true);
  cupcakesSpawnXCoordinates = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
  cupcakeList = [];
  fruitList = [];
  cupcakeCreationTimer = 0;
  fruitCreationTimer = 0;
  score = 0;
  level = 0;
  isGameOver = false;
  eatSound = new Sound('../assets/sound/eat.mp3');
  dropSound = new Sound('../assets/sound/drop.mp3');

  componentDidMount() {
    this.context = this.canvas.current.getContext('2d');
    this.preloadImages();
  }

  preloadImages() {
    Promise.all(this.getPromises(getImages)).then(a => this.afterLoad())
  }

  getPromises(images) {
    return images.map(imageObj => {
      return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
          this.loadedImages[imageObj.getName()] = image;
          resolve(image);
        };

        image.error = () => {
          reject();
        };

        image.src = imageObj.getUrl();
      });
    });
  }

  afterLoad() {
    console.log('LOADED IMAGES', this.loadedImages);
    this.drawBackground();
    this.drawTiles();
    this.drawCatcherTwo();
    this.setCatcherInteraction(); // set DOM events to allow the user to interact with the catcher
    //this.setPageInteraction();

    this.init(); // switch between catcher one(no eyes) and two(with eyes)
  }

  drawImage(image, x, y, width, height) {
    this.context.drawImage(image, x, y, width, height);
  }

  drawBackground() {
    this.drawImage(this.loadedImages.background, 0, 0, 500, 500);
  }

  drawTiles() {
    // draw ten tiles
    if (this.tileList.length < 10) {
      [...new Array(10).keys()].forEach((ele, index) => {
        this.tileList.push(new Tile(index * 50, 400, 50, 50, false));
      });
    }

    this.tileList.forEach(tile => {
      !tile.getIsCollidedWithCupcake() && this.drawImage(this.loadedImages.tile, tile.getX(), tile.getY(), tile.getWidth(), tile.getHeight());
    });
  }

  drawScoreBoard() {
    const { context } = this;
    this.drawImage(this.loadedImages.cupcake, 440, 10, 20, 20);
    context.fillStyle = '#FFFFFF';
    context.font = '20px Calibri';
    context.fillText(this.score, 465, 27);
    context.fillText(`Level ${this.level}`, 10, 27);
  }

  drawCatcherTwo() {
    const { CATCHER } = this;
    this.drawImage(this.loadedImages.catcherTwo, CATCHER.getX(), CATCHER.getY(), CATCHER.getWidth(), CATCHER.getHeight());
  }

  init() {
    this.setInterval = setInterval(() => {
      this.context.clearRect(0, 0, 500, 500);
      this.drawBackground();
      this.drawTiles();
      this.drawScoreBoard();
      this.animateCatcher();
      this.updateHorizontalCatcherPosition();
      this.updateVerticalCatcherPosition();
      this.startCupcakeCreationTimer();
      this.createCupcake();
      this.updateCupcakeVerticalPosition();
      this.detectCupcakeAndCatcherCollision();
      this.detectCupcakeAndTileCollision();
      this.detectCatcherAndTileCollision();

      //fruit
      this.startFruitCreationTimer();
      this.createFruit();
      this.updateVerticalFruitPosition();
      this.detectCatcherAndFruitCollision();
    }, 10);
  }

  animateCatcher() {
    const { CATCHER } = this;
    const args = [CATCHER.getX(), CATCHER.getY(), CATCHER.getWidth(), CATCHER.getHeight()];

    if (CATCHER.getIsGoingUp()) {
      this.drawImage(this.loadedImages.catcherFour, ...args);
    } else if (this.animationFlag) {
      this.drawImage(this.loadedImages.catcherTwo, ...args);
      this.animationFlag = 0;
    } else {
      this.drawImage(this.loadedImages.catcherOne, ...args);
      this.animationFlag = 1;
    }
  }

  setCatcherInteraction() {
    const { CATCHER } = this;

    document.onkeydown = event => {
      if (event.key === 'ArrowLeft' && this.isMinimumHorizontalBoundaryCheckPassed()) {
        CATCHER.setHorizontalSpeed(-5);
        CATCHER.setLeftPressed(true);
      }

      if (event.key === 'ArrowRight' && this.isMaximumHorizontalBoundaryCheckPassed()) {
        CATCHER.setHorizontalSpeed(5);
        CATCHER.setRightPressed(true);
      }

      if (event.key === 'ArrowUp' && CATCHER.getY() === 350) {
        CATCHER.setMaxJumpHeight(100);
        CATCHER.setIsGoingUp(true);
        CATCHER.setIsGoingDown(false);
        CATCHER.setVerticalSpeed(5);
      }
    };

    document.onkeyup = event => {
      if (event.key === 'ArrowLeft') {
        CATCHER.setHorizontalSpeed(0);
        CATCHER.setLeftPressed(false);
      }

      if (event.key === 'ArrowRight') {
        CATCHER.setHorizontalSpeed(0);
        CATCHER.setRightPressed(false);
      }
    };
  }

  // setPageInteraction() {
  //   //debugger;
  //   document.getElementById('canvas').onmousedown = () => {
  //     console.log(this.isGameOver, this.setInterval);
  //     if (this.isGameOver) {
  //       clearInterval(this.setInterval);
  //       this.init();
  //
  //     } else {
  //       clearInterval(this.setInterval);
  //       this.init();
  //     }
  //   };
  // }

  isMinimumHorizontalBoundaryCheckPassed() {
    return this.CATCHER.getX() > 0;
  }

  isMaximumHorizontalBoundaryCheckPassed() {
    const { CATCHER, canvasWidth } = this;

    return CATCHER.getX() < canvasWidth - CATCHER.getWidth();
  }

  updateHorizontalCatcherPosition() {
    const { CATCHER } = this;

    // Transform x for side movements
    if (CATCHER.getLeftPressed() && this.isMinimumHorizontalBoundaryCheckPassed())  {
      CATCHER.setX(CATCHER.getX() + CATCHER.getHorizontalSpeed());
    }

    if (CATCHER.getRightPressed() && this.isMaximumHorizontalBoundaryCheckPassed())  {
      CATCHER.setX(CATCHER.getX() + CATCHER.getHorizontalSpeed());
    }
  }

  updateVerticalCatcherPosition() {
    const { canvasHeight, CATCHER } = this;

    if (CATCHER.getIsGoingUp() && CATCHER.getY() <= 350 && CATCHER.getY() > 250) {
      CATCHER.setY(CATCHER.getY() - CATCHER.getVerticalSpeed());
    }

    if (CATCHER.getY() === 250) {
      CATCHER.setIsGoingUp(false);
      CATCHER.setIsGoingDown(true);
    }

    if (CATCHER.getIsGoingDown() && (CATCHER.getY() >= 250 && CATCHER.getY() < 350)) {
      CATCHER.setY(CATCHER.getY() + CATCHER.getVerticalSpeed());
    }

    if (!CATCHER.getIsSafe() && CATCHER.getY() < canvasHeight - CATCHER.getHeight()) {
      CATCHER.setY(CATCHER.getY() + 5);
    }

    if (CATCHER.getY() >= 450) {
      this.dropSound.play();
      this.isGameOver = true;
      this.handleGameOver();
    }
  }

  startCupcakeCreationTimer() {
    this.cupcakeCreationTimer++;
  }

  createCupcake() {
    if (this.cupcakeCreationTimer > (150 - this.level)) {
      const cupcake = new Cupcake(this.cupcakesSpawnXCoordinates[Math.round(Math.random() * 9)], 0, 50, 50, 3);
      this.cupcakeList.push(cupcake);
      this.cupcakeCreationTimer = 0;
    }
  }

  updateCupcakeVerticalPosition() {
    if (this.cupcakeList.length) {
      this.cupcakeList.forEach((cupcake, index) => {
        // Delete cupcakes which goes past the canvas to save memory
        if (cupcake.getY() > 500) {
          this.cupcakeList.splice(index, 1);
        } else {
          this.drawImage(this.loadedImages.cupcake, cupcake.getX(), cupcake.getY(), 50, 50);
          cupcake.setY(cupcake.getY() + cupcake.getSpeed());
        }
      });
    }
  }

  detectCupcakeAndCatcherCollision() {
    const { CATCHER, cupcakeList } = this;

    if (cupcakeList.length) {
      cupcakeList.forEach((cupcake, index) => {
        if ((cupcake.getX() < CATCHER.getX() + CATCHER.getWidth())
        && (CATCHER.getX() < cupcake.getX() + cupcake.getWidth())
        && (cupcake.getY() < CATCHER.getY() + CATCHER.getHeight())
        && (CATCHER.getY() < cupcake.getY() + cupcake.getHeight())) {
          cupcakeList.splice(index, 1);
          this.eatSound.play();
          this.score++;

          if (this.score % 2 === 0) {
            this.level++;
          }
        }
      });
    }
  }

  detectCupcakeAndTileCollision() {
    const { cupcakeList, tileList } = this;

    if (cupcakeList.length) {
      cupcakeList.forEach(cupcake => {
        tileList.forEach(tile => {
          if ((cupcake.getX() < tile.getX() + tile.getWidth())
            && (tile.getX() < cupcake.getX() + cupcake.getWidth())
            && (cupcake.getY() < tile.getY() + tile.getHeight())
            && (tile.getY() < cupcake.getY() + cupcake.getHeight())) {
            tile.setIsCollidedWithCupcake(true);
          }
        });
      });

      this.updatedTileList = this.tileList.filter(tile => !tile.getIsCollidedWithCupcake());
    }
  }

  detectCatcherAndTileCollision() {
    const { CATCHER, updatedTileList } = this;

    if (!CATCHER.getIsGoingUp() && updatedTileList.length) {
      for (const tile of updatedTileList) {
        if (CATCHER.getX() <= tile.getX() + tile.getWidth()
          && (tile.getX() <= CATCHER.getX() + CATCHER.getWidth())
          && (CATCHER.getY() + CATCHER.getHeight() <= tile.getY())) {
          CATCHER.setIsSafe(true);
          break;
        }

        CATCHER.setIsSafe(false);
      }
    }
  }


  handleGameOver() {
    const { context } = this;
    clearInterval(this.setInterval);
    context.save();
    context.globalAlpha = 0.6;
    this.drawImage(this.loadedImages.blood, 100, 100, 300, 300);
    context.globalAlpha = 1.0;
    context.strokeStyle = '#FFFFFF';
    context.font = '30px Calibri';
    context.strokeText('Game Over', 180, 200);
    context.strokeText('Refresh Page', 160, 250);
    context.restore();
  }

  startFruitCreationTimer() {
    this.fruitCreationTimer++;
  }

  createFruit() {
    if (this.fruitCreationTimer > (200 - this.level)) {
      const fruit = new Fruit(this.cupcakesSpawnXCoordinates[Math.round(Math.random() * 9)], 0, 50, 50, 3);
      this.fruitList.push(fruit);
      this.fruitCreationTimer = 0;
    }
  }

  updateVerticalFruitPosition() {
    if (this.fruitList.length) {
      this.fruitList.forEach((fruit, index) => {

        if (fruit.getY() > 500) {
          this.fruitList.splice(index, 1);
        } else {
          this.drawImage(this.loadedImages.fruit, fruit.getX(), fruit.getY(), fruit.getWidth(), fruit.getHeight());
          fruit.setY(fruit.getY() + fruit.getSpeed());
        }
      });
    }
  }

  detectCatcherAndFruitCollision() {
    const { CATCHER, fruitList } = this;

    if (fruitList.length) {
      fruitList.forEach(fruit => {
        if ((fruit.getX() < CATCHER.getX() + CATCHER.getWidth())
          && (CATCHER.getX() < fruit.getX() + fruit.getWidth())
          && (fruit.getY() < CATCHER.getY() + CATCHER.getHeight())
          && (CATCHER.getY() < fruit.getY() + fruit.getHeight())) {
          this.dropSound.play();
          this.isGameOver = true;
          this.handleGameOver();
        }
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Instructions />
        <div className="row justify-content-center">
          <canvas
            id="canvas"
            className="col col-7"
            ref={this.canvas}
            height={this.canvasHeight}
            width={this.canvasWidth}
            style={{ border: "2px solid #000000" }}
          />
        </div>
      </div>
    );
  }
}

export default App;


