// reduce operation

// let myNum = [1,2,3];
// let newNum = myNum.reduce( (acc,curr) => acc + curr,0);
// console.log(newNum);

let shoppingCart = [
    {
        name : "js course",
        price : 2999,
    },
    {
        name : "python course",
        price : 1999,
    },
    {
        name : "Mobile dev course",
        price : 6999,
    },
    {
        name : "Web dev course",
        price : 2999,
    },
]

let totalPrice = shoppingCart.reduce( (acc,item) => acc + item.price ,0);
console.log(totalPrice);
