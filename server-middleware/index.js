const express = require('express')
const app = express()
import metaFetcher from 'meta-fetcher'

app.get('/getMetadata', async (req, res, next) => {
  const encodedURI = req.query.url
  const url = decodeURIComponent(encodedURI)
  const result = await metaFetcher(url) || {}
  res.json(result)
})

app.get('/', (req, res) => {
  res.json({
    success: true
  })
})

export default app
