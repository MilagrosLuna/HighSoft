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

    def aumentar_limite(self, monto_aumento):
        """
        Aumenta el límite de crédito de la tarjeta.

        Args:
            monto_aumento (float): Monto adicional a agregar al límite de crédito actual.
        """
        self.limite += monto_aumento

    def disminuir_limite(self, monto_disminucion):
        """
        Disminuye el límite de crédito de la tarjeta.

        Args:
            monto_disminucion (float): Monto a restar del límite de crédito actual.
        """
        if monto_disminucion > self.limite:
            raise ValueError("El monto de disminución supera el límite actual de la tarjeta.")
        self.limite -= monto_disminucion

    def __str__(self):
        """
        Representación en cadena del objeto Tarjeta.
        """
        return f"Tarjeta {self.tipo} (Número: {self.numero}, Límite: ${self.limite:.2f})"
