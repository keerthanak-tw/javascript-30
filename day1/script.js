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
        document.getElementById(keySoundMapping[event.code]).play();
    }
});