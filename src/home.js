const hello = name => {
    console.log(`Hello ${name}!`);
}

function num(n) {
    console.log(`Number: ${n}`);
}

export default hello;
export {num};