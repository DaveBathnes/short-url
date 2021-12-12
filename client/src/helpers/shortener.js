import axios from 'axios'

const config = require('./config.json')

export const makeShortUrl = async (alias, url) => {
  try {
    const result = await axios.post(`/${config.apiUrl}${alias}`, { url: url })
    return (result.status === 200)
  } catch (e) {
    return false;
  }
}

export const generateAlias = () => {
  const characters = '123456789ABCDEFGHIJKLMNPQRSTUVWXYZ'
  let alias = ''

  for (let i = 0; i < 5; i++) {
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))
    alias += randomCharacter
  }

  return alias
}
