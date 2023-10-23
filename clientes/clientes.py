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


    def calcular_monto_total(self, precio_dolar, monto):
        
        if not (isinstance(precio_dolar, (int, float)) and precio_dolar > 0):
            raise ValueError("El precio del dólar debe ser un número positivo.")
        if not (isinstance(monto, (int, float)) and monto >= 0):
            raise ValueError("El monto a adquirir debe ser un número no negativo.")

        monto_total = monto * precio_dolar
        impuesto = monto_total * self.impuesto_pais
        ganancia = monto_total * self.ganancias
        monto_total += impuesto + ganancia

        return monto_total
    

    def descontar_comision(self, monto, comision_porcentaje):
        
        if not (isinstance(monto, (int, float)) and monto >= 0):
            raise ValueError("El monto debe ser un número no negativo.")
        if not (isinstance(comision_porcentaje, (int, float)) and 0 <= comision_porcentaje <= 100):
            raise ValueError("La comisión debe ser un número entre 0 y 100, representando un porcentaje.")

        comision = (comision_porcentaje / 100) * monto
        monto_descontado = monto - comision
        return monto_descontado
    
    def calcular_monto_plazo_fijo(self, monto_inicial, interes_porcentaje):

        if not (isinstance(monto_inicial, (int, float)) and monto_inicial >= 0):
            raise ValueError("El monto inicial debe ser un número no negativo.")
        if not (isinstance(interes_porcentaje, (int, float)) and interes_porcentaje >= 0):
            raise ValueError("El interés debe ser un número no negativo.")

        monto_final = monto_inicial + (monto_inicial * (interes_porcentaje / 100))
        return monto_final
    

class ExpcionLimite(Exception):
    def __init__(self, message):
        super().__init__(message)
    