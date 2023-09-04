const user1 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { name, age} = user1;
console.log({"name":name,"age":age}); // Output, Alex

const user2 = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43,
        'department':{
            'name': 'Sales',
            'Shift': 'Morning',
            'address': {
                'city': 'Bangalore',
                'street': '7th Residency Rd',
                'zip': 560001
            }
        }
}


const users = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for(let { name, age } of users) {
    console.log(`${name} is ${age} years old!`);
}

// const { department } = user2
// console.log(department)

// const { department: { address } } = user2;
// console.log(address)

// const { department:{ address:{city}}} = user2
// console.log(city)

//function to get value in an object 
const getValue = key => {
    const { [key]: returnValue } = user2;   
    return returnValue;
}


function logDetails({name, age}) {
    console.log(`${name} is ${age} year(s) old!`)
}
// logDetails(user1)
// getValue(city)

const updated = {
    ...user2, 
    department: {...user2.department,'number': 7}
}

console.log(updated);