const messages=[
    "Lucas",
    "Ana",
    "Juan",
    "Pedro"
];

const randomMsg = () => {
    const message= messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };