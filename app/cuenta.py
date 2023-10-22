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


class CuentaDeAhorroDolares(Cuenta):
    def __init__(self, numero, saldo):
        """
        Inicializa una cuenta de ahorro en dólares.

        Args:
            numero (int): Número de cuenta.
            saldo (float): Saldo de la cuenta en dólares.
        """
        super().__init__(numero, "CAJA_DE_AHORRO_DOLARES", saldo)

    def __str__(self):
        """
        Representación en cadena de la cuenta de ahorro en dólares.
        """
        return f"Cuenta de Ahorro en Dólares (Número: {self.numero}, Saldo: ${self.saldo:.2f})"


class CuentaCorrienteDolares(Cuenta):
    def __init(self, numero, saldo, chequera):
        """
        Inicializa una cuenta corriente en dólares.

        Args:
            numero (int): Número de cuenta.
            saldo (float): Saldo de la cuenta en dólares.
            chequera (bool): Indica si la cuenta corriente tiene chequera.
        """
        super().__init__(numero, "CUENTA_CORRIENTE_DOLARES", saldo)
        self.chequera = chequera

    def __str__(self):
        """
        Representación en cadena de la cuenta corriente en dólares.
        """
        return f"Cuenta Corriente en Dólares (Número: {self.numero}, Saldo: ${self.saldo:.2f}, Chequera: {self.chequera})"
