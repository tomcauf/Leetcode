/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = new Map();
      return groupSizes.reduce((result, size, i) => {
          if (!groups.has(size)) groups.set(size, []);
          groups.get(size).push(i);
          if (groups.get(size).length === size) {
              result.push(groups.get(size));
              groups.delete(size);
          }
          return result;
      }, []);  
  };