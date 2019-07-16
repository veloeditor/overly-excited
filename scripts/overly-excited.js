// const addExcitement = () => {
//     console.log("Hello");
// }

// addExcitement()

// Create an array that contains the words in the sentence

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

function addExcitement (theWordArray, numberOfDelimiters, delimiter) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
      
      
        const delimiters = delimiter.repeat(numberOfDelimiters)

        if ((i + 1) % 3 === 0) {
            buildMeUp += `${theWordArray[i]}${delimiters} `
       } else {
           buildMeUp += `${theWordArray[i]} `
       }

        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array

addExcitement(sentence, 2, "!");

// const piggyBank = { pennies: 342,
//                     dimes: 54,
//                     nickels: 245,
//                     quarters: 156
// }

// const totalPennies = piggyBank.pennies / 100;
// console.log(totalPennies)
// const totalDimes = piggyBank.dimes / 10;
// console.log(totalDimes)
// const totalNickels = piggyBank.nickels / 5;
// console.log(totalNickels)
// const totalQuarters = piggyBank.quarters / 25;
// console.log(totalQuarters)

// let dollarAmount = totalPennies + totalDimes + totalNickels + totalQuarters
// console.log(dollarAmount)


// const dollarAmount = 0.10
// const piggyBank = {}

// // Your magic code here

// console.log(piggyBank)