function startPalyback(clickShield) {
    // Remove shield element
    clickShield.parentElement.removeChild(clickShield);
    //
    var audioPlayer = document.getElementById('audio-player');
    //
    audioPlayer.play();
    // Get player's IFrame
    var videoPlayer = document.getElementById('video-player');
    // Send message to toggle play/pause
    videoPlayer.contentWindow.postMessage('togglePlayPause', '*');
}