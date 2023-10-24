import re


class Transaccion:
     """
    Clase que representa una transacción bancaria.

    Atributos:
        - estado (str): Estado de la transacción, puede ser 'ACEPTADA' o 'RECHAZADA'.
        - tipo (str): Tipo de operación de la transacción.
        - cuentaNumero (int): Número de cuenta asociada a la transacción.
        - permitidoActualParaTransaccion (int o float): Límite disponible para la transacción.
        - monto (int o float): Monto de la transacción.
        - fecha (str): Fecha y hora de la transacción en formato 'dd/mm/yyyy hh:mm:ss'.
        - numero (int): Número de la transacción.
        - saldoDisponibleEnCuenta (int o float): Saldo disponible en la cuenta.

    Métodos:
        - __init__(estado, tipo, cuentaNumero, permitidoActualParaTransaccion, monto, fecha, numero, saldoDisponibleEnCuenta): Constructor de la clase.
        - obtener_motivo(cliente): Establece el motivo de la transacción (aprobada o rechazada) basado en el tipo de cliente y otras condiciones.

    Atributos de Clase:
        - TIPO_OPERACIONES (list): Lista de tipos de operaciones válidas.

    """
    
    TIPO_OPERACIONES = [
        "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
        "RETIRO_EFECTIVO_POR_CAJA",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_VISA",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_AMEX",
        "COMPRA_EN_CUOTAS_TARJETA_CREDITO_MASTER",
        "COMPRA_TARJETA_CREDITO_VISA",
        "COMPRA_TARJETA_CREDITO_AMEX",
        "COMPRA_TARJETA_CREDITO_MASTER",
        "ALTA_TARJETA_CREDITO_VISA",
        "ALTA_TARJETA_CREDITO_AMEX",
        "ALTA_TARJETA_CREDITO_MASTER",
        "ALTA_TARJETA_DEBITO",
        "ALTA_CHEQUERA",
        "ALTA_CUENTA_CTE_PESOS",
        "ALTA_CUENTA_CTE_DOLARES",
        "ALTA_CAJA_DE_AHORRO_PESOS",
        "ALTA_CAJA_DE_AHORRO_DOLARES",
        "ALTA_CUENTA_DE_INVERSION",
        "COMPRA_DOLAR",
        "VENTA_DOLAR",
        "TRANSFERENCIA_ENVIADA_PESOS",
        "TRANSFERENCIA_ENVIADA_DOLARES",
        "TRANSFERENCIA_RECIBIDA_PESOS",
        "TRANSFERENCIA_RECIBIDA_DOLARES",
    ]

    fecha_regex = r"\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}"

    def __init__(self, estado, tipo, cuentaNumero, permitidoActualParaTransaccion, monto, fecha, numero,saldoDisponibleEnCuenta) -> None:
        """
        Inicializa una transacción bancaria.

        Args:
            - estado (str): Estado de la transacción ('ACEPTADA' o 'RECHAZADA').
            - tipo (str): Tipo de operación de la transacción.
            - cuentaNumero (int): Número de cuenta asociada a la transacción.
            - permitidoActualParaTransaccion (int o float): Límite disponible para la transacción.
            - monto (int o float): Monto de la transacción.
            - fecha (str): Fecha y hora de la transacción en formato 'dd/mm/yyyy hh:mm:ss'.
            - numero (int): Número de la transacción.
            - saldoDisponibleEnCuenta (int o float): Saldo disponible en la cuenta.
        """

        if not isinstance(estado, str) or not estado in ["ACEPTADA", "RECHAZADA"]:
            raise ValueError(
                "El estado de Transaccion debe ser ACEPTADA | RECHAZADA")

        if (
            not isinstance(tipo, str)
            or tipo == ""
            or not tipo in Transaccion.TIPO_OPERACIONES
        ):
            raise ValueError(
                "El tipo de Transaccion debe ser STR y estar en la lista"
            )

        if (not isinstance(permitidoActualParaTransaccion, int | float) or permitidoActualParaTransaccion < 0 ):
            raise ValueError(
                "El permitidoActualParaTransaccion debe ser un INT o un FLOAT y ser un mayor a 0"
            )

        if not isinstance(monto, int | float) or monto < 0:
            raise ValueError(
                "El monto de Transaccion debe ser un INT o un FLOAT y ser un mayor a 0"
            )

        if not isinstance(fecha, str) or not re.match(Transaccion.fecha_regex, fecha):
            raise ValueError(
                "La fecha de Transaccion debe ser un STR y ser tener el forato de dd/mm/yyyy hh:mm:ss"
            )

        if not isinstance(numero, int) or numero < 0:
            raise ValueError(
                "El numero de Transaccion debe ser un INT y ser mayor a 0")
        
        if not isinstance(saldoDisponibleEnCuenta, int | float) or saldoDisponibleEnCuenta < 0:
            raise ValueError(
                "El saldoDisponibleEnCuenta debe ser un INT o un FLOAT y ser un mayor a 0"
            )

        self.estado = estado
        self.tipo = tipo
        self.cuentaNumero = cuentaNumero
        self.permitidoActualParaTransaccion = permitidoActualParaTransaccion
        self.monto = monto
        self.fecha = fecha
        self.numero = numero
        self.saldoDisponibleEnCuenta = saldoDisponibleEnCuenta
        self.motivo = ''

    def obtener_motivo(self, cliente):
         """
        Establece el motivo de la transacción (aprobada o rechazada) basado en el tipo de cliente y otras condiciones.

        Args:
            - cliente: Instancia del cliente asociado a la transacción.

        """
        
        ''' agrega el atributo motivo, para explicar porque una operacion fue rechazada o aprobada'''

        tipo_cliente = cliente.__class__.__name__

        if self.estado == "ACEPTADA":
            self.motivo = "Es correcta la transaccion"

        elif self.permitidoActualParaTransaccion < self.monto:
            self.motivo = "No tienes limite suficiente para operar con esta transaccion"

        elif self.tipo.startswith("COMPRA_EN_CUOTAS_TARJETA_CREDITO"):
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No tiene tarjeta de crédito"

        elif self.tipo.startswith("COMPRA_TARJETA_CREDITO"):
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No tiene tarjeta de credito"

        elif self.tipo.startswith("COMPRA_DOLAR"):
            self.motivo = "No tiene fondos suficientes"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No tiene caja de ahorro en dolares"

        elif self.tipo.startswith("VENTA_DOLAR"):
            self.motivo = "No tiene suficientes dolares"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No tiene caja de ahorro en dolares"

        elif self.tipo.startswith("ALTA_TARJETA_CREDITO"):
            self.motivo = "Alcanzo su limite de tarjetas de credito"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No puede tener tarjetas de credito"

        elif self.tipo.startswith("ALTA_TARJETA_DEBITO"):
            self.motivo = "Alcanzo su limite de tarjetas de debito"

        elif self.tipo.startswith("ALTA_CHEQUERA"):
            self.motivo = "Alcanzo su limite de chequeras"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No puede tener chequereas"

        elif self.tipo.startswith("ALTA_CUENTA_CTE_DOLARES"):
            self.motivo = "No puede tener Cuenta corriente en dolares"
            if tipo_cliente == "BLACK":
                self.motivo = "Alcanzo su limite de cuentas corrientes en dolares"

        elif self.tipo.startswith("ALTA_CUENTA_CTE_PESOS"):
            self.motivo = "Alcanzo su limite de cuentas corrientes en pesos"

        elif self.tipo.startswith("ALTA_CUENTA_DE_INVERSION"):
            self.motivo = "Alcanzo su limite de cuentas de inversion"
            if tipo_cliente == "CLASSIC":
                self.motivo = "No puede tener cuenta de inversion"
