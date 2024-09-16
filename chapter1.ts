interface User {
    name: string;
    age: number;
}

function canDrive(user: User) {
    console.log('User is', user.age >= 16 ? 'allowed' : 'not allowed', 'to drive');
}

canDrive({ name: 'Alice', age: 15 }); // User is not allowed to drive
canDrive({ name: 'Bob', age: 16 }); // User is allowed to drive
