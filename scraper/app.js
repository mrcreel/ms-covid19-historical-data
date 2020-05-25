const axios = require('axios')
const cheerio = require('cheerio')

const pages = require('./arrays')

function formatDate(date) {
  const days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    dayOfWeek = days_of_week[d.getDay()]

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return `${dayOfWeek} ${year}-${month}-${day}`
}

const scrapePage = async () => {
  console.clear()

  for (let p = 0; p < pages.length; p++) {
    const page = pages[p]
    const dayString = page[0]

    const _Y = dayString.substring(0, 4)
    const _M = dayString.substring(4, 6)
    const _D = dayString.substring(6, 8)

    const pageDatePostedString = `${_Y}-${_M}-${_D}`

    const postedDate = new Date(_Y, _M - 1, _D).toLocaleString('en-US', {
      timeZone: 'America/Chicago',
    })

    const url = `https://web.archive.org/web/${dayString}/https://msdh.ms.gov/msdhsite/_static/14,0,420.html`

    const response = await axios.get(url)
    const $ = await cheerio.load(response.data)

    const sel = '#assetNow_pageSubtitle'
    const pageUpdatedOn = new Date($(sel).text().substring(8))

    console.log(`${p}) ${url}`)

    const res = $('strong')

    const dayData = {
      pageDatePosted: postedDate,
      pageDateUpdated: pageUpdatedOn,
    }

    // console.log(dayData)
    console.log('-------------------------------------')
  }
}
scrapePage()
