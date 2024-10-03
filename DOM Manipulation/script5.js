// Manipulasi Node
// node.appendChild()
// Buat Elemen Baru

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

// Simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru diakhir Section A
const sectionA = document.getElementById('a'); // sectionA dipake di bagian parentNode.removeChild()
sectionA.appendChild(pBaru);

// node.insertBefore()

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2');

ul.insertBefore(liBaru, li2);

// parentNode.removeChild()

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// parentNode.replaceChild()

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'skyblue';
liBaru.style.backgroundColor = 'skyblue';
h2Baru.style.backgroundColor = 'skyblue';
