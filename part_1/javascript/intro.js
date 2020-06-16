const x = 1;
let y =5;

console.log(x,y);
y+=10;
console.log(x,y);
y = "bjh bkj";
console.log(x,y);
// x = 4;

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})

const arr = [1,2,3,4];

arr2 = arr.concat(3)

arr2.forEach(val =>{
    console.log(val)
})

arr3 = arr2.map(val => {
    return(
        '<li>' + val + '</li>'
    )
});

arr3.forEach(val=>{
    console.log(val)
})

const a = [3,234,2,4,2,1];

const [first , second , ...rest] = a
console.log(first,second,rest)

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }