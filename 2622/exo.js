
var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    if (this.cache.has(key) && this.cache.get(key).expiration > now) {
        this.cache.get(key).value = value;
        this.cache.get(key).expiration = now + duration;
        return true;
    } else {
        this.cache.set(key, { value, expiration: now + duration });
        return false;
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
     const now = Date.now();
    if (this.cache.has(key) && this.cache.get(key).expiration > now) {
        return this.cache.get(key).value;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, value] of this.cache) {
        if (value.expiration > now) {
            count++;
        }
    }
    return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */