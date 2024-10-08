const container = document.querySelector('.container');
const picsBig = document.querySelector('.picsBig');
const picsSmall = document.querySelectorAll('.picsSmall');

container.addEventListener('click', function(e){

  if(e.target.className == 'picsSmall'){
    picsBig.src = e.target.src;
    picsBig.classList.add('fade');
    setTimeout(function(){
      picsBig.classList.remove('fade');
    }, 500)

    picsSmall.forEach(function(picsSmall){
      // if(picsSmall.classList.contains('active')){
      //   picsSmall.classList.remove('active');
      // }
      picsSmall.className = 'picsSmall';
    });

    e.target.classList.add('active');
  }
});