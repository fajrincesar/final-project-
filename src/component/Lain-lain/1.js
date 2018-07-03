// var arr = [2000, 3000, 4000]
// var total = 0
// for (i=0; i<arr.length; i++){
//   total += arr[i]
// }

// console.log(total)

var x = [40, 100, 1, 5, 25, 10]
var y = [40, 100, 1, 5, 25, 10]
x.sort(function (a,b){
  return a-b
})
y.sort(function (a,b){
  return b-a
})
console.log(x)
console.log(y)
console.log(x[0])
console.log(x[x.length-1])

var x = [40, 100, 1, 5, 25, 10] 

function nmin(a){
  return Math.min.apply(null, a)
}

function nmax(a){
  return Math.max.apply(null, a)
}

console.log (nmin(x))
console.log(nmax(x))

function Pangkat(x,y){
  if (y == 1) {
  return x;
  }
  else {
  return x=x*Pangkat(x,y-1);
  }
  }
  console.log(Pangkat(7,2))

  function kali(xx) {
    if (xx < 2) {return 1;}
    else {return (xx * tiga());}
    }
    function tiga(){
    return 3;
    }
    console.log(kali(5))


function kali(e,f){
  g=e*f;
  return g;
}

console.log(kali(2,2))

// let buah, bPjg, i;
// buah = ['Jeruk', 'Nanas', 'Apel'];
// bPjg = buah.length;
// for (i = 0; i < bPjg; i++) {
// console.log(buah[i]);
// }

// var arrayKu = [
//   ['Andi',24,'PNS'],
//   ['Budi',28,'Pengacara'],
//   ['Caca',21,'Siswa'],
//   ]
//   arrayKu[0].sort()
//   arrayKu[1].reverse()
//   console.log(arrayKu[0])
//   console.log(arrayKu[1])

// let buah = ['Jeruk','Nanas','Apel'];
// buah.push('Duku');
// console.log(buah)
// buah[buah.length] = 'Pisang';
// console.log(buah)
// buah[6] = 'Mangga';
// console.log(buah)