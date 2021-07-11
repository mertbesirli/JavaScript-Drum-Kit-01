function removeTransition(e) {
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0; //For press multiple time to same element
    audio.play();
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
