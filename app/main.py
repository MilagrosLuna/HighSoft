import json
from datetime import datetime

# Definir las funciones de cálculo
def calcular_monto_total(precio_dolar, monto):
    # Implementa la lógica para calcular el monto total
    impuesto_pais = 0.3  # Ejemplo de impuesto país
    ganancias = 0.1  # Ejemplo de ganancias
    total = monto + (monto * impuesto_pais) + (monto * ganancias)
    return total

def descontar_comision(monto, comision):
    # Implementa la lógica para descontar la comisión
    monto_descontado = monto - (monto * comision / 100)
    return monto_descontado

def calcular_monto_plazo_fijo(monto, interes):
    # Implementa la lógica para calcular el monto de plazo fijo
    monto_final = monto + (monto * interes / 100)
    return monto_final

# Cargar datos de clientes desde el archivo clientes.json
def cargar_clientes():
    with open('clientes.json', 'r') as file:
        data = json.load(file)
    return data

# Función para generar un informe de movimientos en formato HTML
def generar_informe(cliente):
    # Implementa la generación del informe en HTML según la estructura proporcionada en la consigna
    # Puedes utilizar una librería para crear HTML o escribirlo manualmente.
    numero = cliente['numero']
    nombre = cliente['nombre']
    apellido = cliente['apellido']
    dni = cliente['dni']
    tipo_cliente = cliente['tipo']

    transacciones = cliente.get('transacciones', [])

    informe = f"""
    <html>
    <head>
        <title>Informe de Movimientos</title>
    </head>
    <body>
        <h1>Informe de Movimientos para el Cliente {nombre} {apellido}</h1>
        <p>Número de Cliente: {numero}</p>
        <p>DNI: {dni}</p>
        <p>Tipo de Cliente: {tipo_cliente}</p>
        <table border="1">
            <tr>
                <th>Estado</th>
                <th>Tipo de Transacción</th>
                <th>Número de Cuenta</th>
                <th>Permitido Actual</th>
                <th>Monto</th>
                <th>Fecha</th>
            </tr>
    """

    for transaccion in transacciones:
        estado = transaccion['estado']
        tipo_transaccion = transaccion['tipo']
        cuenta_numero = transaccion.get('cuentaNumero', '')
        permitido_actual = transaccion.get('permitidoActualParaTransaccion', '')
        monto = transaccion['monto']
        fecha = transaccion['fecha']

        informe += f"""
            <tr>
                <td>{estado}</td>
                <td>{tipo_transaccion}</td>
                <td>{cuenta_numero}</td>
                <td>{permitido_actual}</td>
                <td>${monto:.2f}</td>
                <td>{fecha}</td>
            </tr>
        """

    informe += """
        </table>
    </body>
    </html>
    """
    return informe

if __name__ == "__main__":
    # Cargar datos de clientes desde el archivo JSON
    clientes_data = cargar_clientes()

    # Realizar algunas operaciones de ejemplo
    for cliente_data in clientes_data:
        nombre = cliente_data['nombre']
        tipo_cliente = cliente_data['tipo']

        if tipo_cliente == 'Classic':
            from cliente import Classic
            cliente = Classic(**cliente_data)
        elif tipo_cliente == 'Gold':
            from cliente import Gold
            cliente = Gold(**cliente_data)
        elif tipo_cliente == 'Black':
            from cliente import Black
            cliente = Black(**cliente_data)

        # Ejemplo de cálculo del monto total
        monto_total = calcular_monto_total(100, 1000)

        # Ejemplo de descuento de comisión
        monto_descontado = descontar_comision(1000, 5)

        # Ejemplo de cálculo de monto de plazo fijo
        monto_plazo_fijo = calcular_monto_plazo_fijo(5000, 3)

        # Generar informe de movimientos
        informe = generar_informe(cliente)

        print(f"Cliente: {nombre} ({tipo_cliente})")
        print(f"Monto Total: ${monto_total:.2f}")
        print(f"Monto Descontado: ${monto_descontado:.2f}")
        print(f"Monto Plazo Fijo: ${monto_plazo_fijo:.2f}\n")

        # Guardar el informe en un archivo HTML
        with open(f"informe_{cliente_data['numero']}.html", "w") as informe_file:
            informe_file.write(informe)
