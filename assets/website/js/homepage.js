'use strict';

import $ from "jquery";
import '../css/homepage.scss';
import loadYoutubePlayer from './Components/YTPlayer';
import ResponsiveYoutubePlayer from './Components/ResponsiveYoutubePlayer';

loadYoutubePlayer('player-1');
const newPlayer = new ResponsiveYoutubePlayer('video-player-container-1');

$(window).on('resize', newPlayer.resizeYoutubePlayer.bind(newPlayer));
$(window).on('load', newPlayer.resizeYoutubePlayer.bind(newPlayer));
