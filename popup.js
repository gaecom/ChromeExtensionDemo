/* 
 * Chrome tts API
 */
function speakInputText() {
    const input_string = document.getElementById("tts").value
  const ttsOptions = {
    enqueue: false,
    rate: 1.0,
    volume: 1.0,
    requiredEventTypes: ["start", "word", "sentence"],
    onEvent: function (event) {
        console.log(event.type)
    },
  };
  chrome.tts.speak(input_string, ttsOptions);
}

document.getElementById("speak").addEventListener("click", speakInputText);

/* 
 * Chrome Permissions API
 */
document.querySelector('#permission').addEventListener('click', function(event) {
    // Permissions must be requested from inside a user gesture, like a button's
    // click handler.
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: ['http://www.google.com/']
    }, function(granted) {
      // The callback argument will be true if the user granted the permissions.
      if (granted) {
        // do something
      } else {
        // do something else eg: permission denied
      }
    });
  });