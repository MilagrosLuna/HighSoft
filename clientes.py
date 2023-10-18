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