function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

export { curriedAdd };



