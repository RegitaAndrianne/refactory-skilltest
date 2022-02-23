// PALINDROME
let temp = ""
var i = 0
function palindrome(kata) {
    for (i = kata.length-1; i >= 0; i--){
        temp += kata[i]
    }

    console.log(temp.toLowerCase() === kata.toLowerCase())
    console.log(temp)
    console.log(kata)
}

//-------------------------------------------- CHECK ONE BY ONE -----------------------------------------------------------
// palindrome("Radar");
// palindrome("Malam");
// palindrome("Kasur ini rusak");
// palindrome("Ibu Ratna antar ubi");
// palindrome("Malas");
// palindrome("Makan nasi goreng");
// palindrome("Balonku ada lima");

// LEAP YEAR
let yearStart = 1900
let yearEnd = 2000
let year = []
let nonLeap = []
function leapYear(stYear, endYear) {
    for (let y = stYear; y <= endYear; y++){
        if (((y % 4 === 0) && (y % 100 !== 0)) || ((y % 100 === 0) && (y % 400 === 0))) {
            year.push(y)
        } else {
            nonLeap.push(y)
        }
    }
    console.log("The leap year:"+ year)
}

// leapYear(1900,2020)


// REVERSE WORDS
let str = 'I am A Great human';

function reverseText(txt) {
    let arr = txt.split(" ");
    console.log(arr)

    let arrTemp = []
    for (var i = 0; i < arr.length; i++){
        let arrRev = arr[i].split("").reverse()
        arrTemp.push(arrRev)
    }

    let arrTemp2 = []
    for(i = 0; i < arrTemp.length; i++){
        let partArr = arrTemp[i]
        if (partArr[4] != undefined) {
            partArr[4] = partArr[4].toLowerCase()
            partArr[0] = partArr[0].toUpperCase()
        }
        arrTemp2.push(partArr)
    }
    arrTemp2.forEach((part) => console.log(part.join("")))
}

reverseText(str)

// FIBONACCI
let data = [15, 1, 3]
let fibonacci = (arr) => arr.reduce((a, b) => a + b) + 2
// console.log(fibonacci(data))

// FIZZ BUZZ
let arrayTemp = []
function fizzbuzz(nums){
    for(let i = 1; i <= nums; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arrayTemp.push("FizzBuzz")
        // console.log("FizzBuzz");
      }else if (i % 3 === 0){
        arrayTemp.push("Fizz")
        // console.log("Fizz");
      }else if (i % 5 === 0){
        arrayTemp.push("Buzz")
        // console.log("Buzz");
      }else{
        arrayTemp.push(i.toString())
        // console.log(i);
      }
    }
    console.log(arrayTemp)
}
//-------------------------------------------- CHECK ONE BY ONE -----------------------------------------------------------
// fizzbuzz(3)
// fizzbuzz(5)
// fizzbuzz(15)


