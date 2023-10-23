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

    def calcular_monto_total(precio_dolar, monto):
        monto_total = monto * precio_dolar  
        impuesto = monto_total * (Cliente.impuesto_pais / 100)  
        ganancia = monto_total * (Cliente.ganancias / 100) 
        monto_total += impuesto + ganancia  
        return monto_total
    
    def descontar_comision(monto, comision_porcentaje):
        comision = (comision_porcentaje / 100) * monto
        monto_descontado = monto - comision
        return monto_descontado
    
    def calcular_monto_plazo_fijo(monto_inicial, interes_porcentaje):
        monto_final = monto_inicial + (monto_inicial * (interes_porcentaje / 100))
        return monto_final

class ExpcionLimite(Exception):
    def __init__(self, message):
        super().__init__(message)
    