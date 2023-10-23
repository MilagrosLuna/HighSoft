from datetime import datetime
import json


def generar_reporte_html(cliente):
    ''' Genera un informe HTML con los datos del cliente '''
    tipo_cliente = type(cliente).__name__
    html = f"""
    <html>
    <head>
        <title>Informe del Cliente</title>
    </head>
    <body>
        <h1>Informe del Cliente</h1>
        <table border="1">
            <tr>
                <th>Numero</th>
                <td>{cliente.numero}</td>
            </tr>
            <tr>
                <th>Nombre</th>
                <td>{cliente.nombre}</td>
            </tr>
            <tr>
                <th>Apellido</th>
                <td>{cliente.apellido}</td>
            </tr>
            <tr>
                <th>DNI</th>
                <td>{cliente.dni}</td>
            </tr>            
            <tr>
                <th>Tipo de Cliente</th>
                <td>{tipo_cliente}</td> 
            </tr>
        </table>

        <h2>Transacciones</h2>
        <table border="1">
            <tr>
                <th>Estado</th>
                <th>Tipo</th>
                <th>Cuenta numero</th>
                <th>Permitido actual Trans.</th>
                <th>Monto</th>
                <th>Fecha</th>
                <th>Numero</th>
                <th>Saldo Cuenta</th>
                <th>Motivo</th>
            </tr>"""

    for transaccion in cliente.transacciones:
        html += f"""
            <tr>
                <td>{transaccion.estado}</td>
                <td>{transaccion.tipo}</td>
                <td>{transaccion.cuentaNumero}</td>
                <td>{transaccion.permitidoActualParaTransaccion}</td>
                <td>{transaccion.monto}</td>
                <td>{transaccion.fecha}</td>
                <td>{transaccion.numero}</td>
                <td>{transaccion.saldoDisponibleEnCuenta}</td>
                <td>{transaccion.motivo}</td>
            </tr>"""

    html += """
        </table>
    </body>
    </html>"""

    return html
