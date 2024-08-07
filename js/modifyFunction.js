

function originalFunction(num) {
    return num * 4;
}

function modifyFunction(originalFunc, multiplier) {
    return function(num) {
        return originalFunc(num) * multiplier;
    }
}

export { originalFunction, modifyFunction };