// 1. Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello' // eslint-disable-line no-unused-vars

let answerOne
if (STR_ONE === 'Hello') answerOne = true

// 2. Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye' // eslint-disable-line no-unused-vars
let answerTwo
if (STR_TWO !== 'Hello') answerTwo = true


// 3. Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello' // eslint-disable-line no-unused-vars
const STR_FOUR = 'Good' // eslint-disable-line no-unused-vars

let answerThree

if (STR_THREE.length > STR_FOUR.length) answerThree = true



// 4. Use conditional statements to set answerFour to true
// if STR_FIVE starts and ends with the same character, regardless of case

const STR_FIVE = 'Alexandra' // eslint-disable-line no-unused-vars
let answerFour
if (STR_FIVE.charAt(0).toLowerCase === STR_FIVE.charAt(STR_FIVE.length - 1).toLowerCase) {
  answerFour = true
}
// 5. Use conditional statements to set answerFive to true
// if STR_SIX starts and ends with the same character, regardless of case

const STR_SIX = 'Joanna' // eslint-disable-line no-unused-vars

let answerFive
if (STR_SIX.charAt(0).toLowerCase === STR_SIX.charAt(STR_SIX.length - 1).toLowerCase) {
  answerFive = false
}
// 6. Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla' // eslint-disable-line no-unused-vars
let answerSix

if ((STR_SEVEN.length % 2) !== 0) {
  let median = (STR_SEVEN.length - 1) / 2
  answerSix = STR_SEVEN.charAt(median)
}

// 7. Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex' // eslint-disable-line no-unused-vars

let answerSeven

if ((STR_EIGHT.length % 2) === 0) {
  let median = (STR_EIGHT.length - 1) / 2
  answerSeven = STR_EIGHT.charAt(median) + STR_EIGHT.charAt(median+1)
}

// 8. Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'January'

let answerEight

switch (MONTH) {
  case 'January':
  case 'February':
  case 'December':
    answerEight = 'Winter';
    break;
  case 'March':
  case 'April':
  case 'May':
    answerEight = 'Spring';
    break;
  case 'June':
  case 'July':
  case 'August':
    answerEight = 'Summer';
    break;
  case 'September':
  case 'October':
  case 'November':
    answerEight = 'Autumn';
    break;
  default:
    answerEight = undefined
}

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}
