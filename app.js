//? Ödev1
let sayı1= +prompt(`sayı giriniz`);
let islem= prompt(`yapmak isteğiniz işlem`);
let sayı2= +prompt(`sayı giriniz`);

if(islem == `*`){
    sonuc = sayı1*sayı2;
    alert(sonuc);
}else if(islem === `+`) {
    sonuc = sayı1+sayı2;
    alert(sonuc);
}else if(islem == `-`) {
    sonuc = sayı1-sayı2;
    alert(sonuc);
}else if(islem == `/`) {

 sonuc = sayı1/sayı2;
 alert(sonuc);
}else{
    alert(`hatalı giris`);
}
       





    

    



  


     

    

//?ödev2

let day = +prompt(`Günü Giriniz`);
let dayName;
let dayEvent;
switch(day){
     case 1:
        dayName=`Pazartesi`;
        dayEvent=`inclass`;
     break; 

     case 2:
         dayName=`Salı`;
        dayEvent=`inclass`;
       
         break;

     case 3:
         dayName=`Çarşamba`;
         dayEvent=`inclass`;
        
        break;
     case 4:
         dayName=`Perşembe`;
         dayEvent=`inclass`;
         
        break;

     case 5:
        dayName=`Cuma`;
        dayEvent=`Teamwork`;
        
         break;
     case 6:
         dayName=`Cumartesi`;
        dayEvent=`inclass ve workshop`;
        
        break;
    case 7:
         dayName=`Pazar`;
         dayEvent=`tatil`;
         
          break;   

        default:
            alert(`hatalı giriş`);
            break;

}
alert(`${dayName} günü ${dayEvent}`);

// //?Ödev3

let maas= +prompt(`Maaşınızı Giriniz`);
let zamlıMaas;

if(maas<= 5500) {
    maas *= 1.5;
    alert(`Maaşınızın zamlı hali: ${maas}`);
}else if(maas > 5500) {
maas = maas + maas*1.1;
    alert(`Maaşınızın Zamlı Hali: ${maas}`);


}else {
    alert('hatalı giriş');
}
    
// //? Ödev4

let gelir =+prompt(`Geliriniz`);

let gider =+prompt(`Gideriniz`);

let kredi = (gelir - gider >= 5500) ? `Kredi alabilirsiniz`: `kredi verilemez` ;
 
console.log(kredi);