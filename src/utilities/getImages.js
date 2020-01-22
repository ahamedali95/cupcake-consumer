import Image from '../entities/Image';
import tile from '../assets/images/tile.png';
import background from '../assets/images/background.jpg';
import catcherOne from '../assets/images/catcher1.png';
import catcherTwo from '../assets/images/catcher2.png';
import catcherThree from '../assets/images/catcher3.png';
import catcherFour from '../assets/images/catcher4.png';
import cupcake from '../assets/images/food.png';
import blood from '../assets/images/blood.png';
import fruit from '../assets/images/fruit.png';

const getImages = (() => {
  return [
    new Image('tile', tile),
    new Image('background', background),
    new Image('catcherOne', catcherOne),
    new Image('catcherTwo', catcherTwo),
    new Image('catcherThree', catcherThree),
    new Image('catcherFour', catcherFour),
    new Image('cupcake', cupcake),
    new Image('blood', blood),
    new Image('fruit', fruit)
  ];
})();

export default getImages;