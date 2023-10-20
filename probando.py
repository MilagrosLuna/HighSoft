from generar_html import generar_reporte_html
from clientes import *
import argparse
import json

parser = argparse.ArgumentParser(description='Imprime un saludo.')
parser.add_argument('archivo_json', type=str, help='El nombre del archivo JSON que se desea leer. Se debe incluir la extension del archivo')

args = parser.parse_args()
ruta_archivo = args.archivo_json

def generar_reporte(item):
        reporte = {
            "numero": item.numero,
            "nombre": item.nombre,
            "apellido": item.apellido,
            "dni": item.dni,
            "transacciones": [vars(transaccion) for transaccion in item.transacciones]
        }
        return json.dumps(reporte, indent=4)

def procesar_clientes_desde_json(data):
    clientes = []
    for item in data:
        numero = item["numero"]
        nombre = item["nombre"]
        apellido = item["apellido"]
        dni = int(item["dni"])
        tipo = item["tipo"]
        transacciones = item.get("transacciones", [])

        if tipo == "BLACK":
            cliente = Black(numero, nombre, apellido, dni)
        elif tipo == "GOLD":
            cliente = Gold(numero, nombre, apellido, dni)
        elif tipo == "CLASSIC":
            cliente = Classic(numero, nombre, apellido, dni)

        for transaccion_data in transacciones:
            transaccion = Transaccion(**transaccion_data)
            cliente.agregar_transaccion(transaccion)

        clientes.append(cliente)

    return clientes

with open(str(ruta_archivo), 'rb') as file:
    json_data = file.read()
    formated_json = json.loads(json_data)

    clientes = procesar_clientes_desde_json(formated_json)

    reportes = []

    generar_reporte_html(formated_json)





    #generar_reporte_html(str(clientes))

