export function customDebounce(fn, ms) {
    let currentCall, timer;

    return function(...args) {
        let lastCall = currentCall;
        currentCall = Date.now();

        if (lastCall && currentCall - lastCall <= ms) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => fn(...args), ms)
    }
}   