## Mājas darbs 1
### Uzdevumi:
 * Repozitorijā izveidot papildu mapi - MajasDarbi.

* Izveidotajā mapē uztaisīt dokumentu MD1.md.

* Mapē un attiecīgi md failā salikt piemērus ar attēliem un nelieliem aprakstiem no visas www pasaules (no tīkla lapām) ar:
### ar mainīgo izmantošanu
* Mainīgā "var" izmantošanas piemērs:
  
var count = 0;
* Mainīgā "let" izmantošanas piemērs:
  
let age = 30;
* Mainīgā "const" izmantošanas piemērs:
  
const name = "Alice";

### ar masīvu izmantošanu
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);

### vismaz ar piecu dažādu metožu izmantošanu saistībā ar masīviem
const numbers = [1, 2, 3, 4, 5];

numbers.push(6);

numbers.pop();

numbers.shift();

numbers.unshift(0);

console.log(numbers.join(", "));

### ar nosacījuma operatora (if) izmantošanu
let age = 18;

if (age >= 18) {

    console.log("Pilngadīgs");
    
} else {

    console.log("Nepilngadīgs");
    
}

### ar pārslēgšanas operatora (switch) izmantošanu
let day = "Monday";

switch (day) {

    case "Monday":
    
        console.log("Šodien ir pirmdiena");
        
        break;
        
    case "Tuesday":
    
        console.log("Šodien ir otrdiena");
        
        break;
        
    default:
    
        console.log("Šī diena nav nedēļas sākumā");
        
}

### ar cikla operatora (for) izmantošanu
for (let i = 0; i < 5; i++) {

    console.log(i);
    
}

### ar cikla operatora (while) izmantošanu
let count = 0;

while (count < 5) {

    console.log(count);
    
    count++;
    
}

### ar funkcijas definēšanu (klasiskais paņēmiens - function vārds(argumenti) {darbības; return ...;})
function add(a, b) {

    return a + b;
    
}

console.log(add(2, 3));

### ar funkcijas definēšanu (anonīma funkcija)
const greeting = function(name) {

    return "Hi, " + name;
    
};

### ar funkcijas definēšanu (anonīmas funkcijas nosaukšana ar piešķiršanu)
const divide = function(a, b) {

    return a / b;
    
};

console.log(divide(10, 2));


### ar funkcijas definēšanu (ar => paņēmienu)
const add = (a, b) => a + b;

console.log(add(2, 3));

### ar funkcijas izsaukšanu (darbināšanu)
function greet(name) {

    console.log("Sveiks, " + name + "!");
    
}

greet("Anna");

### ar pagaidu papildu references izveidošanu eksistējošam objektam - kompaktākai rakstīšanai
const user = { name: "John", age: 30 };

const { name, age } = user;

console.log(name);

console.log(age);
