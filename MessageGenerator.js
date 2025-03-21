function getRandomMessage() {
    const messages = [
        "YURRRRRRRRRRR!",
        "CHEAH BOI!",
        "BAN ARTIFACTS!",
        "HOP ON VALORANT!",
        "ALEX, YOU STUPID BITCH!",
        "BAN INFECT AND DRAGONS!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

console.log(getRandomMessage());