/*
const url =
  'https://web.archive.org/web/20200308003627/https://msdh.ms.gov/msdhsite/_static/14,0,420.html'
const msdhLong = 'March 13, 2020, 5:58 PM'
const msdhShort = 'March 3, 2020'
*/

/**
 * Parse web.archive.or url to pull out a date string
 */

const webArchiveDateParser = (url) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const waParser = new URL(url).pathname
  const waDateString = waParser.substring(5, 19)

  const _Y = waDateString.substring(0, 4)
  const _M = waDateString.substring(4, 6)
  const _D = waDateString.substring(6, 8)

  dateString = `${monthNames[parseInt(_M - 1)]} ${parseInt(_D)}, ${_Y}`

  console.log('short:', msdhLong.substring(0, msdhLong.search(', 2') + 6))
  console.log('long:', msdhShort.substring(0, msdhShort.search(', 2') + 6))
  console.log('parsed:', dateString)

  return dateString
}

module.exports = webArchiveDateParser
