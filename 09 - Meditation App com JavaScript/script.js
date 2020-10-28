const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  const sounds = document.querySelectorAll('.sound-picker button');

  const timeDisplay = document.querySelector('.time-display');
  const timeSelect = document.querySelectorAll('.time-selection button');

  const outlineLength = outline.getTotalLength();

  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  sounds.forEach(sound => {
    sound.addEventListener('pointerdown', () => {
      song.src = sound.getAttribute('data-sound');
      video.src = sound.getAttribute('data-video');
      checkPlaying(song);
      sound.removeEventListener('pointerdown', this);
    })
  })

  play.addEventListener('pointerdown', () => {
    checkPlaying(song);
    play.removeEventListener('pointerdown', this);
  })

  timeSelect.forEach(option => {
    option.addEventListener('pointerdown', () => {
      fakeDuration = option.getAttribute('data-time');
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
      option.removeEventListener('pointerdown', this);
    })
  })

  const checkPlaying = song => {
    if(song.paused) {
      song.play();
      video.play();
      play.src = './svg/pause.svg';
    } else {
      song.pause();
      video.pause();
      play.src = './svg/play.svg';
    }
  }

  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = './svg/play.svg';
      video.pause();
    }
  }

}

app();