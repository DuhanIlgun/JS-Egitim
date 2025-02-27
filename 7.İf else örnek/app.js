  // ad ve tc kimlik ile giriş

  let ad=prompt("Lütfen isminizi giriniz :");

  let tc= prompt("Lütfen 11 haneli tc kimlik numaranızı giriniz:");

 // KontrolEt(ad,tc);

 KontrolEt2(ad,tc);

  function KontrolEt(ad , tc){
    if(ad!=""){
        if(tc.length==11){
            console.log("Başarılı isim ve tc kimlik girişi");
        }
        else{
            console.log("lÜTFEN TCNİZİ 11 HANELİ GİRİNİZ")
        }
      
    }
    else{
        console.log("Lütfen isim alanını boş bırakmayın");
    }
   
  }

  function KontrolEt2(ad,tc){
    if(ad=""){
        console.log("Lütfen isim alanını boş bırakmayın");
        return;
    }
    
    if(tc.length!==11){
        console.log("Lütfen 11 haneli tc kimlik numaranızı giriniz");
        return;
    }

      console.log("İism ve tc sorunsuz girildi");


  }

 