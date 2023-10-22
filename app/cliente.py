class Cliente:
    def __init__(self, numero, nombre, apellido, dni, tipo):
        """
        Inicializa un objeto Cliente.

        Args:
            numero (int): Número de cliente.
            nombre (str): Nombre del cliente.
            apellido (str): Apellido del cliente.
            dni (str): Número de documento de identidad.
            tipo (str): Tipo de cliente (Classic, Gold o Black).
        """
        self.numero = numero
        self.nombre = nombre
        self.apellido = apellido
        self.dni = dni
        self.tipo = tipo
        self.cuentas = []
        self.tarjetas = []
        self.transacciones = []

    def agregar_cuenta(self, cuenta):
        """
        Agrega una cuenta al cliente.

        Args:
            cuenta (Cuenta): Objeto de la clase Cuenta a agregar.
        """
        self.cuentas.append(cuenta)

    def agregar_tarjeta(self, tarjeta):
        """
        Agrega una tarjeta al cliente.

        Args:
            tarjeta (Tarjeta): Objeto de la clase Tarjeta a agregar.
        """
        self.tarjetas.append(tarjeta)

    def realizar_transaccion(self, estado, tipo_transaccion, cuenta_numero, permitido_actual, monto):
        """
        Registra una transacción para el cliente.

        Args:
            estado (str): Estado de la transacción (ACEPTADA o RECHAZADA).
            tipo_transaccion (str): Tipo de transacción.
            cuenta_numero (int): Número de cuenta relacionado con la transacción (opcional).
            permitido_actual (int): Límite actual para la transacción (opcional).
            monto (float): Monto de la transacción.
        """
        transaccion = {
            "estado": estado,
            "tipo": tipo_transaccion,
            "cuentaNumero": cuenta_numero,
            "permitidoActualParaTransaccion": permitido_actual,
            "monto": monto
        }
        self.transacciones.append(transaccion)

    def __str__(self):
        """
        Representación en cadena del objeto Cliente.
        """
        return f"Cliente {self.nombre} {self.apellido} (Tipo: {self.tipo})"

class Cuenta:
    def __init__(self, numero, tipo, saldo):
        """
        Inicializa un objeto Cuenta.

        Args:
            numero (int): Número de cuenta.
            tipo (str): Tipo de cuenta (ejemplo: CAJA_DE_AHORRO_PESOS).
            saldo (float): Saldo de la cuenta.
        """
        self.numero = numero
        self.tipo = tipo
        self.saldo = saldo

class Tarjeta:
    def __init__(self, numero, tipo, limite):
        """
        Inicializa un objeto Tarjeta.

        Args:
            numero (int): Número de tarjeta.
            tipo (str): Tipo de tarjeta (ejemplo: VISA, MASTERCARD, AMEX).
            limite (float): Límite de crédito de la tarjeta.
        """
        self.numero = numero
        self.tipo = tipo
        self.limite = limite
