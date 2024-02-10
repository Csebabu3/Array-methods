import React from "react";
const Array = () => {
    const person = [
        {
            name: "arun", age: 22
        },
        {
            name: "kumar", age: 25
        },
        {
            name: "vicky", age: 23
        },
        {
            name: "raj", age: 20
        },
    ]
    //filter
    const filteritem = person.filter(item => {
        return item.age <= 23;
    })
    console.log(filteritem);
    // end
    // map
    const filtermap = person.map(item => {
        return item.age;
    })
    console.log(filtermap);
    //end

    // find

    const find = person.find(item => {
        return item.name === 'raj';
    })
    console.log(find);
    const find1 = person.find(item => {
        return item.name === 'raje';
    })
    console.log(find1);
    // end

    // foreach
    person.forEach(item => {
        console.log(item.name);
    })
    // end
    // some
    const age = person.some(item => {
        return item.age <= 20;
    })
    console.log(age);

    // every

    const age1 = person.every(item => {
        return item.age >= 20;
    })
    console.log(age1);

    // reduce
    const reduce = person.reduce((currentTotal, item) => {
        console.log("currentTotal =" + currentTotal);
        console.log("item =" + item);
        return item.age + currentTotal;
    }, 0)
    console.log(reduce);


    // includes
    const arr = [1, 2, 3, 4, 5,];
    console.log(arr.includes(10));



}
export default Array;