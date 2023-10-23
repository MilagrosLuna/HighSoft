import unittest
from clientes.clientes import Cliente 

class TestFunciones(unittest.TestCase):

    def setUp(self):
        self.cliente = Cliente(666,"Juan", "Perez", 45873695)

    def test_calcular_monto_total_valor_valido(self):
        precio_dolar = 1.0 
        monto = 1000.0
        resultado_esperado = 1650.0  # 1000 * 1.0 + 30% + 35% = 1350
        resultado = self.cliente.calcular_monto_total(precio_dolar, monto)
        self.assertEqual(resultado, resultado_esperado)

    def test_calcular_monto_total_precio_dolar_negativo(self):
        # Prueba con precio del dólar negativo (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.calcular_monto_total(-1.0, 1000.0)

    def test_calcular_monto_total_monto_negativo(self):
        # Prueba con monto negativo (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.calcular_monto_total(1.0, -1000.0)

####################################################################################################

    def test_descontar_comision(self):        
        monto = 1000.0
        comision_porcentaje = 10.0
        resultado_esperado = 900.0  # 1000 - 10% = 900
        resultado = self.cliente.descontar_comision(monto, comision_porcentaje)
        self.assertEqual(resultado, resultado_esperado,msg="El resultado no dio el numero correcto")

    def test_descontar_comision_monto_negativo(self):
        # Prueba con monto negativo (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.descontar_comision(-100, 10.0)

    def test_descontar_comision_comision_fuera_del_rango(self):
        # Prueba con comisión fuera del rango (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.descontar_comision(1000.0, 110.0)

####################################################################################################

    def test_calcular_monto_plazo_fijo_valor_valido(self):
        monto_inicial = 1000.0
        interes_porcentaje = 5.0
        resultado_esperado = 1050.0  # 1000 + 5% = 1050
        resultado = self.cliente.calcular_monto_plazo_fijo(monto_inicial, interes_porcentaje)
        self.assertEqual(resultado, resultado_esperado)

    def test_calcular_monto_plazo_fijo_monto_negativo(self):
        # Prueba con monto inicial negativo (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.calcular_monto_plazo_fijo(-100, 5.0)

    def test_calcular_monto_plazo_fijo_interes_negativo(self):
        # Prueba con interés negativo (debería generar una excepción)
        with self.assertRaises(ValueError):
            self.cliente.calcular_monto_plazo_fijo(1000.0, -5.0)

####################################################################################################

if __name__ == '__main__':
    unittest.main()
