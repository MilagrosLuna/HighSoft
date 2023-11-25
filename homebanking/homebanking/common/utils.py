import random

def format_number(number):
    result = '{:,.2f}'.format(number/100)
    return result

def yob_choices():

    return [year for year in range(1950, 2005)]

def get_branch_id():
    return random.randint(10, 99)


