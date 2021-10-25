const playMusic = document.querySelector('#play');
const keys = document.querySelectorAll('li');

const synth = new Tone.PolySynth().toDestination();
const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();
const now = Tone.now();

keys.forEach(key => {
    key.addEventListener('click', async (e) => {
        const note = e.target.classList[1];
        sampler.triggerAttackRelease(note, now);    
    })
});