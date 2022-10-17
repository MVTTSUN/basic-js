const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.links.length;
  },

  addLink(value) {
    this.links ? this.links.push(value) : this.links = [value];
    return this;
  },

  removeLink(position) {
    if(typeof position !== 'number' || isNaN(position) || !isFinite(position) || !Number.isInteger(position) || position < 1 || position > this.getLength()) {

      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.links.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.links ? this.links.reverse() : this.links = [];
    return this;
  },
  
  finishChain() {
    let res = this.links.map(e => `( ${e} )` ).join('~~');
    this.links = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
