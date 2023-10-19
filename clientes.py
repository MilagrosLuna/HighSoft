import json

class Transaccion:
    def __init__(self,estado,tipo,cuentaNumero,permitidoActualParaTransaccion,monto,fecha,numero) -> None:
        self.estado = estado
        self.tipo = tipo
        self.cuentaNumero = cuentaNumero
        self.permitidoActualParaTransaccion = permitidoActualParaTransaccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero

class Cliente:
    def __init__(self, numero, nombre, apellido, dni, tipo):
        self.numero = numero
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.tipo = tipo
        self.transacciones = []

    def agregar_transaccion(self, transaccion):
        self.transacciones.append(transaccion)

    def generar_reporte(self):
        reporte = {
            "numero": self.numero,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "dni": self.dni,
            "tipo": self.tipo,
            "transacciones": [vars(transaccion) for transaccion in self.transacciones]
        }
        return json.dumps(reporte, indent=4)


class Black(Cliente):
    def __init__(self, numero, nombre, apellido, dni):
        super().__init__(numero, nombre, apellido, dni, "BLACK")

class Gold(Cliente):
    def __init__(self, numero, nombre, apellido, dni):
        super().__init__(numero, nombre, apellido, dni, "GOLD")

class Classic(Cliente):
    def __init__(self, numero, nombre, apellido, dni):
        super().__init__(numero, nombre, apellido, dni, "CLASSIC")


data_json = [
    {
        "numero": 100001,
        "nombre": "Nicolas",
        "apellido": "Gaston",
        "dni": "29494777",
        "tipo": "BLACK",
        "transacciones": [
            {
                "estado": "ACEPTADA",
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
                "cuentaNumero": 190,
                "permitidoActualParaTransaccion": 9000,
                "monto": 1000,
                "fecha": "10/10/2022 16:00:55",
                "numero": 1
            },
            {
                "estado": "RECHAZADA",
                "tipo": "COMPRA_EN_CUOTAS_TARJETA_VISA",
                "cuentaNumero": 190,
                "permitidoActualParaTransaccion": 9000,
                "monto": 750000,
                "fecha": "10/10/2022 16:14:35",
                "numero": 2
            }
        ]
    },
    {
        "numero": 100001,
        "nombre": "Nicolas",
        "apellido": "Gaston",
        "dni": "29494777",
        "tipo": "GOLD",
        "transacciones": [
            {
                "estado": "ACEPTADA",
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
                "cuentaNumero": 190,
                "permitidoActualParaTransaccion": 9000,
                "monto": 1000,
                "fecha": "10/10/2022 16:00:55",
                "numero": 1
            },
            {
                "estado": "RECHAZADA",
                "tipo": "COMPRA_EN_CUOTAS_TARJETA_VISA",
                "cuentaNumero": 190,
                "permitidoActualParaTransaccion": 9000,
                "monto": 750000,
                "fecha": "10/10/2022 16:14:35",
                "numero": 2
            }
        ]
    }
]

def procesar_clientes_desde_json(data):
    clientes = []
    for item in data:
        numero = item["numero"]
        nombre = item["nombre"]
        apellido = item["apellido"]
        dni = item["dni"]
        tipo = item["tipo"]
        transacciones = item.get("transacciones", [])

        if tipo == "BLACK":
            cliente = Black(numero, nombre, apellido, dni)
        elif tipo == "GOLD":
            cliente = Gold(numero, nombre, apellido, dni)
        elif tipo == "CLASSIC":
            cliente = Classic(numero, nombre, apellido, dni)

        for transaccion_data in transacciones:
            transaccion = Transaccion(**transaccion_data)
            cliente.agregar_transaccion(transaccion)

        clientes.append(cliente)

    return clientes


clientes = procesar_clientes_desde_json(data_json)

# Generar reportes para todos los clientes
for cliente in clientes:
    print(cliente)
    print(cliente.generar_reporte())













# las operaciones están limitadas a:
# RETIRO_EFECTIVO_CAJERO_AUTOMATICO
# RETIRO_EFECTIVO_POR_CAJA
# COMPRA_EN_CUOTAS_TARJETA_CREDITO_<tipo de tarjeta>
# COMPRA_TARJETA_CREDITO_<tipo de tarjeta>
# ALTA_TARJETA_CREDITO_<Tipo de tarjeta>
# ALTA_TARJETA_DEBITO
# ALTA_CHEQUERA
# ALTA_CUENTA_CTE_<Tipo de moneda>
# ALTA_CAJA_DE_AHORRO_<Tipo de moneda>
# ALTA_CUENTA_DE_INVERSION
# COMPRA_DOLAR
# VENTA_DOLAR
# TRANSFERENCIA_ENVIADA_<Tipo moneda>
# TRANSFERENCIA_RECIBIDA_<Tipo moneda>

class Transaccion:
    def __init__(self,estado,tipo,cuentaNumero,permitidoActualParaTransaccion,monto,fecha,numero) -> None:

        # if not isinstance(cuentaNumero,int) or cuentaNumero<0:
        #         raise ValueError("El cuentaNumero de la transaccion tiene que ser INT y no puede ser negativo")
        
        self.estado = estado
        self.tipo = tipo
        self.cuentaNumero = cuentaNumero
        self.permitidoActualParaTransaccion = permitidoActualParaTransaccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero

class ExpcionLimite(Exception):
    def __init__(self, message):
        super().__init__(message)
    
class Cliente:
    impuesto_pais = 0.30 
    ganancias = 0.35

    def __init__(self,numero,nombre,apellido,dni) -> None:

        if not isinstance(numero,int) or numero<0:
                raise ValueError("El numero de cliente tiene que ser INT y no puede ser negativo")
        if not isinstance(nombre,str) or nombre=="":
                raise TypeError("El nombre de cliente debe ser STR y no debe estar vacia")
        if not isinstance(apellido,str) or apellido=="":
                raise TypeError("El apellido de cliente debe ser STR y no debe estar vacio")
        if not isinstance(dni,int) or dni<0:
                raise ValueError("El dni de cliente tiene que ser INT y no puede ser negativo")

        self.numero = numero
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.transacciones = [] 

    def agregar_transaccion(self, transaccion):
        self.transacciones.append(transaccion)

    def calcular_monto_total(precio_dolar, monto):
        monto_total = monto * precio_dolar  
        impuesto = monto_total * (Cliente.impuesto_pais / 100)  
        ganancia = monto_total * (Cliente.ganancias / 100) 
        monto_total += impuesto + ganancia  
        return monto_total
    
    def descontar_comision(monto, comision_porcentaje):
        comision = (comision_porcentaje / 100) * monto
        monto_descontado = monto - comision
        return monto_descontado
    
    def calcular_monto_plazo_fijo(monto_inicial, interes_porcentaje):
        monto_final = monto_inicial + (monto_inicial * (interes_porcentaje / 100))
        return monto_final

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
# - Hasta 5 tarjetas de débito.
# - Hasta 5 cajas de ahorro en pesos y dólares sin cargos adicionales, luego se aplica uncargo extra.
# - Hasta 3 cuentas corrientes sin cargos adicionales.
# - Tarjetas VISA, Mastercard y/o American Express con hasta 10 extensiones cada una,con límites de $500,000 en un pago y $600,000 en cuotas.
# - Retiro máximo de $100,000 por día sin comisiones, con retiros ilimitados al mes sincosto adicional.
# - Acceso a cuentas de inversión.
# - Posibilidad de tener hasta dos chequeras.
# - No se aplican comisiones a las transferencias

class Gold(Cliente):
    pass
# - Una tarjeta de débito.
# - Hasta 2 cajas de ahorro y una cuenta corriente sin cargos adicionales. Se aplica uncargo mensual extra por cajas de ahorro en dólares adicionales.
# - Tarjetas VISA y/o Mastercard con hasta 5 extensiones cada una, con límites de$150,000 en un pago y $100,000 en cuotas.
# - Máximo de $20,000 en retiros diarios sin comisiones. Retiros ilimitados sin costomensual.
# - Acceso a cuentas de inversión.
# - Posibilidad de tener una chequera.
# - Comisión del 0.5% por transferencias salientes y 0.1% por transferencias entrantes.

class Classic(Cliente):
    pass
#Una tarjeta de débito.
# - Caja de ahorro en pesos.
# - Opcionalmente, caja de ahorro en dólares con cargo mensual.
# - Hasta 5 retiros de dinero en efectivo sin comisiones, luego se aplica una tarifa.
#  El límitediario de retiro es de $10,000 por cajero.
# - No tienen acceso a tarjetas de crédito.
# - Comisión del 1% por transferencias salientes y 0.5% por transferencias entrantes



