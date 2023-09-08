class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        const subscription = {
            callback: cb,
            unsubscribe: () => {
                const index = this.events[event].indexOf(subscription);
                if (index !== -1) {
                    this.events[event].splice(index, 1);
                }
            },
        };

        this.events[event].push(subscription);
        return subscription;
    }

    emit(event, args = []) {
        if (!this.events[event]) {
            return [];
        }

        const results = [];
        for (const subscription of this.events[event]) {
            results.push(subscription.callback(...args));
        }

        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */