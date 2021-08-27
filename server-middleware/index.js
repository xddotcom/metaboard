const express = require('express')
const app = express()
const puppeteer = require('puppeteer')

async function parseDynamicContent(url) {
  const browser = await puppeteer.launch({ headless: false })
  let pageData = {}
  try {
    const page = await browser.newPage()
    await page.setViewport({
      width: 600,
      height: 480,
      deviceScaleFactor: 1,
    })
    await page.goto(url, { waitUntil: 'networkidle0' })
    pageData = await page.evaluate(() => {
      const title = document.title
      const description = document.head.querySelector('meta[name=description]').content
      const favicon = document.head.querySelector('link[rel="icon"]').href
      const image = document.querySelector('img').src
      const data = {}
      data.title = title
      data.description = description
      data.favicon = favicon
      data.image = image
      return data
    })
    // TODO 现在暂时都取首屏截屏作为 image 图片
    // if (!pageData.image) {
      pageData.image = 'data:image/jpeg;base64,' + (await page.screenshot({ type: 'jpeg', encoding: 'base64' }))
    // }
    browser.close()
  } catch (error) {
    browser.close()
  }
  return pageData
}


app.get('/getMetadata', async (req, res, next) => {
  const encodedURI = req.query.url
  const url = decodeURIComponent(encodedURI)
  // const result = {}
  // const { data } = await axios.get(url)
  // console.log(data)
  // const $ = cheerio(data)
  // const result = await metaFetcher(url) || {}
  const result = await parseDynamicContent(url)
  res.json(result)
})

app.get('/', (req, res) => {
  res.json({
    success: true
  })
})

export default app
