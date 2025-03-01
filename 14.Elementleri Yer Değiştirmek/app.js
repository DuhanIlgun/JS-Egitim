
const cardBody= document.querySelectorAll(".card-body")[1];

const newTtile=document.createElement("h2");
newTtile.className="card-title";
newTtile.textContent="Todo listesi-Yeni";

console.log(cardBody.childNodes[1]);

 cardBody.replaceChild(newTtile,cardBody.childNodes[1]);  // Yer değiştirmeye yarar ilk kısma yeni olanı diğer tarafa da node şeklinde eskisini yazmamız lazım.


 
