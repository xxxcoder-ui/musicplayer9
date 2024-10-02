let repeatButton = document.getElementsByClassName("icon-repeat");
track.addEventListener("ended", function () {
    controlBtn.className = "play";
    track.currentTime = 0; // reset the playhead

    // Let's check if the repeat button is on, then play the track again.
    let times = repeatButton[0].getAttribute("repeat");
    if (times > 0) {
    controlBtn.className = "";
    controlBtn.className = "pause";
    track.play();
    }
});
// Repeat
repeatButton[0].onclick = function () {
    repeatButton[0].setAttribute("repeat", 0);
    repeatButton[0].classList.toggle("icon-repeat-again");

    if (repeatButton[0].classList.contains("icon-repeat-again")) {
    repeatButton[0].setAttribute("repeat", 1);
    }
};
