const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addingOne = '';
  let addingTwo = '';
  if(options.additionRepeatTimes === undefined && options.addition !== undefined) addingOne += options.addition;
  if(options.additionSeparator === undefined) options.additionSeparator = '|';
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    addingOne += options.addition;
    if(i !== options.additionRepeatTimes - 1) addingOne += options.additionSeparator;
  }
  if(options.separator === undefined) options.separator = '+';
  if(addingOne === '') addingOne = addingTwo
  for(let i = 0; i < options.repeatTimes; i++) {
    addingTwo += addingOne;
    if(i !== options.repeatTimes - 1) addingTwo += options.separator + str;
  }
  if(addingTwo === '') addingTwo += addingOne;
  return str + addingTwo;
}

module.exports = {
  repeater
};
