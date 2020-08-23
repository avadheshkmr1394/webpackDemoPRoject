
var name = require('./test.js')

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












