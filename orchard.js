///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

const totalAcres=[]

for (let i =0; i < fujiAcres; i++)
{
    for (let j=0; j < galaAcres; j++)

    for ( let k=0; k < pinkAcres; k++)
    
    totalAcres.push(fujiAcres[i]+ galaAcres[j] + pinkAcres[k]);
    
    console.log(totalAcres)
}
// Comments on Problem 1: My thinking on the first problem was to add the arrays using a for loop and then using the .push array edit to add all of them together under the verriable and then console loggging it.






// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
const averageDailyAcres = (totalAcres / 7);{
    console.log(averageDailyAcres)
}

// Comments for Problem 2 since I already had the total acres I went a divided the total by 7 to find the daily average and then had that display to the console log
 




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
let i = acresLeft
do {
    acresLeft -= averageDailyAcres;
    i--;
    days + 1;


}
while (i < 0 )
console.log(days)
    // Comments on Problem 3 I created a do while loop as it would keep excuting the command until the acresleft veriable reached 0 like the problem asks




// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// let fujiTons =
// let galaTons =
// let pinkTons =
const fujiTons = fujiAcres.slice(0,8)
for (let i = 0; i < fujiTons.length; i++){
    fujiTons[i] *= 6.5
    }
    function sumArray(fujiTons){
        let sumfuji = 0
        for (let i= 0; i < fujiTons.length; i +=1)
        sumfuji += fujiTons[i]
        console.log(sumfuji)
    }

const galaTons = galaAcres.slice(0,8)
for( let j = 0; j < galaTons.length; i++){
    galaTons[j] *=6.5
}
function sumArray(galaTons){
    let sumgala = 0
    for (let j = 0; j < galaTons.length; i +=1)
    sumgala += galatons[j]
    console.log(sumgala)
}
const pinkTons = pinkAcres.slice(0,8)
for (let k =0; k< pinkTons.length; i++){
    pinkTons[k] *=6.5  
}
function sumArray(pinkTons)
let sumpink = 0
for (let k=0; k < pinkTons.length; k +=1){
    sumpink +=pinkTons[i]
    console.log(sumpink)
}


//Comments on Problem 4 I sliced the orginal array and then using a loop multiplied the array length by 6.5 to get the total tons and then using function and sum array created a way to get the total




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =
const fujiPounds = fujiTons.slice(0,8)
for(let i=0; i<fujiPounds.length; i++){
    fujiPounds[i] *= 2000   
}
function sumArray(fujiPounds)
let sumfujipounds = 0
for(let i = 0; i < fujiPounds.length; i +=1){
    sumfujipounds +=fujiPounds
    console.log(sumfujipounds)
}
const galaPounds = galaTons.slice(0,8)
for(let j=0; j < galaPounds.length; j++){
    galaPounds[j] *=2000
}
function sumArray(galaPounds)
let sumgalapounds = 0
for(let j= 0; j < galaPounds.length; j += 1){
    sumgalapounds += galaPounds[j]
    console.log(sumgalapounds)
}
const pinkPounds = pinkTons.slice(0,8)
for(let k=0; k < pinkPounds.length; k++){
    pinkPounds[k] *=2000
}
function sumArray(pinkPounds)
let sumpinkPounds = 0
for (let k =0; k< pinkPounds.length; k += 1){
    sumpinkPounds += pinkPounds[k]
    console.log(sumpinkPounds)
}
//Comments for Problem 5 my logic here was using the same format that I did to find the tons for each array and then multiplying by 2000 to get to the pounds of each array




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =

const fujiProfit = sumfujipounds * fujiPrice
console.log(fujiProfit)
const galaProfit = sumgalapounds * galaPrice
console.log(galaProfit)
const pinkProfit = sumpinkPounds * pinkPrice
console.log(pinkProfit)
// My thought process here was just to multiply the pounds and price together since I had previously done the work to get these values on the other problems






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
const totalProfit = galaProfit + fujiProfit + pinkProfit
console.log(totalProfit)
//Comments on Problem 7 since all of the profits have been figured out all I did was add them all together and then display them to the console