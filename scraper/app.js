const axios = require('axios')
const cheerio = require('cheerio')

const { urls } = require('./arrays')
const { webArchiveDateParser } = require('./functions')

const scrapePage = async () => {
  console.clear()

  for (let u = 0; u < urls.length; u++) {
    const url = urls[u]

    const pagePostedOn = webArchiveDateParser(url)

    if (new Date(pagePostedOn) <= new Date('12/12/2121')) {
      const response = await axios.get(url)
      const $ = await cheerio.load(response.data)

      const pageUpdatedOn = $('#assetNow_pageSubtitle').text().substring(8)

      console.log(`${u + 1}) URL: ${url}`)
      console.log(`  -> Posted : ${pagePostedOn} | Updated: ${pageUpdatedOn}`)
      const strongs = $('strong')

      strongs.each((idx, ele) => {
        console.log(
          `  -> -> ${idx}) ${$(ele).text()} | ${$(ele).parent().text()}`
        )
      })

      console.log('=========================================================')
    }
  }
}
scrapePage()
