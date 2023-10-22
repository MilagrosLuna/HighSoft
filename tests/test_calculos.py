import unittest
from app.funciones import calcular_monto_total, descontar_comision, calcular_monto_plazo_fijo

class TestCalculos(unittest.TestCase):
    def test_calcular_monto_total(self):
        # Prueba para calcular_monto_total
        precio_dolar = 100  # Precio del dólar
        monto = 1000  # Monto en dólares
        resultado = calcular_monto_total(precio_dolar, monto)
        self.assertEqual(resultado, 1300.0)  # El resultado debe ser 1300.0

    def test_descontar_comision(self):
        # Prueba para descontar_comision
        monto = 1000  # Monto
        comision = 5  # Comisión del 5%
        resultado = descontar_comision(monto, comision)
        self.assertEqual(resultado, 950.0)  # El resultado debe ser 950.0

    def test_calcular_monto_plazo_fijo(self):
        # Prueba para calcular_monto_plazo_fijo
        monto = 5000  # Monto a invertir
        interes = 3  # Tasa de interés del 3%
        resultado = calcular_monto_plazo_fijo(monto, interes)
        self.assertEqual(resultado, 5150.0)  # El resultado debe ser 5150.0

if __name__ == '__main__':
    unittest.main()
