class Cliente:
     """
    Clase que representa a un cliente del banco.

    Atributos:
        - numero (int): Número de cliente.
        - nombre (str): Nombre del cliente.
        - apellido (str): Apellido del cliente.
        - dni (int): Número de documento del cliente.
        - transacciones (list): Lista de transacciones realizadas por el cliente.

    Métodos:
        - __init__(numero, nombre, apellido, dni): Constructor de la clase que inicializa un cliente.
        - agregar_transaccion(transaccion): Agrega una transacción a la lista de transacciones del cliente.
        - calcular_monto_total(precio_dolar, monto): Calcula el monto total considerando el precio del dólar, el impuesto país y las ganancias.
        - descontar_comision(monto, comision_porcentaje): Descuenta una comisión del monto especificado.
        - calcular_monto_plazo_fijo(monto_inicial, interes_porcentaje): Calcula el monto final de una inversión a plazo fijo.

    Atributos de Clase:
        - impuesto_pais (float): Tasa del impuesto país.
        - ganancias (float): Tasa de ganancias.

    Excepciones:
        - ExcepcionLimite: Excepción personalizada que se lanza cuando se alcanza un límite.

    """
    impuesto_pais = 0.30 
    ganancias = 0.35

    def __init__(self,numero,nombre,apellido,dni) -> None:
          """
        Inicializa un cliente.

        Args:
            - numero (int): Número de cliente.
            - nombre (str): Nombre del cliente.
            - apellido (str): Apellido del cliente.
            - dni (int): Número de documento del cliente.
        """

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
        """
        Agrega una transacción a la lista de transacciones del cliente.

        Args:
            - transaccion: Transacción a agregar.
        """
        self.transacciones.append(transaccion)


    def calcular_monto_total(self, precio_dolar, monto):
        """
        Calcula el monto total considerando el precio del dólar, el impuesto país y las ganancias.

        Args:
            - precio_dolar (int o float): Precio actual del dólar.
            - monto (int o float): Monto a adquirir.

        Returns:
            - float: Monto total calculado.
        """
        
        if not (isinstance(precio_dolar, (int, float)) and precio_dolar > 0):
            raise ValueError("El precio del dólar debe ser un número positivo.")
        if not (isinstance(monto, (int, float)) and monto >= 0):
            raise ValueError("El monto a adquirir debe ser un número no negativo.")

        monto_total = monto * precio_dolar
        impuesto = monto_total * self.impuesto_pais
        ganancia = monto_total * self.ganancias
        monto_total += impuesto + ganancia
        
        # Implementación del cálculo del monto total

        return monto_total
    

    def descontar_comision(self, monto, comision_porcentaje):
        """
        Descuenta una comisión del monto especificado.

        Args:
            - monto (int o float): Monto original.
            - comision_porcentaje (int o float): Comisión expresada en porcentaje.

        Returns:
            - float: Monto después de aplicar el descuento de la comisión.
        """
        
        if not (isinstance(monto, (int, float)) and monto >= 0):
            raise ValueError("El monto debe ser un número no negativo.")
        if not (isinstance(comision_porcentaje, (int, float)) and 0 <= comision_porcentaje <= 100):
            raise ValueError("La comisión debe ser un número entre 0 y 100, representando un porcentaje.")

        comision = (comision_porcentaje / 100) * monto
        monto_descontado = monto - comision
        return monto_descontado

        # Implementación del descuento de comisión
    
    def calcular_monto_plazo_fijo(self, monto_inicial, interes_porcentaje):
        """
        Calcula el monto final de una inversión a plazo fijo.

        Args:
            - monto_inicial (int o float): Monto inicial de la inversión.
            - interes_porcentaje (int o float): Tasa de interés expresada en porcentaje.

        Returns:
            - float: Monto final calculado.
        """

        if not (isinstance(monto_inicial, (int, float)) and monto_inicial >= 0):
            raise ValueError("El monto inicial debe ser un número no negativo.")
        if not (isinstance(interes_porcentaje, (int, float)) and interes_porcentaje >= 0):
            raise ValueError("El interés debe ser un número no negativo.")

        monto_final = monto_inicial + (monto_inicial * (interes_porcentaje / 100))
        return monto_final

        # Implementación del cálculo del monto final
    

class ExpcionLimite(Exception):
    def __init__(self, message):
        super().__init__(message)
    
