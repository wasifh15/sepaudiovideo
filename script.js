// Labels of "last" clips
var lightEndClipLabel = 'Scene_05_White_ONLY';
var darkEndClipLabel = 'Scene_06_END';

function startPlayback(clickShield) {
    // Remove shield element
    clickShield.parentElement.removeChild(clickShield);
    // Get Audio element for background music
    var musicPlayer = document.getElementById('music-player');
    // Play background music
    musicPlayer.play();
    // Get player's IFrame
    var videoPlayer = document.getElementById('video-player');
    // Send message to toggle play/pause
    videoPlayer.contentWindow.postMessage('togglePlayPause', '*');
    // Start listening to player's events
    window.addEventListener('message', onPlayerMessage);
}

function onPlayerMessage(event) {
    // If event data has expected format
    if (typeof event.data === 'string') {
        // Data string may contain invalid JSON, so use try-catch
        try {
            // Parse message
            var message = JSON.parse(event.data);
            // If this a message from player about current clip change
            if (message.context === 'adventr' && message.event === 'videoclipchanged') {
                console.log(message.value);
                // Get current clip label
                var currentClipLabel = message.value.label;
                // If this is one of the "last" clips
                if (currentClipLabel === itm-feheren-16sec-13-06q1-1 || currentClipLabel === itm-feketen-16sec-13-ax9w-1) {
                    // Get Audio element for background music
                    var musicPlayer = document.getElementById('music-player');
                    // Pause background music
                    musicPlayer.pause();
                    // Get Audio element for speech
                    var speechPlayer = document.getElementById('speech-player');
                    // Play speech at the end of video
                    speechPlayer.play();
                }
            }
        } catch (e) {
            // Do nothing
        }
    }
 }
