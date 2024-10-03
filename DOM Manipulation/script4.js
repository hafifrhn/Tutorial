// Manipulasi Element
// element.innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Hafif Raihan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!';

// element.style.<propertiCSS>

// const judul = document.querySelector('#judul');
// judul.style.color = 'skyblue';
// judul.style.backgroundColor = 'salmon';

// element.getAttribute >> element.setAttribute() >>  element.removeAttribute

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Hafif');

// element.classList >> element.classList.add >> element.classList.remove >. element.classList.toggle >> element.classList.item >> element.classList.contains >> element.classList.replace

const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');
p2.classList.toggle('label');
