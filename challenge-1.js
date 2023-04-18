firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => {
    console.log(parameter)
    console.log(parameter)
}
const showHobby = () => {
    // call logTwice with parameter
    logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

showHobby()