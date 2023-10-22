class Tarjeta:
    def __init__(self, numero, tipo, cliente, limite):
        """
        Inicializa un objeto Tarjeta.

        Args:
            numero (int): Número de tarjeta.
            tipo (str): Tipo de tarjeta (ejemplo: VISA, MASTERCARD, AMEX).
            cliente (Cliente): Objeto de la clase Cliente al que pertenece la tarjeta.
            limite (float): Límite de crédito de la tarjeta.
        """
        self.numero = numero
        self.tipo = tipo
        self.cliente = cliente
        self.limite = limite
        self.transacciones = []

    def realizar_compra(self, monto):
        """
        Registra una compra con la tarjeta.

        Args:
            monto (float): Monto de la compra.
        """
        if monto <= self.limite:
            self.transacciones.append({"tipo": "Compra", "monto": monto})
            self.limite -= monto
        else:
            print("La compra supera el límite de la tarjeta")

    def realizar_pago(self, monto):
        """
        Registra un pago en la tarjeta.

        Args:
            monto (float): Monto del pago.
        """
        self.transacciones.append({"tipo": "Pago", "monto": monto})
        self.limite += monto

    def __str__(self):
        """
        Representación en cadena del objeto Tarjeta.
        """
        return f"Tarjeta {self.tipo} (Número: {self.numero}, Límite de Crédito: ${self.limite:.2f})"
