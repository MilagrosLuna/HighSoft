from clientes.clientes import Cliente
from clientes.clientes import ExpcionLimite

class Black(Cliente):
    
    limite_tarjetas_debito = 5
    limite_cajas_ahorro_pesos = 5
    limite_cajas_ahorro_dolares = 5
    limite_cuentas_corrientes = 3
    limite_tarjetas_credito = 10
    retiro_maximo_diario = 100000

    def __init__(self, numero, nombre, apellido, dni):
        super().__init__(numero, nombre, apellido, dni)
        self.tarjetas_debito = [] 
        self.cajas_ahorro_pesos = []  
        self.cajas_ahorro_dolares = []  
        self.cuentas_corrientes = []  
        self.tarjetas_credito = []  
        self.retiro_maximo_diario = 100000  
        self.inversiones = []  
        self.chequeras = []  

    def agregar_tarjeta_debito(self, tarjeta):
        if len(self.tarjetas_debito) < Black.limite_tarjetas_debito:
            self.tarjetas_debito.append(tarjeta)
        else:
            raise ExpcionLimite("se ha alcanzado el limite de tarjetas de debito.")

    def agregar_caja_ahorro_pesos(self, caja_ahorro):
        if len(self.cajas_ahorro_pesos) < Black.limite_cajas_ahorro_pesos:
            self.cajas_ahorro_pesos.append(caja_ahorro)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de cajas de ahorro en pesos.")

    def agregar_caja_ahorro_dolares(self, caja_ahorro):
        if len(self.cajas_ahorro_dolares) < Black.limite_cajas_ahorro_dolares:
            self.cajas_ahorro_dolares.append(caja_ahorro)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de cajas de ahorro en dólares.")

    def agregar_cuenta_corriente(self, cuenta_corriente):
        if len(self.cuentas_corrientes) < Black.limite_cuentas_corrientes:
            self.cuentas_corrientes.append(cuenta_corriente)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de cuentas corrientes.")

    def agregar_tarjeta_credito(self, tarjeta):
        if len(self.tarjetas_credito) < Black.agregar_tarjeta_credito:
            self.tarjetas_credito.append(tarjeta)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de tarjetas de crédito.")

    def realizar_retiro(self, monto):
        if monto <= self.retiro_maximo_diario:
            print(f"Retiro exitoso de ${monto}.")
        else:
            print("El monto excede el retiro máximo diario.")