import axios from 'axios'

const config = require('./config.json')

export const makeShortUrl = async (alias, url) => {
  const result = await axios.post(`/${config.apiUrl}${alias}`, { url: url })
  return (result.status === 200)
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
