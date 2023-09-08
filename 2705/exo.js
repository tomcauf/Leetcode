/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
          return obj.filter(item => Boolean(item)).map(compactObject);
      } else if (typeof obj === 'object' && obj !== null) {
          const compacted = {};
          for (const key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  const compactedValue = compactObject(obj[key]);
                  if (Boolean(compactedValue)) {
                      compacted[key] = compactedValue;
                  }
              }
          }
          return compacted;
      } else {
          return obj;
      }  
  };