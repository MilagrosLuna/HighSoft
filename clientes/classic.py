from clientes.clientes import Cliente
from clientes.clientes import ExpcionLimite

class Classic(Cliente):
    
    limite_tarjetas_debito = 1
    limite_cajas_ahorro_pesos = 1
    limite_cajas_ahorro_dolares = 1    
    retiro_maximo_diario = 10000
    comision_transferencia_saliente = 0.001 
    comision_transferencia_entrante = 0.005  

    def __init__(self, numero, nombre, apellido, dni):
        super().__init__(numero, nombre, apellido, dni)
        self.tarjetas_debito = [] 
        self.cajas_ahorro_pesos = []  
        self.cajas_ahorro_dolares = []  
        self.retiro_maximo_diario = 10000    
        self.inversiones = []  
        self.chequeras = []  

    def agregar_tarjeta_debito(self, tarjeta):
        if len(self.tarjetas_debito) < Classic.limite_tarjetas_debito:
            self.tarjetas_debito.append(tarjeta)
        else:
            raise ExpcionLimite("se ha alcanzado el limite de tarjetas de debito.")

    def agregar_caja_ahorro_pesos(self, caja_ahorro):
        if len(self.cajas_ahorro_pesos) < Classic.limite_cajas_ahorro_pesos:
            self.cajas_ahorro_pesos.append(caja_ahorro)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de cajas de ahorro en pesos.")

    def agregar_caja_ahorro_dolares(self, caja_ahorro):
        if len(self.cajas_ahorro_dolares) < Classic.limite_cajas_ahorro_dolares:
            self.cajas_ahorro_dolares.append(caja_ahorro)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de cajas de ahorro en dólares.")

    def agregar_tarjeta_credito(self, tarjeta):
        if len(self.tarjetas_credito) < Classic.agregar_tarjeta_credito:
            self.tarjetas_credito.append(tarjeta)
        else:
            raise ExpcionLimite("Se ha alcanzado el límite de tarjetas de crédito.")

    def realizar_retiro(self, monto):
        if monto <= self.retiro_maximo_diario:
            print(f"Retiro exitoso de ${monto}.")
            self.retiro_maximo_diario -= monto
        else:
            print("El monto excede el retiro máximo diario.")