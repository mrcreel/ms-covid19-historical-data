import datetime
import requests
from bs4 import BeautifulSoup

from arrays import pages


def loopTest(test):
    idx = 0
    for item in test:
        print(idx, ')', '=>', len(item), '|', item)
        idx += 1


def getDate(date):
    date_string = date[:date.find(', 2') + 6]

    date_object = datetime.datetime.strptime(date_string, '%B %d, %Y')

    date_year = int(datetime.datetime.strftime(date_object, '%Y'))
    date_month = int(datetime.datetime.strftime(date_object, '%m'))
    date_day = int(datetime.datetime.strftime(date_object, '%d'))

    return_date = datetime.date(date_year, date_month, date_day)

    return return_date


#########################
days_of_week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


def getWeekday(date):
    return days_of_week[date.weekday()]

###########################


def getCases(date, page):
    print('---Getting cases..........')

    url = page[1]
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    test = soup.select('.shadedBlue')[0]
    test_li = test.select('li')
    if len(test_li) > 0:
        cases_confirmed = int(test_li[0].select('strong')[0].text)
    else:
        print(test)
        cases_confirmed = 99999
    # print('----Cases confirmed:', cases_confirmed)
    return cases_confirmed

    # if date <= datetime.date(2020, 3, 10):
    #     cases_confirmed = int(soup.select('.shadedBlue')[0].select('li')[
    #         0].text.split(': ')[1])
    # elif date == datetime.date(2020, 3, 11):
    #     cases_confirmed = int(soup.select('.shadedBlue')
    #                           [0].text.split(': ')[1])
    # elif date == datetime.date(2020, 3, 12):
    #     cases_confirmed = int(soup.select('.shadedBlue')[
    #                           0].select('p')[0].text.split(': ')[1])
    # else:
    #     test = soup.select('.shadedBlue')[0]
    #     print(test)
    #     # loopTest(test)
