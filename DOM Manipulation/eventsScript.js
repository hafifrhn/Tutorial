// // DOM Events
// // on(events) >> cth : onclick

// const p3 = document.querySelector('.p3');

// function ubahWarna(){
//   p3.style.backgroundColor = 'skyblue';
// }

// p3.onclick = ubahWarna;

// // addEventListener('' function(){});

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//   const ul = document.querySelector('section#b ul');
//   const liBaru = document.createElement('li');
//   const teksLiBaru = document.createTextNode('item baru');
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

// // Event Handler >> Menimpa Event Sebelumnya, warna biru tulisan menimpa skyblue background, yang tampil blue
// const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//   p3.style.backgroundColor = 'skyblue';
// }

// p3.onclick = function(){
//   p3.style.color = 'blue';
// }

const p3 = document.querySelector('.p3');
p3.addEventListener('click', function(){
  p3.style.backgroundColor = 'skyblue';
});
p3.addEventListener('click', function(){
  p3.style.color = 'blue';
});
