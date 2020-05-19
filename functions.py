import datetime


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
