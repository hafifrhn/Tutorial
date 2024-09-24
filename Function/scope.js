var a = 1; // <<Global Scope / Window Scope

function tes(){
  var a = 2; // Name Conflict, jika punya 2 variabel yang namanya sama tapi Scope nya beda
  console.log(a);
}

tes();
console.log(a);