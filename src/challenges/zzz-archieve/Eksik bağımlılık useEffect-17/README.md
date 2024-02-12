<!-- Fark etmişsinizdir ki, kod "Uncaught RangeError: Maximum call stack size exceeded" hatasına ulaşıyor ve sonsuz bir döngüye neden oluyor.
Bu durum, eksik olan useEffect bağımlılığından kaynaklanmaktadır. Bu bağımlılık, useEffect'e fonksiyonun, bağımlılık değiştiğinde çalıştırılmasını "söyler"
Bağımlılık olmadan, useEffect herhangi bir yeniden render sonrasında etkin olacaktır (setArr yaptığımızda bir yeniden render'a neden oluruz)
Yeni eklemeye rağmen, kod hala "Uncaught RangeError: Maximum call stack size exceeded" hatasına ulaşıyor.
Bu tür bir hata oldukça zor anlaşılır. Eğer kodu bu şekilde çalıştırırsak
useEffect(()=>{
  setArr(arr)
},[arr])
}

...sonsuz bir döngüye neden olmayız.
Bu farkı nasıl açıklayabiliriz?
. -->
