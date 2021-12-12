const pool = require('./database')

/**
 * Returns the URL associated with the alias
 * @param {string} alias 
 * @returns {string} URL associated with the alias
 */
module.exports.getShortUrl = async (alias) => {
  let shortUrl = ''
  try {
    const query = 'select url from urls where alias = $1'
    const { rows } = await pool.query(query, [alias])
    if (rows.length > 0) shortUrl = rows[0].url
  } catch (e) {
    console.log(e)
  }
  return shortUrl
}

/**
 * Adds a new alias and URL to the database
 * @param {string} alias the alias to be added
 * @param {string} url the URL to be added
 * @returns {boolean} true if the alias was added, false otherwise
 */
module.exports.addShortUrl = async (alias, url) => {
  try {
    const query = 'insert into urls (alias, url) values ($1, $2)'
    const { rowCount } = await pool.query(query, [alias, url])
    if (rowCount > 0) return true
  } catch (e) {
    console.log(e)
  }
  return false
}
