document.addEventListener('DOMContentLoaded', () => {
    const ukAudio = new Audio('https://dictionary.cambridge.org/media/english/uk_pron/u/ukc/ukcld/ukcld00338.mp3');
    const usAudio = new Audio('https://dictionary.cambridge.org/media/english/us_pron/u/usc/uscld/uscld00338.mp3');
    const ukBtn = document.querySelector('.uk-audio');
    const usBtn = document.querySelector('.us-audio');

    ukBtn.addEventListener('click', () => {
        ukAudio.play().catch(error => {
            console.error('Error playing UK audio:', error);
            alert('Failed to play UK audio. Check your browser settings.');
        });
    });

    usBtn.addEventListener('click', () => {
        usAudio.play().catch(error => {
            console.error('Error playing US audio:', error);
            alert('Failed to play US audio. Check your browser settings.');
        });
    });
});