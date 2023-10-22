import unittest
from app.cliente import Cliente

class TestMovimientos(unittest.TestCase):
    def test_generar_informe_aceptado(self):
        # Prueba para generar un informe de transacción aceptada
        cliente = Cliente(100001, "Nicolas", "Gaston", "29494777", "BLACK")
        cliente.realizar_transaccion("ACEPTADA", "RETIRO_EFECTIVO_CAJERO_AUTOMATICO", 190, 9000, 1000)

        informe = cliente.generar_informe()
        self.assertIn("Estado: ACEPTADA", informe)
        self.assertIn("Tipo de Transacción: RETIRO_EFECTIVO_CAJERO_AUTOMATICO", informe)
        self.assertIn("Número de Cuenta: 190", informe)
        self.assertIn("Permitido Actual: 9000", informe)
        self.assertIn("Monto: $1000.00", informe)

    def test_generar_informe_rechazado(self):
        # Prueba para generar un informe de transacción rechazada
        cliente = Cliente(100002, "Maria", "Lopez", "30123456", "GOLD")
        cliente.realizar_transaccion("RECHAZADA", "COMPRA_EN_CUOTAS_TARJETA_VISA", None, None, 750000)

        informe = cliente.generar_informe()
        self.assertIn("Estado: RECHAZADA", informe)
        self.assertIn("Tipo de Transacción: COMPRA_EN_CUOTAS_TARJETA_VISA", informe)
        self.assertIn("Monto: $750000.00", informe)

if __name__ == '__main__':
    unittest.main()
