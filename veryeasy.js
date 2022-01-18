/// Write a function named min that takes two arguments and returns their minimum.

function min (numOne, numTwo){
    if (numOne > numTwo){
    return(`The minimum of the two numbers is ${numTwo} . `)
}
else {
return (`The minimum of the two numbers is ${numOne}.`)
}
}


console.log(min( 5,7))