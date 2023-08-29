function memoize(fn) {
    const idxMap = new Map(), cache = new Map();
    return function (...params) {
        const key = params.map(obj => idxMap.has(obj) ? idxMap.get(obj) : idxMap.set(obj, idxMap.size).get(obj)).join(',');
        return cache.has(key) ? cache.get(key) : cache.set(key, fn(...params)).get(key);
    };
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */