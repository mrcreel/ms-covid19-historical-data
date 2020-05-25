const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const chalk = require('chalk')

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

const getDataElement = async ($, sel) => {}

const scrapePage = async () => {
  data = []
  console.clear()

  for (let ct = 0; ct < pages.length - 1; ct++) {
    // const dateData = []
    const page = pages[ct]

    let pagePostedOn = new Date(page[0])
    // pagePostedOn = pagePostedOn.setDate(pagePostedOn.getDate() + 1)
    // const pagePostedOnString = formatDate(pagePostedOn)

    const url = `https://web.archive.org/web/${page[1]}/https://msdh.ms.gov/msdhsite/_static/14,0,420.html`
    // const response = await axios.get(url)
    // const $ = await cheerio.load(response.data)

    // console.log(`${ct}) ${url}`)
    // console.log(`${ct}) ${page[0]}`)
    console.log(`${ct}) ${formatDate(pagePostedOn)}`)

    /*
    const sel = '#assetNow_pageSubtitle'
    const updatedOn = $(sel).text().substring(8)
    const pageUpdatedOn = Date.parse(
      updatedOn.substring(0, updatedOn.search(', 2') + 6)
      )
 */
    // const pageUpdatedOnString = formatDate(pageUpdatedOn)

    /*
    console.log(
      `Posted on ${pagePostedOnString}` // => Updated on ${pageUpdatedOnString}`
    )
    */
    // data.push(dateData)

    console.log('-------------')
  }
}
scrapePage()

// console.log(data)
/*
const data = []

const fetchHTML = async () => {
  console.clear()
  pages.forEach(async (page) => {
    try {
      const pagePostedOn = page[0]
      const url = `https://web.archive.org/web/${page[1]}/https://msdh.ms.gov/msdhsite/_static/14,0,420.html
      `

      const response = await axios.get(url)
      console.log(response.status)
      // const $ = await cheerio.load(response.data)

      // const sel = '#assetNow_pageSubtitle'
      // let updatedOn = $(sel).text().substring(8)
      // pageUpdatedOn = updatedOn.substring(0, updatedOn.search(', 2') + 6)

      // console.log(`Posted on: ${pagePostedOn}
      // // => ${chalk.white.bgGray(url)}
      // // ==> Response: ${response.status}
      // ===> Updated on: ${pageUpdatedOn}`)

      // dates.push([pagePostedOn]) //, pageUpdatedOn])
    } catch (error) {
      console.log(response.status)
    }
  })
}

fetchHTML()

// let dates = []
// pages.forEach(async (page) => {
//   await fetchHTML(page)
// })
// dates = dates.sort(
//   (function (index) {
//     return function (a, b) {
//       return a[index] === b[index] ? 0 : a[index] < b[index] ? -1 : 1
//     }
//   })(0)
// )
// console.log(dates)
*/
