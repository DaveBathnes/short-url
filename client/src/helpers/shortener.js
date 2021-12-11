import axios from 'axios'

const config = require('./config.json')

export const makeShortUrl = async (short, long) => {
    const result = await axios.post(`${config.apiUrl}`, { short: short, long: long });
    return result;
}