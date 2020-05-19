from os import system
import datetime

import requests
from bs4 import BeautifulSoup

from arrays import pages
from functions import getDate, getWeekday, days_of_week

system('clear')

data_dict = {}

for page in pages:

    page_date_posted = page[0]

    url = page[1]
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    # Get updated date text
    page_date_updated_text_string = soup.find(
        'div', id="assetNow_pageSubtitle").text
    page_date_updated_date_string = page_date_updated_text_string[8:]

    page_date_updated = getDate(page_date_updated_date_string)
    # Pull out the date

    # date_updated = datetime.datetime.strptime(
    #     updated_text[8:], '%B %d, %Y').date()

    # for ul in soup.select('.shadedBlue'):
    #     cases_confirmed = int(ul.select('li')[0].text.split(': ')[1])

    print(
        'Posted on:', getWeekday(page_date_posted), page_date_posted,
    )
    print(
        'Updated on:', getWeekday(page_date_updated), page_date_updated
    )
    print('==========')

    # date_dict = {
    #     'date_updated': date_updated,
    #     'cases_confirmed': cases_confirmed
    # }
    # data_dict[date_posted] = date_dict

    # print(date_dict)

# print(data_dict)
