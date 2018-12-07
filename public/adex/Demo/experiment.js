// experiment - Risyandi 2018
// trick events with onclick
document.getElementById("commandOne").onclick = allCallFunc;
document.getElementById("commandTwo").onclick = allDeleteFunc;

// trick events with event listener
// document.querySelector('#commandOne').addEventListener('click', allCallFunc);
// document.querySelector('#commandTwo').addEventListener('click', allDeleteFunc);

// call all function in one function
function allCallFunc() {
// commandOnePride();
// commandTwoPride();
// listCookies();
// curry(5);
}

// delete result and console
function allDeleteFunc() {
  console.clear();
  document.getElementById('result').innerHTML = "";
}

// function command one
function commandOnePride() {
  const PI = 3.14;
  PI > 3.0;
  document.getElementById('result').innerHTML = PI ;
  console.log("I'm Pressed One Pride");
}

// function command two 
function commandTwoPride() {
  console.log("I'm Pressed Two Pride");
}

// create function to collect and listing a cookies on your browser
function listCookies() {
  var theCookies = document.cookie.split(';');
  var asString = '';
  for (let index = 0; index <= theCookies.length; index++) {
    asString += index + ' ' + theCookies[index-1] + "\n";   
  }
  console.log(asString, "cek astring");
  return asString;
}

// create function hash maps without side effect
function hashMaps() {
    const dirtyMap = {};
    console.log(dirtyMap, "dirty map"); // have a object

    const cleanMap = Object.create(null);
    console.log(cleanMap, "clean map"); // not have a object

    dirtyMap.constructor
    cleanMap.constructor

    const key = 0;
    for (key in dirtyMap) {
        if (dirtyMap.hasOwnProperty(key)) {
            console.log(key + "->" + dirtyMap[key]);
        }
    }

    for (key in cleanMap) {
        console.log(key + "->" + cleanMap[key]);
    }

}


/**
 * Material for presentation or written to medium.com.
 * Trick using functional programming :
 * 1 functional javascript memoization
 * 2 functional javascript currying
 * 3 functional javascript partial
 */

/**
 * 1 : javascript memoization
 * A function called with the same inputs produces the same result every time
 */
// Return a memoization version of a function f                                                                
// function memoize(f) {
//     if (f instanceof Function) {
//         // only memoize functions of arity 1, otherwise return function                                 
//         if (f.length == 0 || f.length > 1) return f;
//         var fn = function (x) {
//             if (fn.memoizer.values[x] == null) {
//                 fn.memoizer.values[x] = f.call(f, x);
//             }
//             return fn.memoizer.values[x];
//         };
//         fn.memoizer = { values: [] };
//         return fn;
//     } else {
//         return f; // garbage in, garbage out I always say!                                               
//     }
// }

/**
 * 2 : javascript currying
 * currying refers to the process of taking a function with n arguments and 
 * transforming it into n functions that each take a single argument
 */
// function curry(fn) {
//     var arity = fn.length;
//     return (function resolver() {
//         var memory = Array.prototype.slice.call(arguments);
//         return function () {
//             var memory = Array.prototype.slice.call(arguments);
//             return function () {
//                 var local = memory.slice();
//                 console.log(local, "check local value");
//             };
//         }
//     }());
// }

/**
 * 3 : javascript partial
 * Is a technique of fixing a number of arguments to a function,
 * producing another function of smaller arguments i.e binding values to one 
 * or more of those arguments as the chain of function progressed.
 * function addition(x, y) {
    return x + y;
  }
    const plus5 = addition.bind(null, 5)
    plus5(10) // output -> 15

 */
