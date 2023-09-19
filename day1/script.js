const keySoundMapping = {
    'KeyA': 'clap',
    'KeyS': 'hihat',
    'KeyD': 'kick',
    'KeyF': 'openhat',
    'KeyG': 'boom',
    'KeyH': 'ride',
    'KeyJ': 'snare',
    'KeyK': 'tom',
    'KeyL': 'tink',
}

document.addEventListener("keydown", (event) => {
    if (Object.keys(keySoundMapping).includes(event.code)) {
        const id = keySoundMapping[event.code];
        document.getElementById(`${id}-key`).classList.add('playing');
        document.getElementById(id).play();
        setTimeout(() => {
            document.getElementById(`${id}-key`).classList.remove('playing');
        }, 200);
    }
});