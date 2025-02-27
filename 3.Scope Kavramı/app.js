// 1. Global Scope

var a=5; // her yerden erişebiliyoruz

if(a>3){
    console.log(a);
}

function method1(){
    console.log(a);
}

method1();

//2. Function Scope 
    // sadece kendi kıvırcık parantezleri içinde çalışır yazdırma işlemini dışında yaparsak çalışmaz
function method2(){
    var sayi=10;
    console.log(sayi);
}
method2();

//3 . Block Scope

function method3(){
   
    var a=8; //function scope
    if(true){
        var b=12; //block scope
    }
    while(true){

    }
    for(let i=0; i<5;i++){

    }

    // let ve const block scope özelliği taşırlar var gibi değillerdir kıvırcık parantez dışında kullanılamaz.
    // var ram bellekte çok fazla yer kaplar aynı değişken ismi kullanılarak birden fazla oluşturulabilir let ve consta bunu yapamıyoruz.
    // const sabittir değeri değişmez.
}