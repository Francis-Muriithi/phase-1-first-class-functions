

const receivesAFunction = (expression) => {
    expression()
}

function returnsANamedFunction() {
    return function francis(){
        console.log("noArgument");
    }
};

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Unknown");
    }
}