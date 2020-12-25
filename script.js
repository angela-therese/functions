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
              
          else  {
            //noDrink = noDrink + `${partyGuests[i].name}, `
            noDrink.push(partyGuests[i].name)
            noDrinkString = noDrink.join(', ')
          }
         
      }

      console.log(`These people can drink: ${drinkString}.`)
      console.log(`These people cannot drink: ${noDrinkString}.`)
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

//7. Celsius to Fahrenheit
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console


let tempC
let tempF

function convertToF(c) {
  
  tempF = c * 1.8 + 32 
  tempC = c
 
}

convertToF(20.4)
console.log(`You entered ${tempC}°C. That equals ${tempF}°F.`)

function convertToC(f){
  tempC = (f - 32) / 1.8
  tempF = f
}


convertToC(60)
console.log(`You entered ${tempF}°F. That equals ${tempC}°C.`)

// Example output:

// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenh

// //Activity 8 
// Copy and paste the following code into your JavaScript file:

let outsideArray =  [4, 7, 8008, 11, 9, -1];

// In your JavaScript file, create (declare) a function named addThemUp.

let mySum = 0
function addThemUp(numberArray){
  for(i = 0; i < numberArray.length; i++){
    mySum = numberArray[i] + mySum
  }
  return mySum
}
addThemUp([1, 27, 25, 23])
console.log(mySum)

// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.


//activity 9 
// Copy and paste the following code into your JavaScript file:

let scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];


// In your JavaScript file, define a function named findAverage.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and find their average.
// The findAverage function should return the average of all the numbers.
// Call findAverage and pass in scoresToAverage as an argument.
// Save the returned value in a variable called myAverage.
// Log myAverage to the console.
// Try adding new numbers to the outsideArray. Your function should still return the correct average no matter how many items are in the array.

// Activity 10 
// You work for an online clothing retailer. Every time an order ships, your company needs to calculate the cost of shipping so they can charge the customer correctly. Because they need to make this calculation so many times and in so many places, they've asked you to write a function that calculates shipping cost based on package weight, distance to destination, and whether or not the package is oversized.
// The cost of shipping is always the weight of the package multiplied by the distance it needs to travel, divided by 100.
// If the package is oversized, it adds ten dollars to the cost of shipping.
// Write a function that accepts whatever information you need to calculate the cost of shipping and returns the cost as an integer.
// Execute the function and output the result to the console.


function baseRate (packageWeight, miles, oversize){
  let baseRate = packageWeight * miles / 100;
  
  if(oversize === false){
    let finalRate = baseRate
    return finalRate.toFixed(2)
  }
  else if (oversize === true) {
    finalRate = baseRate + 10.00
    return finalRate.toFixed(2)
  }
}

console.log(baseRate(2.3, 276, false))
