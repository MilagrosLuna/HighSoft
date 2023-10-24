# Importaciones necesarias
from clientes.clientes import Cliente
from clientes.clientes import ExpcionLimite

class Black(Cliente):
    """
    Clase que representa a un cliente de tipo "Black" en el banco.
    """

    # Definición de límites y propiedades específicas para clientes "Black"
    limite_tarjetas_debito = 5
    limite_cajas_ahorro_pesos = 5
    limite_cajas_ahorro_dolares = 5
    limite_cuentas_corrientes = 3
    limite_tarjetas_credito = 10
    retiro_maximo_diario = 100000

    def __init__(self, numero, nombre, apellido, dni):
        """
        Inicializa un cliente de tipo "Black".

        Args:
            numero (int): Número de cliente.
            nombre (str): Nombre del cliente.
            apellido (str): Apellido del cliente.
            dni (str): Número de documento del cliente.
        """
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
        """
        Agrega una tarjeta de débito al cliente "Black".

        Args:
            tarjeta: Instancia de la tarjeta de débito a agregar.

        Raises:
            ExcepcionLimite: Se lanza si se alcanza el límite de tarjetas de débito.
        """
        if len(self.tarjetas_debito) < Black.limite_tarjetas_debito:
            self.tarjetas_debito.append(tarjeta)
        else:
            raise ExpcionLimite("se ha alcanzado el limite de tarjetas de debito.")

    # Los otros métodos para agregar cajas de ahorro, cuentas corrientes, tarjetas de crédito, etc. siguen una estructura similar.

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
         """
        Realiza un retiro de dinero por parte del cliente.

        Args:
            monto (int): Monto a retirar.

        Returns:
            str: Mensaje indicando si el retiro fue exitoso o si excede el límite diario.
        """
        if monto <= self.retiro_maximo_diario:
            print(f"Retiro exitoso de ${monto}.")
        else:
            print("El monto excede el retiro máximo diario.")
