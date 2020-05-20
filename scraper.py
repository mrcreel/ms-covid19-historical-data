from os import system
import datetime

import requests
from bs4 import BeautifulSoup

from arrays import pages
from functions import getDate, getWeekday, days_of_week, getCases

system('clear')

data_dict = {}

for page in pages:
    print('--------------------------')
    page_date_posted = page[0]
    print('-', 'Processing:', page_date_posted, '-')
    print('---Getting date...........')

    url = page[1]
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    # Get updated date text
    page_date_updated_text_string = soup.find(
        'div', id="assetNow_pageSubtitle").text
    page_date_updated_date_string = page_date_updated_text_string[8:]
    page_date_updated = getDate(page_date_updated_date_string)
    print('----Updated on:', page_date_updated)

    cases_confirmed = getCases(page_date_posted, page)

    date_dict = {
        'page_date_updated': page_date_updated,
        'cases_confirmed': cases_confirmed
    }

    data_dict[page_date_posted] = date_dict

    print('--------------------------')


print('**************************')


print(data_dict)
