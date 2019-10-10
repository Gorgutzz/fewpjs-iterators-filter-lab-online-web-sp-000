// Code your solution here
function findMatching(array, string) {
  return array.filter(driver => driver.toUpperCase() === string.toUppercase())
}
