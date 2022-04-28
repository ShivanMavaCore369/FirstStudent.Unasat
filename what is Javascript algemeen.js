// My First Javascript code ("Student f Unasat")

// dit is een ("Primitivie / Value Types") van codering.
let name = "Shivan"; // String Literal
let age = 29; // Number Literal
let isApproved = true or false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// javaScript is een ("Dynamic Language") v.b:
let name = "Shivan"; // typeof firstName chekken in je console...(Live Server...)

// ("Reference Types"):
Ojects => // wat is een Oject?? object kan je herkennen met dit vraagteken symbol nl:
{} // en hier in tussen schrijf je dan je object. laten we kijken naar een voorbeeld:
let name =("Shivan")
let age = 29;
let person = {
  name: "Shivan"
  age: 29 
}; // om dit te laten runnen moet je console.log(person); typen en saven!!! je hebt 2 verschillende Notation nl: 1. Dot Notation en 2. Bracket Notation: 
// voorbeeld van Dot Notation:
person.name = "Shivan"; => // dit is de beste manier om het te gebruiken als een beginner.! 
// voorbeeld van Bracket Notation:
person["name"]= "Shivan";

Array = Wat zijn Array?? // zijn lijsten van iets, goederen, kleuren etc...
// laten we kijken naar een voorbeeld:
let selectedColor = ["Red", "Blue", "Green"]
// als je dit gaat consolen dan zie je dan de Red color als cijfer 0 heeft,kleur (blue) als cijfer 1 heeft en groen als cijfer 3. DUS..!!! als console.log(selectedColors[0]) toets of save, zie j dan in je console aleen kleur Red... en  ga zo maar door..!!! en daarom zeggen wij dat javaScript een Dynamic Language is, hij verandert de variable in het zelfde runtime...en een Array is in javaScript is dus een ("Object").

Function = wat zijn Function??
// bij functie kun je naar deze symbolen herkennen nl:
function greet() {
  // dit gedeelte noem je de Body van dit Functie, wat voor functie dan ook
} 
// laten we nu kijken naar een voorbeeld:
function greet () {
  console.log("Hello World"); // bij function heb je input's, dus laten we nu kijken hoe een input in een functie reageerd
}
function greet(name) { // name is hierin een Parameter, dus is een input van dit Functie. 
  console.log("Hello" + name)
}

greet("Shivan"); // hier staat een Naam en dit naam noem je als een Argument, dus....!!! in een Functie heb je te maken met een ("Parameter function") en een ("Argument function")

// Type's van Function : 1 Performing a Task en 2. Calculating a value
// 1 Performing a Task:
function greet(name, lastName) { // name is hierin een Parameter, dus is een input van dit Functie. 
  console.log("Hello" + name + " " + lastName)
  greet("Shivan", "Angnoe");
}

// 2. Calculating a value
function square(numbers) {
  
}