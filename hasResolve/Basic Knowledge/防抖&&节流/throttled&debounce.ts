const throttled = function (callback: () => void, delay = 500) {
    let timer = 0;

    return function (...args: []) {
        if (!timer) {
            timer = setTimeout(() => {
                // @ts-ignore
                callback.apply(this, args);

                timer = 0;
            }, delay);
        }
    }
}

const debounce = function (callback: () => void, wait = 500) {
    let timer = 0;

    return function (...args: []) {
        
        clearTimeout(timer);

        timer = setTimeout(() => {
            // @ts-ignore
            callback.apply(this, args);
        }, wait);
    }
}