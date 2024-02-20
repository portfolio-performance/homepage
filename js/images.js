let currentIndex = 0;

function changeImages(increment) {

    currentIndex += increment;

    if (currentIndex >= 4) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = 3;
    }

    desktopImage = document.getElementById('desktopImage');
    desktopImage.src = desktopImage.src.replace(/\d+\.png/, (currentIndex + 1) + '.png');

    phoneImage = document.getElementById('phoneImage');
    phoneImage.src = phoneImage.src.replace(/\d+\.png/, (currentIndex + 1) + '.png');;
}

document.getElementById('nextButton').addEventListener('click', e => changeImages(1));
document.getElementById('prevButton').addEventListener('click', e => changeImages(-1));
