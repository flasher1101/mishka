'use strict';

let player = document.querySelector('#player');
let thumbnail = document.querySelector('.manufacture__img');
let playBtn = document.querySelector('.manufacture__play');

playBtn.addEventListener('click', function() {
  thumbnail.style.display = 'none';
  playBtn.style.display = 'none';
  player.style.zIndex = '1';


  player = new YT.Player(player, {
    height: '720',
    width: '1280',
    videoId: 'gocwRvLhDf8',
    playerVars: {
      'playsinline': 1,
      modestbranding: 1,
    },
    events: {
    }
  });
});

function onYouTubeIframeAPIReady() {

}

