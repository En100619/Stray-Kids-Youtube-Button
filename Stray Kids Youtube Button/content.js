function toggleGifAndButton() {
    var logoIcon = document.querySelector('#logo-icon');
    var youtubeButton = document.querySelector('#youtubeButton');
    
    if (logoIcon.style.display === 'none') {
        logoIcon.style.display = 'block';
        youtubeButton.style.display = 'none';
    } else {
        logoIcon.style.display = 'none';
        youtubeButton.style.display = 'block';
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.toggleGifAndButton) {
        toggleGifAndButton();
    }
});