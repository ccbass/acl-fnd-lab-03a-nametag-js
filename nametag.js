const nametag = document.getElementById('name-display'); 
const pronounsArea = document.getElementById('pronoun-display'); 
const inputButton = document.getElementById('clickme');
const fontButton = document.getElementById('font-btn');


const pinkColorButton = document.getElementById('pink-color-btn');
const greenColorButton = document.getElementById('green-color-btn');
const blueColorButton = document.getElementById('blue-color-btn');
const pronounsButton = document.getElementById('pronouns-btn');


const nameHandler = () => {
    const inputName = document.getElementById('input-name');
    let limit = '';
    limit = inputName.value.slice(0, 18);
    if (limit.length > 0){
        nametag.textContent = limit;
    }
    inputName.value = '';
};


const colorHandler = (e) => {
    const tagTop = document.getElementById('nametag-top');
    const tagBottom = document.getElementById('nametag-bottom');

    tagTop.style.background = e.target.value;
    tagBottom.style.background = e.target.value;
};


let fonts = ['Rock Salt', 'monospace', 'Permanent Marker', 'sans-serif'];
let defaultFont = 0;
let count = 0;
nametag.style.fontFamily = fonts[defaultFont];
pronounsArea.style.fontFamily = fonts[defaultFont];


const fontChanger = () => {
    defaultFont++;
    count++;
    if (defaultFont > 3){
        defaultFont %= 4;
    }
    nametag.style.fontFamily = fonts[defaultFont];
    pronounsArea.style.fontFamily = fonts[defaultFont];

    if (defaultFont !== 0){
        nametag.style.fontSize = '2.5rem';
    } else {
        nametag.style.fontSize = '2rem';
    }

    let time = count === 1 ? 'time' : 'times';

    fontButton.textContent = `Change Font! (changed ${count} ${time}!)`;
};


let pronouns = ['he/him', 'she/her', 'they/them',
    'he/they', 'she/they', 'they/he', 'they/she'];
let pronounsPos = 0;

pronounsArea.textContent = pronouns[pronounsPos];

const pronounsChanger = () => {
    pronounsPos++;
    if (pronounsPos > 6){
        pronounsPos %= 7;
    }
    pronounsArea.textContent = pronouns[pronounsPos];
};





inputButton.addEventListener('click', nameHandler);
pinkColorButton.addEventListener('click', colorHandler);
greenColorButton.addEventListener('click', colorHandler);
blueColorButton.addEventListener('click', colorHandler);
fontButton.addEventListener('click', fontChanger);
pronounsButton.addEventListener('click', pronounsChanger);