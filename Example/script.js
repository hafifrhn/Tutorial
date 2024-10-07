const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
  //document.body.style.backgroundColor = 'skyblue'; // >> Khusus Body tidak perlu ditangkap dengan DOM Selections
  //document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
}

const tWarnaBebas = document.createElement('button');
const teksTombol = document.createTextNode('Warna Bebas');
tWarnaBebas.appendChild(teksTombol);
tWarnaBebas.setAttribute('type', 'button');
tUbahWarna.after(tWarnaBebas);

tWarnaBebas.addEventListener('click', function(){
  // fungsi pembulatan >> floor = pembulatan kebawah, ceiling = pembulatan keatas dan round
  const r = Math.round(Math.random() * 255); 
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// Slider

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


sHijau.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

sBiru.addEventListener('input', function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// Mouse Move

document.body.addEventListener('mousemove', function(event){
  // Posisi Mouse
  // console.log(event.clientX) // >> clientX dan clientY
  // Ukuran Browser
  // console.log(window.innerWidth); // >> innerWidth (X) dan innerHeight (Y)

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';

});