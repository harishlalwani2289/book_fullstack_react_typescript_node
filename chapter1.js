// interface User {
//     name: string;
//     // age: number;
// }
function canDrive(user) {
    console.log('User is', user.age >= 16 ? 'allowed' : 'not allowed', 'to drive');
}
canDrive({ name: 'Alice' }); // User is not allowed to drive
canDrive({ name: 'Bob', age: 16 }); // User is allowed to drive
