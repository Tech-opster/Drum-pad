<<<<<<< HEAD
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('#play').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('#input').value = '';
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(sound == 'keyz' || sound == 'keyx' || sound == 'keyc') {
        keyElement.classList.add('active', 'activePlate');

    } else if (sound == 'keye' || sound == 'keya' || sound == 'keys' || sound == 'keyd') {
        keyElement.classList.add('active', 'activeTom');

    } else if (sound == 'keyq' || sound == 'keyw') {
        keyElement.classList.add('active', 'activeKick');
    }

    setTimeout(() => {
        keyElement.classList.remove('active', 'activePlate', 'activeTom', 'activeKick');
    }, 300);
};

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem.toLowerCase()}`);
        }, wait);
        
        wait += 250;
    }
=======
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('#play').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('#input').value = '';
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(sound == 'keyz' || sound == 'keyx' || sound == 'keyc') {
        keyElement.classList.add('active', 'activePlate');

    } else if (sound == 'keye' || sound == 'keya' || sound == 'keys' || sound == 'keyd') {
        keyElement.classList.add('active', 'activeTom');

    } else if (sound == 'keyq' || sound == 'keyw') {
        keyElement.classList.add('active', 'activeKick');
    }

    setTimeout(() => {
        keyElement.classList.remove('active', 'activePlate', 'activeTom', 'activeKick');
    }, 300);
};

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem.toLowerCase()}`);
        }, wait);
        
        wait += 250;
    }
>>>>>>> e84538b (ok)
};