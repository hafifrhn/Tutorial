// DOM Selection
// document.querySelector() => Menghasilkan Element

const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'skyblue';

// document.querySelectorAll()

const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
  p[i].style.backgroundColor = 'skyblue';
}
