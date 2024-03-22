document.getElementById('toggleButton').addEventListener('click', function() {
    var button = document.getElementById('toggleButton');
    if (button.textContent === 'On') {
        button.textContent = 'Off';
    } else {
        button.textContent = 'On';
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {toggleGifAndButton: true});
    });
});