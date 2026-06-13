(() => {
  // icons from https://uxwing.com/tag/music-icons?page=2

  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
        line-height: normal;
      }

      #audio{
        position: relative;
      }
      #audio .top{
        vertical-align: center;
      }
      #audio .inline{
        vertical-align: middle;
        display: inline-block;
        line-height: 40px;
      }
      #audio .button{
        width: 40px; 
        height: 40px;
        cursor: pointer;
      }
      #audio .caption{
        margin-top: 15px;
        display: block;
      }
      .fa-play svg#pause,
      .fa-pause svg#play {
        display: none;
      }
      .button svg path {
        fill: currentColor;
      }
      .button, .caption, .inline {
        color: black;
      }
    </style>
    <div id="audio">
        <div class="inline">LISTEN</div>
        <div class="inline button fa-back">
          <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="nonzero" d="M256 34.33c-61.22 0-116.64 24.82-156.74 64.92-40.11 40.11-64.93 95.55-64.93 156.76 0 61.21 24.82 116.63 64.93 156.74 40.1 40.1 95.52 64.92 156.74 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.23-24.82-116.65-64.92-156.76-40.11-40.1-95.53-64.92-156.75-64.92zM145.53 269.8c-10.29-9.17-10.01-17.33 0-26.62l86.09-76.78c11.21-7.03 22.9-2.9 22.59 11.73l-.12 43.14 61.54-54.87c11.2-7.03 22.89-2.9 22.58 11.73l-.44 154.47c-.96 15.86-10.01 20.21-23.36 12.87l-60.52-53.95-.11 41.08c-.96 15.86-10.02 20.21-23.38 12.87l-84.87-75.67zM74.98 74.98C121.31 28.66 185.32 0 256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.32 512 256.01c0 70.68-28.66 134.69-74.98 181.01C390.7 483.34 326.68 512 256 512s-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256.01c0-70.68 28.66-134.7 74.98-181.03z"/></svg>
        </div>
        <div class="inline button fa-play">
          <svg id="play" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="nonzero" d="M255.99 0c70.68 0 134.7 28.66 181.02 74.98C483.33 121.3 512 185.31 512 256c0 70.68-28.67 134.69-74.99 181.01C390.69 483.33 326.67 512 255.99 512S121.3 483.33 74.98 437.01C28.66 390.69 0 326.68 0 256c0-70.67 28.66-134.7 74.98-181.02C121.3 28.66 185.31 0 255.99 0zm77.4 269.81c13.75-8.88 13.7-18.77 0-26.63l-110.27-76.77c-11.19-7.04-22.89-2.9-22.58 11.72l.44 154.47c.96 15.86 10.02 20.21 23.37 12.87l109.04-75.66zm79.35-170.56c-40.1-40.1-95.54-64.92-156.75-64.92-61.21 0-116.63 24.82-156.74 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.22 24.82 116.64 64.92 156.74 40.11 40.11 95.53 64.93 156.74 64.93 61.21 0 116.65-24.82 156.75-64.93 40.11-40.1 64.93-95.52 64.93-156.74 0-61.22-24.82-116.64-64.93-156.75z"/></svg>
          <svg id="pause" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="nonzero" d="M256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.32 512 256s-28.66 134.69-74.98 181.01C390.7 483.33 326.68 511.99 256 511.99s-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.7 74.98-181.02C121.3 28.66 185.32 0 256 0zm-66.92 168.32h38.04c5.09 0 9.24 4.21 9.24 9.24v156.87c0 5.03-4.19 9.23-9.24 9.23h-38.04c-5.03 0-9.23-4.16-9.23-9.23V177.56c0-5.09 4.15-9.24 9.23-9.24zm95.77 0h38.06c5.08 0 9.23 4.2 9.23 9.24v156.87c0 5.03-4.19 9.23-9.23 9.23h-38.06c-5.04 0-9.23-4.16-9.23-9.23V177.56c0-5.09 4.16-9.24 9.23-9.24zm127.9-69.07C372.64 59.15 317.21 34.33 256 34.33c-61.21 0-116.64 24.82-156.75 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.21 24.82 116.63 64.92 156.74 40.11 40.1 95.54 64.92 156.75 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.21-24.82-116.64-64.92-156.75z"/></svg>
        </div>
        <div class="inline button fa-next">
          <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="nonzero" d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.32 512 256.01c0 70.68-28.66 134.69-74.98 181.01C390.7 483.34 326.68 512 256 512s-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256.01c0-70.68 28.66-134.7 74.98-181.03C121.31 28.66 185.32 0 256 0zm110.47 269.8c10.3-9.17 10.02-17.33 0-26.62l-86.09-76.78c-11.21-7.03-22.9-2.9-22.59 11.73l.12 43.14-61.54-54.87c-11.2-7.03-22.89-2.9-22.59 11.73l.45 154.47c.96 15.86 10.01 20.21 23.37 12.87l60.51-53.95.12 41.08c.96 15.86 10.01 20.21 23.36 12.87l84.88-75.67zm46.28-170.55C372.64 59.15 317.22 34.33 256 34.33S139.36 59.15 99.26 99.25c-40.11 40.11-64.93 95.55-64.93 156.76 0 61.21 24.82 116.63 64.93 156.74 40.1 40.1 95.52 64.92 156.74 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.23-24.82-116.65-64.92-156.76z"/></svg>
        </div>
      <div class="caption"></div>
    </div>
  `;

  function AudioSample(src, name) {
    this.src = src;
    this.name = name;
  }


  class MusicPlayer extends HTMLElement {
    constructor() {
      super();
      this.samples = [];
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.playBtn = this.shadowRoot.querySelector('.button.fa-play');
      this.nextBtn = this.shadowRoot.querySelector('.button.fa-next');
      this.backBtn = this.shadowRoot.querySelector('.button.fa-back');
      this.caption = this.shadowRoot.querySelector('.caption');

      this.curIdx = 0;
      this.playing = false;

      if (this.nextBtn) this.nextBtn.addEventListener('click', this.playNext.bind(this, 1));
      if (this.backBtn) this.backBtn.addEventListener('click', this.playNext.bind(this, -1));
      if (this.playBtn) this.playBtn.addEventListener('click', this.playClick.bind(this));

      this.setColor();
      this.loadAudioFiles();

      if (this.samples.length > 0) {
        this.showTrackName();
      }
    }

    setColor() {
      const color = getComputedStyle(this).color || '#000';
    
      // Explicitly apply fill to path elements (Safari fix)
      this.shadowRoot.querySelectorAll('.button svg path').forEach((path) => {
        path.setAttribute('fill', color);
      });
    
      // Fallback, keep this too
      this.shadowRoot.querySelector('#audio').style.setProperty('color', color);
    }

    loadAudioFiles() {
      const audioFiles = this.getAttribute('audio-files');
      if (audioFiles) {
        const parsedFiles = JSON.parse(audioFiles);
        this.samples = parsedFiles.map((file) => {
          const audio = new AudioSample(file.src, file.name);
          audio.link = file.link;
          return audio;
        });
        this.samples = this.samples.sort(() => Math.random() - 0.5);
      }
    }

    createSound() {
      const sample = this.samples[this.curIdx];

      if (!sample) {
        return;
      }

      if (this.sound) {
        this.sound.unload();
      }

      this.sound = new Howl({ src: [sample.src] });
      this.sound.on('end', () => this.playNext(1));
    }

    playClick() {
      if (this.samples.length === 0) {
        return;
      }

      if (this.sound && this.sound.playing()) {
        this.playBtn.classList.remove('fa-pause');
        this.playBtn.classList.add('fa-play');
        this.sound.pause();
        this.playing = false;
      } else {
        if (!this.sound) {
          this.createSound();
        }
        this.playBtn.classList.remove('fa-play');
        this.playBtn.classList.add('fa-pause');
        this.sound.play();
        this.playing = true;
        this.showTrackName();
      }
    }

    playNext(direction = 1) {
      if (this.samples.length === 0) {
        return;
      }

      this.curIdx = (this.curIdx + direction + this.samples.length) % this.samples.length;

      if (this.playing) {
        this.createSound();
        this.playBtn.classList.remove('fa-play');
        this.playBtn.classList.add('fa-pause');
        this.sound.play();
      }

      this.showTrackName();
    }

    showTrackName() {
      const sample = this.samples[this.curIdx];

      if (!sample) {
        this.caption.textContent = '';
        return;
      }

      this.caption.style.display = 'block';
      if (sample.link) {
        this.caption.innerHTML = `<a href='${sample.link}'>${sample.name}</a>`;
      } else {
        this.caption.innerHTML = sample.name;
      }
    }
  }

  customElements.define('music-player', MusicPlayer);

  return MusicPlayer;
})();
