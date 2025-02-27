 // string veri tipinden number veri türüne dönüştürmek 

  let a=5;
  let b="10";
console.log(a+b);

let c =Number(b);
console.log(typeof c);
console.log(a+c);

let d =15;
let e=parseInt("13"); // parsefloat virgüllüler için kullanılır.

console.log(d+e); 

// number tipinden string veri tipine dönüştürmek 

let x = String(55);
console.log(typeof x);
console.log(x);

let y= (65).toString();
console.log(typeof y);
console.log(y);

let sonuc= String(true);
console.log(sonuc);
console.log(typeof sonuc); // boolean değerler de stringe dönüşebilir

let rakamlar= String([1,2,3,4]);
console.log(typeof rakamlar);