import $ from "jquery";

class ResponsiveYoutubePlayer{
    constructor(id){
        this._videoElement = $('#'+id);
        console.log(this._videoElement);
    }

    resizeYoutubePlayer(){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let aspectRatio = 1.78;
        let videoHeight = windowHeight;
        let videoWidth = videoHeight*aspectRatio;
        if (windowWidth > videoWidth) {
            videoWidth = windowWidth;
            videoHeight = videoWidth*0.56;
            this._videoElement.css({"width":videoWidth+"px","height":videoHeight+"px"});
        }else {
            this._videoElement.css({"width":videoWidth+"px"});
        }
    }
}

export default ResponsiveYoutubePlayer;