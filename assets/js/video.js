gitbook.events.bind("page.change", function() {
    let videos = $(".video-player");
    for (let video of videos) {
        let videoText = video.innerText;
        let regex = /watch\?v=([a-zA-Z0-9_-]+)?/g;
        let matches = regex.exec(videoText) || [''];
        let videoId = matches[1];
        let iframe = "<iframe src='https://www.youtube.com/embed/" + 
            videoId + "' frameborder='0' allowfullscreen>";
        $(video).html(iframe);
    }
});
