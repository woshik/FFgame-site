'use strict';

var animationflow,
  animation = false,
  propertySet = false,
  matchProperty = {},
  controlsProgressEl,
  playButton,
  sound = true,
  soundButton;

document.addEventListener('DOMContentLoaded', function () {
  controlsProgressEl = document.querySelector('.played-label');
  playButton = document.querySelector('.player .play');
  soundButton = document.querySelector('.player .sound');
  animationflow = anime
    .timeline({
      easing: 'easeOutExpo',
      delay: 800,
      autoplay: false,
      update: function update() {
        controlsProgressEl.style.width = parseInt(animationflow.progress) + '%';
      },
      complete: function complete() {
        animation = false;
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        controlsProgressEl.style.width = '0%';
      },
    })
    .add(
      {
        targets: '.center-content',
        width: '70%',
        scaleX: 1,
        duration: 6000,
      },
      0
    )
    .add(
      {
        targets: '.match-round',
        opacity: 1,
        duration: 1000,
      },
      1000
    )
    .add(
      {
        targets: '.top-content',
        translateY: ['100%', '0%'],
        opacity: 1,
        duration: 3000,
      },
      1000
    )
    .add(
      {
        targets: '.bottom-content',
        translateY: ['-100%', '0%'],
        opacity: 1,
        duration: 1500,
      },
      1000
    )
    .add(
      {
        targets: '.bottom-content h3',
        opacity: 1,
        duration: 750,
      },
      1100
    )
    .add(
      {
        targets: '.flag img',
        scaleX: [0, 1],
        scaleY: [0, 1],
        duration: 2000,
      },
      1500
    )
    .add(
      {
        targets: '.team-name .left-team, .team-name .right-team, .team-name .vs-text',
        opacity: [0, 1],
        duration: 4000,
      },
      1800
    )
    .add(
      {
        targets: '.center-content .city-name',
        opacity: [0, 1],
        duration: 2500,
      },
      2000
    )
    .add(
      {
        targets: '.flag img',
        scaleX: 0,
        scaleY: 0,
        duration: 2000,
      },
      7000
    )
    .add(
      {
        targets: '.team-name .left-team, .team-name .right-team, .team-name .vs-text',
        opacity: 0,
        duration: 2000,
      },
      7000
    )
    .add(
      {
        targets: '.center-content .city-name',
        opacity: 0,
        duration: 1200,
      },
      7600
    )
    .add(
      {
        targets: '.top-content',
        translateY: '100%',
        duration: 1200,
      },
      7800
    )
    .add(
      {
        targets: '.bottom-content',
        translateY: '-100%',
        duration: 1000,
      },
      8000
    )
    .add(
      {
        targets: '.match-round',
        opacity: 0,
        duration: 1400,
      },
      7500
    )
    .add(
      {
        targets: '.top-content',
        opacity: 0,
        duration: 150,
      },
      8600
    )
    .add(
      {
        targets: '.bottom-content',
        opacity: 0,
        duration: 150,
      },
      8600
    )
    .add(
      {
        targets: '.center-content',
        width: '0%',
        scaleX: 0,
        duration: 3500,
      },
      8500
    );
});

function setProperty(data) {
  data = data || {};
  data.backgroundImage = data.backgroundImage || './assets/img/banner.png';
  data.matchPoster = data.matchPoster || './assets/img/OgImage_en.png';
  document.title = data.pageTitle || '---FF GAME---';
  document.body.style.backgroundImage = 'url(' + data.backgroundImage + ')';
  document.getElementById('first-one').innerText = data.teamOne || 'Team One';
  document.getElementById('first-two').innerText = data.teamTwo || 'Team Two';
  document.getElementById('city-name').innerText = data.cityName || 'City Name/Venue';
  document.getElementById('match-round').innerText = data.match || 'Round 1, Group B, 24 February';
  document.getElementById('team-one-flag').src = data.teamOneFlug || './assets/img/city.jpg';
  document.getElementById('team-two-flag').src = data.teamTwoFlug || './assets/img/city.jpg';
  document.getElementById('team-one-flag').alt = data.teamOneFlugAlt || 'team one flag';
  document.getElementById('team-two-flag').alt = data.teamTwoFlugAlt || 'team two flag';
  document.getElementById('game-year').innerText = data.gameYear || '#EUROBASKET2021';
  document.getElementById('match-poster').style.backgroundImage = 'url(' + data.matchPoster + ')';
  propertySet = true;
}

function playAnimation() {
  if (animation) {
    animation = false;
    animationflow.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    if (!propertySet) {
      setProperty(matchProperty);
    }

    animation = true;
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
    animationflow.play();
  }
}

function switchSound() {
  if (sound) {
    soundButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    sound = false;
  } else {
    soundButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    sound = true;
  }
}
