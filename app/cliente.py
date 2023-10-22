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
        raise NotImplementedError("Método realizar_transaccion debe ser implementado en las subclases.")

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

    def __str__(self):
        """
        Representación en cadena del objeto Cuenta.
        """
        return f"Cuenta {self.tipo} (Número: {self.numero}, Saldo: {self.saldo})"

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

    def __str__(self):
        """
        Representación en cadena del objeto Tarjeta.
        """
        return f"Tarjeta {self.tipo} (Número: {self.numero}, Límite de Crédito: {self.limite})"

class Classic(Cliente):
    def realizar_transaccion(self, estado, tipo_transaccion, cuenta_numero, permitido_actual, monto):
        """
        Registra una transacción para el cliente Classic.

        Args:
            estado (str): Estado de la transacción (ACEPTADA o RECHAZADA).
            tipo_transaccion (str): Tipo de transacción.
            cuenta_numero (int): Número de cuenta relacionado con la transacción (opcional).
            permitido_actual (int): Límite actual para la transacción (opcional).
            monto (float): Monto de la transacción.
        """
        if tipo_transaccion == "TRANSFERENCIA":
            if permitido_actual < 10000:
                raise Exception("Clientes Classic pueden realizar transferencias de hasta $10,000.")
        elif tipo_transaccion == "RETIRO":
            if monto > 10000:
                raise Exception("Clientes Classic pueden retirar hasta $10,000 diarios sin comisiones.")
        else:
            raise Exception("Tipo de transacción no permitido para Clientes Classic.")
        
        transaccion = {
            "estado": estado,
            "tipo": tipo_transaccion,
            "cuentaNumero": cuenta_numero,
            "permitidoActualParaTransaccion": permitido_actual,
            "monto": monto
        }
        self.transacciones.append(transaccion)

class Gold(Cliente):
    def realizar_transaccion(self, estado, tipo_transaccion, cuenta_numero, permitido_actual, monto):
        """
        Registra una transacción para el cliente Gold.

        Args:
            estado (str): Estado de la transacción (ACEPTADA o RECHAZADA).
            tipo_transaccion (str): Tipo de transacción.
            cuenta_numero (int): Número de cuenta relacionado con la transacción (opcional).
            permitido_actual (int): Límite actual para la transacción (opcional).
            monto (float): Monto de la transacción.
        """
        if tipo_transaccion == "TRANSFERENCIA":
            if permitido_actual < 10000:
                raise Exception("Clientes Gold pueden realizar transferencias de hasta $10,000 con una comisión del 0.5%.")
        elif tipo_transaccion == "RETIRO":
            if monto > 20000:
                raise Exception("Clientes Gold pueden retirar hasta $20,000 diarios sin comisiones.")
        elif tipo_transaccion == "TARJETA":
            if monto > 100000:
                raise Exception("Clientes Gold pueden realizar transacciones con tarjeta de hasta $100,000.")
        else:
            raise Exception("Tipo de transacción no permitido para Clientes Gold.")
        
        transaccion = {
            "estado": estado,
            "tipo": tipo_transaccion,
            "cuentaNumero": cuenta_numero,
            "permitidoActualParaTransaccion": permitido_actual,
            "monto": monto
        }
        self.transacciones.append(transaccion)

class Black(Cliente):
    def realizar_transaccion(self, estado, tipo_transaccion, cuenta_numero, permitido_actual, monto):
        """
        Registra una transacción para el cliente Black.

        Args:
            estado (str): Estado de la transacción (ACEPTADA o RECHAZADA).
            tipo_transaccion (str): Tipo de transacción.
            cuenta_numero (int): Número de cuenta relacionado con la transacción (opcional).
            permitido_actual (int): Límite actual para la transacción (opcional).
            monto (float): Monto de la transacción.
        """
        if tipo_transaccion == "TRANSFERENCIA":
            if permitido_actual < 50000:
                raise Exception("Clientes Black pueden realizar transferencias de hasta $50,000 con una comisión del 1%.")
        elif tipo_transaccion == "RETIRO":
            if monto > 100000:
                raise Exception("Clientes Black pueden retirar hasta $100,000 diarios sin comisiones.")
        elif tipo_transaccion == "TARJETA":
            if monto > 500000:
                raise Exception("Clientes Black pueden realizar transacciones con tarjeta de hasta $500,000.")
        else:
            raise Exception("Tipo de transacción no permitido para Clientes Black.")
        
        transaccion = {
            "estado": estado,
            "tipo": tipo_transaccion,
            "cuentaNumero": cuenta_numero,
            "permitidoActualParaTransaccion": permitido_actual,
            "monto": monto
        }
        self.transacciones.append(transaccion)
