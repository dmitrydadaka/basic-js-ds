const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
   constructor(){
    this._size = 0;
    this._storage = {};
   }
  push(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
      // increases the size of our storage
      var size = this._size++;
   
      // assigns size as a key of storage
      // assigns data as the value of this key
      this._storage[size] = data;
  
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    var size = this._size,
        deletedData;
 
    deletedData = this._storage[size];
 
    delete this._storage[size];
    this.size--;
 
    return deletedData;
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
