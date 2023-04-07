function receivesAFunction(sleep) {
    sleep();
} 

function returnsANamedFunction() {
    return function hello() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}