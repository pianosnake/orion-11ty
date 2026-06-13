(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .fading-overlay {
        position: absolute;
        opacity: 0.99; /* fix for IE9 */
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
      }
      .fading-overlay.is-fading {
        transition: opacity 1s;
      }
      img {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 100%;
        height: auto;
      }
      .slide-show {
        position: relative;
        width: 100%;
        height: auto;
      }
    </style>
    <div class="slide-show">
      <img class="main-img" src="">
      <div class="fading-overlay">
        <img class="overlay-img" src="">
      </div>
    </div>
  `;

  class SlideShow extends HTMLElement {
    constructor() {
      super();
      this.curIdx = 0;
      this.pictures = [];
      this.duration = 5000;

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const images = Array.from(this.children).filter(child => child.tagName.toLowerCase() === 'img');
      this.pictures = images.map(img => img.getAttribute('src'));

      if (this.pictures.length === 0) {
        return;
      }

      this.curImg = this.shadowRoot.querySelector('.main-img');
      this.overlayImg = this.shadowRoot.querySelector('.overlay-img');
      this.fadingOverlay = this.shadowRoot.querySelector('.fading-overlay');

      this.nextImage();

      this.intervalId = setInterval(() => {
        this.nextImage();
      }, this.duration);
    }

    disconnectedCallback() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }

    nextImage() {
      this.overlayImg.setAttribute('src', this.curImg.getAttribute('src'));

      // Show the overlay
      this.fadingOverlay.style.opacity = '1';

      // Switch the image underneath
      this.curImg.setAttribute('src', this.pictures[this.curIdx]);

      // Fade out overlay
      this.fadingOverlay.classList.remove('is-fading');
      setTimeout(() => {
        this.fadingOverlay.style.opacity = '0';
        this.fadingOverlay.classList.add('is-fading');
      }, 1000);

      this.curIdx++;
      if (this.curIdx >= this.pictures.length) {
        this.curIdx = 0;
      }
    }
  }

  customElements.define('slide-show', SlideShow);

  return SlideShow;
})();
