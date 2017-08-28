var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray (array, foo) {
  return array.unshift(foo)
}
function addElementToEndOfArray (array, element) {
  return [...array, element]
}
function destructivelyAddElementToEndOfArray (array, element) {
  return array.push(element)
}
function accessElementInArray (array, element) {
  return(array [element])
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
}
function removeElementFromBeginningOfArray (array) {
  return array.slice[element]
}
