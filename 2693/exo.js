/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const key = Symbol('tempFunctionKey'); 
    context[key] = this; 
    const result = context[key](...args); 
    delete context[key];
    return result;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */