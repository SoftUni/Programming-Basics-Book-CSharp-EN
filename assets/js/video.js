gitbook.events.bind("page.change", function() {
    let videoLinks = $("p:contains('video') a, div.video-player a");
    for (let link of videoLinks) {
        let regex = /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+).*|youtu\.be\/([a-zA-Z0-9_-]+).*/gi;
        let matches = regex.exec(link.href);
        if (matches) {
            // A https://www.youtube.com/watch?v=... or https://youtu.be/... link is found --> display the video player
            let videoId = matches[1] || matches[2];
            let iframe = "<div class='video-player'><iframe src='https://www.youtube.com/embed/" + 
                videoId + "' frameborder='0' allowfullscreen></div>";
            $(link).parent().html(iframe);
        }
    }
});
