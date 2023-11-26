

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';


const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomIndex4 = Math.floor(Math.random() * alphabet.length);


const randomChar1 = alphabet.charAt(randomIndex1);
const randomChar2 = alphabet.charAt(randomIndex2);
const randomChar3 = alphabet.charAt(randomIndex3);
const randomChar4 = alphabet.charAt(randomIndex4);


const randomWord = randomChar1 + randomChar2 + randomChar3 + randomChar4;
console.log('Рандомное слово:', randomWord);
