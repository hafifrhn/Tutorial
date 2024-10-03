// CARA BUAT KOMENTAR CEPAT >> CTRL + / (SLASH)
// DOM Selection
// document.getElementById() => Mengembalikan 1 Element

const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'skyblue';

// document.getElementsByTagName() => Mengembalikan HTMLCollection

const p = document.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
  p[i].style.backgroundColor = 'skyblue';
}

// document.getElementsByClassName() => Mengembalikan HTMLCollection

const p1 = document.getElementsByClassName('p1');
