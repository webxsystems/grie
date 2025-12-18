import backgroundVideo from './background-video.js';

const VIDEO_CONTAINER = document.querySelector('#video_container');
const VIDEO_COVER = document.querySelector('#video_cover');

new backgroundVideo({
  container: VIDEO_CONTAINER,
  src: [{
      src: 'video/REC057',
      types: ['mp4'],
    },
    {
      src: 'video/REC057',
      types: ['mp4'],
    },
    {
      src: 'video/REC057',
      types: ['mp4'],
    },
    {
      src: 'video/REC057',
      types: ['mp4'],
    }
  ],
  onLoad: () => VIDEO_COVER.style.display = 'none'
});
