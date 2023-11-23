def format_number(number):
    result = '{:,.2f}'.format(number/100)
    return result


def yob_choices():

    return [year for year in range(1950, 2005)]

