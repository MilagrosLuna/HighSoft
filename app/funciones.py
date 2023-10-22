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

# Función para obtener la fecha actual en formato YYYY-MM-DD HH:MM:SS
def obtener_fecha_actual():
    now = datetime.now()
    formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
    return formatted_date

# Función para realizar una transacción y registrarla en el cliente
def realizar_transaccion(cliente, estado, tipo_transaccion, cuenta_numero, permitido_actual, monto):
    transaccion = {
        "estado": estado,
        "tipo": tipo_transaccion,
        "cuentaNumero": cuenta_numero,
        "permitidoActualParaTransaccion": permitido_actual,
        "monto": monto,
        "fecha": obtener_fecha_actual()
    }
    cliente['transacciones'].append(transaccion)

    # Actualizar el saldo de la cuenta (si es necesario) y otros registros


