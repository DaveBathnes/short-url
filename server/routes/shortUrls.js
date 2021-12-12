const express = require('express');
const router = express.Router()
const shortUrlHelper = require('../helpers/shortUrl')

router.get('/:alias', async function (req, res) {
  const alias = req.params.alias

  if (!alias) return res.status(400)

  const shortUrl = await shortUrlHelper.getShortUrl(alias.toUpperCase())
  if (shortUrl === '') return res.sendStatus(404)

  res.redirect(shortUrl)
})

router.post('/:alias', async function (req, res) {
  const alias = req.params.alias
  const url = req.body.url

  if (!alias || !url) return res.status(400)

  try {
    new URL(url) // eslint-disable-line no-new
  } catch (e) {
    return res.status(400)
  }

  const result = await shortUrlHelper.addShortUrl(alias.toUpperCase(), url)

  if (result) return res.sendStatus(200)
  res.sendStatus(500)
})

module.exports = router