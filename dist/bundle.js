/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function getInfo() {
    let name = 'dinesh kumar Avadhesh kumar Avanish Kumar fggg'
    return name;
}

module.exports = getInfo;




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var name = __webpack_require__(0)

// concat function

let studentname = ['A', 'B', 'C', 'D'];
let qua = ['Bsc', 'B.tech', 'Msc', 'BA']
let age = [25, 23, 24, 26]
let student = qua.concat(studentname, age);
console.log(student);

// copyWithin(target,start,end)

//defination--The copyWithin() method copies array elements to another position in the array, overwriting the existing values.

//This method will never add more items to the array.

// Note: this method overwrites the original array.



let alpabet = ['A', 'E', 'I', 'O', 'U']

// let result = alpabet.copyWithin(1, 0,2);
let result = alpabet.join();
console.log()

// for (x of result) {
//     console.log(x);
// }

let index = ['A', 'B', 'C', 'E', 'D', 'E', 'F']

console.log('firstindex:', index.indexOf('D', 2));

console.log('lastindex:', index.lastIndexOf('E', 4));

const details = {
    name: 'Avades kumar'
}

function studentdata(a, b, c, n, ...data) {
    console.log(this.name);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(n);
    console.log(data);
}

studentdata.call(details, 'A', 'B', ['a', 'b'], 'j', 'p', 'k', 'C', 'J', ['a', 'b'],);
studentdata.apply(details, ['M', 'C', 'D', 'S']);
let s = studentdata.bind(details);
s(['a', 'b']);







function reverse1() {
    var str = "Avadhesh";

    for (var i = str.length - 1; i >= 0; i--) {

        str = str + str[i];

    }
    console.log(str);


    // let na = 'avadheshmjkhmyrm'
    // let duplicate = '';
    // let unique = ''

    // for (let b = 0; b < na.length; b++) {
    //     // na.indexOf(na[b])
    //     // na.lastIndexOf(na[b]);
    //     // console.log(na.indexOf(na[b]) + ':' + na.lastIndexOf(na[b]))

    //     if (na.indexOf(na[b]) != na.lastIndexOf(na[b])) {
    //         duplicate = duplicate + na[b];
    //     }
    //     else {
    //         unique = unique  + na[b]
    //     }
    // }
    // console.log('duplicate', duplicate)
    // console.log('unique', unique)


    // var missings = new Array();
    // let name = 'ac'
    // let n = 'abc'
    // console.log(name.indexOf('de'))

    // for (var i = 1; i < n.length; i++) {
    //     console.log(name.indexOf(n[i]))
    //     if (name.indexOf(n[i]) == -1) {
    //         missings.push(n[i]);
    //     }
    // }
    // console.log(missings);

    // var a = [1, 3, 5],
    //     count = 5;

    // var missing = new Array();
    // for (var i = 1; i <= count; i++) {
    //     console.log(a.indexOf(i))
    //     if (a.indexOf(i) == -1) {
    //         missing.push(i);
    //     }
    // }
    // console.log(missing);




    // let arr = ['A', 'L', 'C', 'E', 'L','C','E'];

    let arr = ('avadhesh').split('')
    let uniqe = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
           // arr.splice(arr.indexOf(arr[i]), 1)
        }
        else {
            uniqe.push(arr[i]);
        }


    }

    for (let j = 0; j < uniqe.length; j++) {
        arr.splice(arr.indexOf(uniqe[j]), 1);
    }


    //arr.splice(2, 1);

    console.log(arr);

    console.log(uniqe)









}


reverse1()














/***/ })
/******/ ]);