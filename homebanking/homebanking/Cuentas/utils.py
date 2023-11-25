import random
import string

def get_iban():
    numero_aleatorio = ''.join([str(random.randint(0, 9)) for _ in range(20)])

    letra_aleatoria_1 = random.choice(string.ascii_uppercase)
    letra_aleatoria_2 = random.choice(string.ascii_uppercase)

    return(letra_aleatoria_1+letra_aleatoria_2+numero_aleatorio)

def get_tipo_cuenta(tipo_cuenta_id:int):
    
    tipo_limite = ""

    if tipo_cuenta_id == 1:
        tipo_limite = 'tipo_limite_cajas_ahorro_pesos'

    if tipo_cuenta_id == 2:
        tipo_limite = 'tipo_limite_cajas_ahorro_dolares'

    if tipo_cuenta_id == 3:
        tipo_limite = 'tipo_limite_cuenta_corriente'

    if tipo_cuenta_id == 4:
        tipo_limite = 'tipo_limite_cuenta_corriente'

    if tipo_cuenta_id == 5:
        tipo_limite = 'tipo_limite_cuenta_inversion'

    return(tipo_limite)