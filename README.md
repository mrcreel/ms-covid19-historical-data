# ms-covid19-historical-data

## 1) Date stats on pager were updated

Every date worked with this code

```
const sel = '#assetNow_pageSubtitle'
const updatedOn = $(sel).text().substring(8)
const pageUpdatedOn = updatedOn.substring(0, updatedOn.search(', 2') + 6)
```

## 2) Cases per each update
