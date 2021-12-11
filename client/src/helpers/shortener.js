import axios from 'axios'

const config = require('./config.json')

export const makeShortUrl = async (short, long) => {
    const result = await axios.post(`${config.apiUrl}`, { short: short, long: long });
    return result;
}

export const generateShortText = () => {
    const characters = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    let shortText = "";

    for (let i = 0; i < 6; i++) {
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        shortText += randomCharacter;
    }

    return shortText;
}