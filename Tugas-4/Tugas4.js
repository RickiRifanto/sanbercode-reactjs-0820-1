// soal 1
for(var deret = 2; deret < 20; deret += 2) {
  console.log(deret + " - I love coding");
}
 
console.log('Looping kedua');
 
for(var deret = 20; deret > 0; deret -= 2) {
  console.log(deret + " - I will become a frontend developer");
} 

// soal 2 s
for(var b = 1; b <= 20; b++)
    {
        if((b%2)==0)
        {
            console.log(b+'- Berkualitas') 
        }
        else if ((b%2)==0 || (b%3)==0) 
        {
            console.log(b+ '- I Love Coding')
        }
        else if ((b%2)==1) 
        {
        console.log(b+ "- Santai")
        }
    }

// soal 3
var row = 7;

for (var i = 1; i <= row; i++) {
  var result = '';
  for (var j = 1; j <= i; j++) {
        result+='#';
    }
  console.log(result);
}

// soal 4
var kalimat="saya sangat senang belajar javascript"
var no4 = kalimat.split(" ")
console.log(no4)

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarbuah2 = daftarBuah.sort()
for(var m= 0; m <daftarbuah2.length; m++) {
    console.log(daftarbuah2[m]);
  }