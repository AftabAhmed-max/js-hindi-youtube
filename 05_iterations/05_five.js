let names = ['aftab','ahmed','ali'];

//syntax forEach loop
// names.forEach( function (item) {
//     console.log(item);
// });

// arrow functio syntax for forEach

// names.forEach( (item) => {
//     console.log(item);
// })

// function printme(val) {
//     console.log(val);
// }
// names.forEach(printme)

names.forEach( (item, index , arr) => {
    console.log(item, index, arr);
}) 

// very important as this is an ideal situation in real life project for database
let coding = [
    {
        languageName : "javaScript",
        fileName : "js"
    },
    {
        languageName : "java",
        fileName : "java"
    },
    {
        languageName : "python",
        fileName : "py"
    }
]

coding.forEach( (item) => {
    console.log(item.languageName);
})

