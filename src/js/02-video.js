import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const onPlay = function (e) {
  const currentTime = e.seconds;

  // console.log('video played!', currentTime);
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
  save(STORAGE_KEY, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timeForLoad = load(STORAGE_KEY);
player
  .setCurrentTime(timeForLoad)
  .then(function (seconds) {
    // console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
