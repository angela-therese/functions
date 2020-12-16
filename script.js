console.log('hola')
//I Love JavaScript
// Define a function that logs the string "I love JavaScript!" to the console.
// Execute, or call, the function.
function feelings() {
    console.log('I love javascript!')
}

feelings()

//Write a function that accepts two parameters of name and destination.
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.

function travel(name, destination){
    console.log(`${name} would love to visit ${destination}.`)
}

travel('Angie', 'Dominican Republic')
travel('Luca', 'Japan')
travel('Janet', 'Iceland')

//Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence and store the returned sentence in a variable.
// Execute the function.
// Log the returned sentence to the console.


function tacoOrder(shell, topping) {
   let tacoSentence = `Your ${shell} taco with ${topping} is ready.`

   return tacoSentence
}

let finishedTaco = tacoOrder('soft', 'chicken')
let finishedTaco2 = tacoOrder('hard','fish')

console.log(finishedTaco)
console.log(finishedTaco2)

//Practice 1 
//Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.

function addition(x, y){
    console.log(x + y)
}
addition(5, 5)
addition(6, 6)
addition (21, 21)

function subtraction(x, y){
    console.log(x - y)
}
subtraction(5, 5)
subtraction(6, 6)
subtraction (21, 21)

function multiplication(x, y){
    console.log(x * y)
}
multiplication(5, 5)
multiplication(6, 6)
multiplication(21, 21)

function division(x, y){
    console.log(x / y)
}
division(5,5)
division(6, 6)
division (21, 21)

//Practice 2 Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.
function addition(x, y){
    return x + y
}
let suma = addition(10,10)
let suma2 = addition(20,20)
let suma3 = addition(12, 42)
console.log(suma3)
console.log(suma2)
console.log(suma)


function subtraction(x, y){
    return x-y
}
let dife = subtraction(10,10)
let dife2 = subtraction(20,20)
let dife3 = subtraction(12, 42)
console.log(dife3)
console.log(dife2)
console.log(dife)

function multiplication(x, y){
   return x * y
}
let prod = multiplication(5, 5)
let prod2 = multiplication(6, 6)
let prod3 = multiplication(21, 21)
console.log(prod3)
console.log(prod2)
console.log(prod)

function division(x, y){
    return x / y
}

let quo = division(4,4)
let quo2 = division(90, 9)
let quo3 = division(42, 12)

console.log(quo)
console.log(quo2)
console.log(quo3)





// Act 3 Greetings

    function person(name, language){ 
    if (language === 'Spanish') {
        console.log('¡Hola!')
    } else if (language === 'French') {
        console.log('Bonjour!')  
    } else if (language ==='English'){
         console.log('Hello!')
        } 
    }

    person('Elías', 'Spanish')
    person('Gael', 'French')
    person('Luca', 'English')


//Act 4 Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.

let sandwichOrder

function sandwich(breadType, sandwichName, isToasted){
    if(isToasted === true) {
        let sandwichOrder = `You ordered a ${sandwichName} on toasted ${breadType}.`
        return sandwichOrder
} 
    else {
        let sandwichOrder = `You ordered a ${sandwichName} on ${breadType}.`
        return sandwichOrder
        } 

        
}

sandwichOrder = sandwich('wheat', 'veggie sub', true)
console.log(sandwichOrder)
sandwichOrder = sandwich('white', 'turkey', false)
console.log(sandwichOrder)
sandwichOrder = sandwich('flatbread', 'pizza sub', true)
console.log(sandwichOrder)

//Activity 5//Once again, we concern ourselves with our friend Dwayne:

// Once again, we concern ourselves with our friend Dwayne:
// let dwayneObject = {
//   firstName: "Dwayne",
//   nickName: "The Rock",
//   lastName: "Johnson",
//   favoriteFood: "Eggs",
//   hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
// }

// function printHobbies(){
// // YOUR CODE GOES HERE
// }


let dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
  }
  
  function printHobbies(){
        for(i = 0; i < dwayneObject.hobbies.length; i++){
            console.log(dwayneObject.hobbies[i])
        }     
  }
  printHobbies()

//   The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.
//   Call the printHobbies function.

//Act. 6 

let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
  }

  //Activity 6

  let partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  

  // let drink = ''
  // let noDrink =''
  // let drink = []
  // let noDrink = []
  function ageChecker(){
   let drink = []
   let noDrink = []
      for(i = 0; i < partyGuests.length; i++) {
          if (partyGuests[i].age >= 21){
              //drink = drink + `${partyGuests[i].name}, `
              drink.push(partyGuests[i].name)
              drinkString = drink.join(', ')
            }
              
          else if (partyGuests[i].age < 21) {
            //noDrink = noDrink + `${partyGuests[i].name}, `
            noDrink.push(partyGuests[i].name)
            noDrinkString = noDrink.join(', ')
          }
         
      }

      console.log(drinkString)
      console.log(noDrinkString)
   //return drink
  //  return noDrink

  }
ageChecker()
console.log(`${drinkString} can drink.`)
 console.log(`${noDrinkString} can't drink.`)

 
  //Act 7 Pt 2

  let partyGuestList = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  
  function ageCheck(peopleArray, cutoffAge){
    let oldEnough = []
    for(let i = 0; i < peopleArray.length; i++){

      if(peopleArray[i].age >= cutoffAge){
        oldEnough.push(peopleArray[i].name)
        oldEnough2 = oldEnough.join(', ');

      }
    }
    return oldEnough2
  
  }
  
let peopleWhoCanDrink = ageCheck(partyGuestList, 21)
console.log(`These people can drink: ${peopleWhoCanDrink}.`)

let joinGym = [
  {
    name: "Luca",
    age: 12
  },
  {
    name: "Hazel",
    age: 12
  },
  {
    name: "Angie",
    age: 41
  },
  {
    name: "Izzi",
    age: 2
  },
  {
    name: "Janet",
    age: 39
  }
]

let gymMembership = ageCheck(joinGym, 16)
console.log(`These people can join the gym: ${gymMembership}.`)

