const checkbox = document.getElementsByClassName("switch--shadow")[0];
const bg = document.querySelector('body');
const audio = document.getElementById('audio');

const theme = () => {
    audio.play();

    if (checkbox.checked) {
        bg.style.backgroundColor = "#292C35";
    } else {
        bg.style.backgroundColor = "#F1F1F1";
    }

}

