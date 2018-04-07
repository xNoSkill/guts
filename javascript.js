function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}

document.ontouchmove = function (e) { e.preventDefault(); }

var vid = document.getElementById("myVideo");
{vid.volume = 0.2; }