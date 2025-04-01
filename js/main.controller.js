
const sound = new Audio('sound/happy-birthday-to-you-jazz-94100.mp3')

function onStart() {
	document.querySelector('.start').classList.add('hide')
	document.querySelector('.main').classList.remove('hide')
	startConfetti() 
	sound.play()
}

function onPlay(elCheckbox) {
    if (!elCheckbox.checked) {
        sound.play()
    } else {
        sound.pause()
    }
}