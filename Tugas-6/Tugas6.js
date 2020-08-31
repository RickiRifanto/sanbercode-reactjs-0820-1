// soal 1
let r
const phi = r % 7 === 0 ? 22/7 : 3.14;
const luaslingkaran =r=> phi*r*r

const kelilinglingkaran=r=> 2*phi*r

let x= 7
console.log ("Jari -jari : "+x)
console.log("Luas lingkaran : "+ luaslingkaran(x))
console.log("Keliling lingkaran : "+ kelilinglingkaran(x))

// soal 2

let kalimat =""
const tambahkata=(kata)=>{
    kalimat=kata
}
const kata1='saya'
const kata2='adalah'
const kata3='seorang'
const kata4='frontend'
const kata5='developer'
const kata = `${kata1}  ${kata2} ${kata3} ${kata4} ${kata5}`
tambahkata(kata)
console.log(kalimat)

// soal 3

const newFunction = function literal(firstName, lastName){
    return {
    firstName,
    lastName,
    fullName(){
    console.log(firstName + " " + lastName)
    return 
    }
    }
   }
   newFunction("William", "Imoh").fullName()

// soal 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
   }
   const {firstName, lastName, destination, occupation} = newObject;
   console.log(firstName, lastName, destination, occupation)

// soal 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)