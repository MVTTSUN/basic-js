const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 function table() {
  let vinigereTable = [];
  let string = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  let stringArr = string.split('');
  let one;
  let objEn = {};
  let objDe = {};

  for(let i = 0; i < string.length; i++) {
    vinigereTable.push(stringArr);
    one = stringArr.slice(0, 1);
    stringArr = stringArr.slice(1, string.length);
    stringArr.push(one[0]);
  }
  
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < string.length; j++) {
      let name = stringArr[i] + stringArr[j];
      objEn[name] = vinigereTable[i][j];
    }
  }

  let k = 0;
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < string.length; j++) {
      let name = stringArr[i] + vinigereTable[i][j];
      if(k === string.length) k = 0;
      objDe[name] = string[k];
      k++;
    }
  }

  return {objEn, objDe};
}

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isReverse = isDirect ? false : true;
  }

  encrypt(message, key) {
    if (!message | !key) throw new Error('Incorrect arguments!');

    let str = [];
    let j = 0;
    for(let i = 0; i < message.length; i++) {
      if(message[i].match(/^[,.=+_1234567890$#@!\?/*&^|:()%-]$/)) {
        str.push(message[i]);
      } else if(message[i] === ' ') {
        str.push(message[i]);
      } else {
        if(j === key.length) j = 0;
        str.push(table().objEn[(message[i] + key[j]).toUpperCase()]);
        j++;
      }
    }

    if(this.isReverse) return str.reverse().join('');
    return str.join('');
  }
  
  decrypt(message, key) {
    if (!message | !key) throw new Error('Incorrect arguments!');

    let str = [];
    let j = 0;
    for(let i = 0; i < message.length; i++) {
      if(message[i].match(/^[,.=+_1234567890$!@|\?/&#*^:()%-]$/)) {
        str.push(message[i]);
      } else if(message[i] === ' ') {
        str.push(message[i]);
      } else {
        if(j === key.length) j = 0;
        str.push(table().objDe[(key[j] + message[i]).toUpperCase()]);
        j++;
      }
    }
    
    if(this.isReverse) return str.reverse().join('');
    return str.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
