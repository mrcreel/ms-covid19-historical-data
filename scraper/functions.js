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

  // console.log('parsed:', dateString)

  return dateString
}

module.exports = { webArchiveDateParser }
