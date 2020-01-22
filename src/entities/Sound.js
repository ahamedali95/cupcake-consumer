class Sound {
  #soundElement = new Audio();

  constructor(src) {
    this.#soundElement.src = src;
    this.#soundElement.setAttribute('preload', 'auto');
    this.#soundElement.setAttribute('controls', 'none');
    this.#soundElement.style.display = 'none';
    document.body.appendChild(this.#soundElement);
  }

  pause() {
    this.#soundElement.pause();
  }

  play() {
    this.#soundElement.play();
  }
}

export default Sound;