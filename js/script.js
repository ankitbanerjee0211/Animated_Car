var audio1 = document.createElement('audio');
document.body.appendChild(audio1);
audio1.setAttribute('src', 'assets/audio/sound.mp3');
audio1.loop = true;
audio1.volume = 0.1;
audio1.play();

var audio2 = document.createElement('audio');
document.body.appendChild(audio2);
audio2.setAttribute('src', 'assets/audio/sound2.wav');
audio2.loop = true;
audio2.volume = 0.15;
audio2.play();