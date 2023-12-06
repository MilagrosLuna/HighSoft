import random
import datetime


def format_number(number):
    result = '{:,.2f}'.format(number/100)
    return result


def yob_choices():

    return [year for year in range(1950, 2005)]


def get_branch_id():
    return random.randint(10, 99)


def get_emision_date():

    date = datetime.date.today()
    mes = date.month
    año = date.year

    return str(mes) + '-' + str(año)


def get_expire_date():
    date = datetime.date.today()
    mes = date.month
    año = (date.year) + 5

    return str(mes) + '-' + str(año)


def get_card_number():
    card_number = ''.join([str(random.randint(0, 9)) for _ in range(16)])
    return card_number


def get_cvv_number():
    cvv_code = ''.join([str(random.randint(0, 9)) for _ in range(3)])
    return cvv_code