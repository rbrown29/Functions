// Demonstrating Named Functions, Scope, Closures, Anonymous Functions, Higher Order Functions.
// Call and Bind, Function and Variable "Hoisting".

console.log("Hello Functions");

function namedFunction(param1, param2, param3) {
    param1 = param1 || 'default value';
    param2 = param2 || 'default value';
    param3 = param3 || 'default value';
    console.log(param1, param2, param3);
}

function makeArray() {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    return args;
}

function takesAnObject(obj) {
    console.log(obj);
    var sound = obj.sound || 'bark';
    var color = obj.color || 'brown';
    var type = obj.type || 'dog';
    var legs = obj.legs || 4;

    console.log(sound, color, type, legs);
}

function plus2(num) {
    num = (num === undefined) ? 0 : num;
    return num + 2;
}

function returnMultiple(param1, param2) {
    return {
        quotient: Math.floor(param1 / param2),
        remainder: param1 % param2
    };
}

function returnMultiple2(param1, param2) {
    return [param1 / param2, param1 % param2];
}

var aGlobalVariable = 1;

function aGlobalFunction(aParameter) {
    var aLocalVariable = 2;
    function aLocalFunction(anotherParameter) {
        var anotherLocalVariable = 3;
        console.log("inside aLocalFunction");
        console.log("Value of a Global Var " + aGlobalVariable);
        console.log("Value of a Parameter " + aParameter);
        console.log("Value of a Local Var " + aLocalVariable);
        console.log("Value of another Parameter " + anotherParameter);
        console.log("Value of another Local Var " + anotherLocalVariable);
    }
    function anotherLocalFunction(aSecondParameter) {
        var aSecondLocalVariable = 4;
        console.log("inside anotherLocalFunction");
        console.log("Value of a Global Var " + aGlobalVariable);
        console.log("Value of a Parameter " + aParameter);
        console.log("Value of a Local Var " + aLocalVariable);
    }
    console.log("inside aGlobalFunction");
    console.log("Value of a Global Var " + aGlobalVariable);
    console.log("Value of a Parameter " + aParameter);
    console.log("Value of a Local Var " + aLocalVariable);
}

aGlobalFunction(2);
//aLocalFunction(4);
//anotherLocalFunction(5);
console.log("inside global scope");
console.log("Value of a Global Var " + aGlobalVariable);
//console.log("Value of a Parameter " + aParameter);
//console.log("Value of a Local Var " + aLocalVariable);

function makeAFunction(aNumber) {
    return function () {
        console.log(aNumber);
    }
}

function makeACounter(callBack) {
    var count = 0;
    function dec() {
        callBack(count = count - 1);
        update();
    }

    function inc() {
        callBack(count = count + 1);
        update();
    }

    function update() {
        callBack(count);
    }

    return {
        inc: inc,
        dec: dec,
        update: update
    };

}

var counter = makeACounter(function (value) {
    document.getElementById('counter').innerText = value;
});



function imageCycler(images, img, incClickables, decClickables) {
    var counter = makeACounter(
        function (count) {
            var index = count % images.length;

            if (index < 0) {
                index = index += images.length;
            }
            img.src = images[index];
        }
    );
    counter.update();
    incClickables.addEventListener('click', counter.inc);
    decClickables.addEventListener('click', counter.dec);
}

var imageCyclerAnimals = imageCycler.bind(null, [
    'images/cat.jpeg', 'images/moon.jpeg', 'images/mummy.jef.jpeg'
]);

var imageCyclerElectrical = imageCycler.bind(null, [
    'images/resistors.jpeg', 'images/battery.jpeg', 'images/symbowl.jpeg',
    'images/cat.jpeg', 'images/moon.jpeg', 'images/mummy.jef.jpeg'
]);

var animalCyclerFunction = (function(cycler) {
    cycler(
        document.getElementById('animal'),
        document.getElementById('inc'),
        document.getElementById('dec')
    );
}).bind(null, imageCyclerAnimals);

var electronicsCyclerFunction = (function(cycler) {
    cycler(
        document.getElementById('animal'),
        document.getElementById('inc'),
        document.getElementById('dec')
    );
}).bind(null, imageCyclerElectrical);


window.addEventListener('load', electronicsCyclerFunction);
//window.addEventListener('load', animalCyclerFunction);

MyClass.prototype.someMethod = function () {
};

function MyClass() {
}

console.log(anUndefiniedFunction);

function anUndefiniedFunction() {
    console.log(undefined);
}

function hoisting () {
    //console.log(anUndefiniedVariable);
    var anotherUndefinedVariable;
    console.log(anotherUndefinedVariable);

    anotherUndefinedVariable = 'some value';

    console.log(anotherUndefinedVariable);
}


