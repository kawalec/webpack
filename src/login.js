let login = (userName, password) => {
    if(userName !=='admin' || password !== 'radical') {
        console.log('Incorrect login!')
    } else {
        console.log('Welcome!');
    }
};

export {login};
console.log('login.js');