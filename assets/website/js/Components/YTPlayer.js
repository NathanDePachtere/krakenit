'use strict';
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onPlayerReady(event) {
    event.target.playVideo();
}

function loadYoutubePlayer(given_player_name){
    window.onYouTubeIframeAPIReady = function (player_name = given_player_name) {
        player = new YT.Player(player_name, {
            width: '100%',
            height: '100%',
            videoId: 'p0bbMLkOat4',
            playerVars: {
                playlist: 'p0bbMLkOat4',
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                loop: 1,
                rel: 0
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
}

export default loadYoutubePlayer;