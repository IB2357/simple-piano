let key = 0;
let sound;

// To play with the cursor
function play_note(n) {
    sound = new Audio(`notes/note${n}.wav`)
        sound.play()
}

// To play with the keyboard
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'a':
            play_note(1);
            break;
        case 's':
            play_note(2);
            break;
        case 'd':
            play_note(3);
            break;
        case 'f':
            play_note(4);
            break;
        case 'g':
            play_note(5);
            break;
        case 'h':
            play_note(6);
            break;
        case 'j':
            play_note(7);
            break;
    }
});