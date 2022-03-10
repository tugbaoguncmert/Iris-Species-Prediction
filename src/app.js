console.log("Hello World")

//JS type safe değildir.
let dolarDun = 9.20 //---> var yerine let kullanmalıyız. 
let dolarBugun = 9.30

{
    //bloktaki variable değişikliği blok dışına etki etmez.
    let dolarDun =9.10
}

console.log(dolarDun)

const euroDun = 11.2  //const variable type kullanırsan ona başka bir şey atayamazsın.
//euroDun = 11 //Uncaught (in promise)  -

console.log(euroDun)

//Array
//camelCasing --> değişken tanımlarken dikkat et. küçük harfle başlayıp büyük harfle devam etmektir
//PascalCasing --> method ismi tanımlarken dikkat et. Büyük harfle başlayıp büyük harfle devam etmektir.
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log(konutKredileri) //(3) ['Konut Kredisi', 'Emlak Konut Kredisi', 'Kamu Konut Kredisi']


//let users = getUsersFromApi()

console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>") 
}

console.log("</ul>")