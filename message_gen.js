const string1 = ["You", "Your Mind", "Your Heart", "Your Brain"];
const string2 = ["is capable of", "has the power to", "can achieve", "will bring"];
const string3 = ["Good thins", "Priceless Growth", "a colorfull Future", "Success"];

function generateMessage() {
    const randomString1 = string1[Math.floor(Math.random() * string1.length)];
    const randomString2 = string2[Math.floor(Math.random() * string2.length)];
    const randomString3 = string3[Math.floor(Math.random() * string3.length)];
    
    const message = `${randomString1} ${randomString2} ${randomString3}`;
    console.log(message);
}

generateMessage();