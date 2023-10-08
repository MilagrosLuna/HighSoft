import csv
import argparse
from datetime import datetime

def main():
    parser = argparse.ArgumentParser(description="Procesamiento de Cheques Bancarios")

    # Argumentos de línea de comandos
    parser.add_argument("archivo_csv", help="Nombre del archivo CSV que contiene los cheques")
    parser.add_argument("dni_cliente", type=int, help="DNI del cliente para la consulta")
    parser.add_argument("salida", choices=["PANTALLA", "CSV"], help="Salida de datos: PANTALLA o CSV")
    parser.add_argument("tipo_cheque", choices=["EMITIDO", "DEPOSITADO"], help="Tipo de cheque a consultar")

    # Argumento opcional para el estado del cheque
    parser.add_argument("--estado", choices=["PENDIENTE", "APROBADO", "RECHAZADO"], help="Estado del cheque (opcional)")

    # Argumentos opcionales para el rango de fechas
    parser.add_argument("--fecha", nargs=2, metavar=("inicio", "fin"), help="Rango de fechas (opcional)")

    args = parser.parse_args()

    if not 10000000 <= args.dni_cliente <= 99999999:
        print("Error: El DNI debe estar en el rango de 10.000.000 a 99.999.999")
        return 


    # Validar el formato del rango de fechas (si se proporciona)
    if args.fecha:
        try:
            fecha_inicio = datetime.strptime(args.fecha[0], "%Y-%m-%d")
            fecha_fin = datetime.strptime(args.fecha[1], "%Y-%m-%d")
        except ValueError:
            print("Error: El formato de las fechas debe ser 'YYYY-MM-DD'.")
            return
    else:
        fecha_inicio = None
        fecha_fin = None

    # Leer los datos del archivo CSV
    cheques = []
    try:
        with open(args.archivo_csv, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                cheques.append(row)
    except FileNotFoundError:
        print(f"Error: El archivo {args.archivo_csv} no se encuentra.")
        return
    except Exception as e:
        print(f"Error al leer el archivo CSV: {str(e)}")
        return

    # Validar que los números de cheque sean únicos por cuenta y DNI
    cuentas = set()
    for cheque in cheques:
        cuenta = (cheque["NumeroCuentaOrigen"], cheque["DNI"], cheque["NroCheque"])
        if cuenta in cuentas:
            print(f"Error: Número de cheque repetido en la misma cuenta para el DNI {cheque['DNI']}.")
            return
        cuentas.add(cuenta)

    # Filtrar los cheques según los criterios proporcionados
    cheques_filtrados = []
    for cheque in cheques:
        fecha_origen = datetime.fromtimestamp(int(cheque["FechaOrigen"])).strftime("%Y-%m-%d %H:%M:%S")
        fecha_pago = datetime.fromtimestamp(int(cheque["FechaPago"])).strftime("%Y-%m-%d %H:%M:%S")

        if (
            int(cheque["DNI"]) == args.dni_cliente and
            cheque["Tipo"] == args.tipo_cheque and
            (args.estado is None or cheque["Estado"] == args.estado) and
            (fecha_inicio is None or fecha_inicio <= datetime.strptime(fecha_origen, "%Y-%m-%d %H:%M:%S") <= fecha_fin)   
        ):
            cheques_filtrados.append({
                "NroCheque": cheque["NroCheque"],
                "CodigoBanco": cheque["CodigoBanco"],
                "CodigoScurusal": cheque["CodigoScurusal"],
                "NumeroCuentaOrigen": cheque["NumeroCuentaOrigen"],
                "NumeroCuentaDestino": cheque["NumeroCuentaDestino"],
                "Valor": cheque["Valor"],
                "FechaOrigen": fecha_origen,
                "FechaPago": fecha_pago,
                "DNI": cheque["DNI"],
                "Estado": cheque["Estado"],
                "Tipo":cheque["Tipo"]
            })
        # En caso de no encontrar coincidencias, se muestra un mensaje al usuario y se detiene el programa
       
    if not cheques_filtrados:
        print("No se encontraron cheques para ese usuario")
    else:
        # Mostrar los resultados pantalla
        if args.salida == "PANTALLA":
            for cheque in cheques_filtrados:
                print(f"NroCheque | CodigoBanco | CodigoScurusal | NumeroCuentaOrigen | "
                    f"NumeroCuentaDestino | Valor | FechaOrigen | FechaPago | DNI | Estado | Tipo")
                print(f"{cheque['NroCheque']} | {cheque['CodigoBanco']} | {cheque['CodigoScurusal']} | "
                    f"{cheque['NumeroCuentaOrigen']} | {cheque['NumeroCuentaDestino']} | {cheque['Valor']} | "
                    f"{cheque['FechaOrigen']} | {cheque['FechaPago']} | {cheque['DNI']} | {cheque['Estado']} |{cheque['Tipo']}")
        # Exportar los resultados en archivo CSV
        elif args.salida == "CSV":
            nombre_archivo = f"{args.dni_cliente}_{int(datetime.now().timestamp())}.csv"
            try:
                with open(nombre_archivo, mode='w', newline='') as csvfile:
                    fieldnames = ["NroCheque", "CodigoBanco", "CodigoScurusal", "NumeroCuentaOrigen", "NumeroCuentaDestino", "Valor", "FechaOrigen", "FechaPago", "DNI", "Estado","Tipo"]
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                    writer.writeheader()
                    for cheque in cheques_filtrados:
                        writer.writerow(cheque)
                print(f"Resultados exportados a {nombre_archivo}")
            except Exception as e:
                print(f"Error al exportar los resultados a CSV: {str(e)}")

if __name__ == "__main__":
    main()

























             ##OLDEST VERSION##

# def validarNumero(number): 
#     '''Valida si es un digito'''
#     if number.isdigit():
#         return True
#     return False

# def validarArchivoCsv(nombreArchivo): 
#     '''Valida si se recibió un archivo csv, si no lo modifica y devuelve el nombre del archivo.csv'''
#     extension = ""
#     nombre = nombreArchivo  # Inicializamos nombre con el valor original del nombreArchivo
    
#     if "." in nombreArchivo:
#         # Separar el nombre del archivo y su extensión
#         nombre, extension = nombreArchivo.rsplit('.', 1)
    
#     # Verificar si la extensión es diferente de ".csv" y reemplazarla si es necesario
#     if extension != "csv":
#         nombreArchivo = f"{nombre}.csv"        
#     else:
#         # Si no hay un punto en el nombre del archivo, agregar ".csv" automáticamente
#         nombreArchivo = f"{nombre}.csv"
    
#     return nombreArchivo

# def validarOpcion(opcion,valores): 
#     '''Valida si la opcion esta entre los posibles valores, valores debe pasarse como ["valor", "valor", "valor"]'''
#     while opcion not in valores:
#         opcion = input(f"Opción no válida. Por favor, ingrese una de las siguientes opciones: {', '.join(valores)}: ").upper()
#     return opcion

# def  repetidos(lista): #NroCheque: Número de cheque, este debe ser único por cuenta.
#     '''Valida si hay repetidos en la lista, devuelve true si hay'''
#     for j in range(len(lista)):
#         for i in range(j + 1, len(lista)):
#             if( lista[j] == lista[i] ):
#                 return True

#     return False



# import csv
# import datetime
# import os

# ## SOLICITA DNI Y VALIDA
# dniCliente = input("Ingrese el DNI del cliente: ")
# while not validarNumero(dniCliente):
#     dniCliente=input("DNI no válido. Por favor, ingrese un número válido: ")
# dniCliente = int(dniCliente)

# ## SOLICITA NOMBRE DEL ARCHIVO, CONVIERTE .CSV
# nombreArchivo = input("Ingrese el nombre del archivo: ")
# nombreArchivo = validarArchivoCsv(nombreArchivo)
# print(f"{nombreArchivo} es el nombre del archivo.")

# if os.path.isfile(nombreArchivo):
#     ## PREGUNTA SI SE DESEA CONSULTAR POR EMITIDOS O DEPOSITADOS
#     tipoCheque = input("¿Desea consultar cheques EMITIDOS o DEPOSITADOS? 1-SI 2-NO: ")
#     tipoCheque = validarOpcion(tipoCheque,["SI","NO","1","2"])
#     if tipoCheque == "2" or tipoCheque=="NO":
#         tipoCheque = None
#     else:
#         tipoCheque = input("EMITIDO o DEPOSITADO?")
#         tipoCheque = validarOpcion(tipoCheque.upper(),["EMITIDO","DEPOSITADO"])

#     ## PREGUNTA SI DESEA FILTRAR POR PENDIENTES APROBADOS O RECHAZADOS
#     estadoCheque = input("¿Desea filtrar por estado de cheque (PENDIENTE, APROBADO, RECHAZADO)? 1-SI 2-NO:  ")
#     estadoCheque = validarOpcion(estadoCheque.upper(),["SI","NO","1","2"])
#     if estadoCheque == "2" or estadoCheque=="NO":
#         estadoCheque = None
#     else:
#         estadoCheque = input("PENDIENTE, APROBADO o RECHAZADO? ")
#         estadoCheque = validarOpcion(estadoCheque.upper(),["PENDIENTE","APROBADO","RECHAZADO"])
        
#     # PREGUNTA SI DESEA FILTRAR POR RANGO DE FECHAS
#     rangoFechas = input("¿Desea filtrar por un rango de fechas? 1-SI 2-NO:  ")
#     rangoFechas = validarOpcion(rangoFechas.upper(),["SI","NO","1","2"])
#     if rangoFechas == "2" or rangoFechas=="NO":
#         rangoFechas = None
#     else:
#         fecha_inicio = input("Ingrese la fecha de inicio (YYYY-MM-DD): ")
#         fecha_fin = input("Ingrese la fecha de fin (YYYY-MM-DD): ")

#     ## SOLICITA COMO QUIERE QUE SALGA EL ARCHIVO Y VALIDA
#     salidaArchivo = input("Si desea que el archivo salga por consola ingrese 1, si desea exportarlo a un archivo CSV ingrese 2: ")
#     salidaArchivo = validarOpcion(salidaArchivo,["1","2"]) 


#     #nombreArchivo = "listado_cheques.csv"

#     datos_cheques = []
#     with open(nombreArchivo, newline='') as csvfile:
#         reader = csv.reader(csvfile) 
#         for row in reader:
#             nro_cheque, codigo_banco, codigo_sucursal, numero_cuenta_origen, numero_cuenta_destino, valor, fecha_origen, fecha_pago, dni, estado, tipo = row
#             cheque = {
#                 "nro_cheque": nro_cheque,
#                 "codigo_banco": codigo_banco,
#                 "codigo_sucursal": codigo_sucursal,
#                 "numero_cuenta_origen": numero_cuenta_origen,
#                 "numero_cuenta_destino": numero_cuenta_destino,
#                 "valor": valor,
#                 "fecha_origen": fecha_origen,
#                 "fecha_pago": fecha_pago,
#                 "dni": dni,
#                 "estado": estado,
#                 "tipo": tipo
#             }
#             # Agregar el diccionario a la lista de cheques
#             datos_cheques.append(cheque)

#     if tipoCheque:
#         datos_cheques = [cheque for cheque in datos_cheques if cheque["tipo"] == tipoCheque]
#     if estadoCheque:
#         datos_cheques = [cheque for cheque in datos_cheques if cheque["estado"] == estadoCheque]
#     if rangoFechas:
#         datos_cheques = [cheque for cheque in datos_cheques if fecha_inicio <= datetime.strptime(cheque["fecha_origen"], "%Y-%m-%d") <= fecha_fin]

#     if salidaArchivo == "1":
#         for cheque in datos_cheques:
#             print(cheque)
#     elif salidaArchivo == "2":
#         with open(f"<{dniCliente}>", mode='w', newline='') as csvfile:
#             writer = csv.writer(csvfile)
#             writer.writerow(["nro_cheque", "codigo_banco", "codigo_sucursal", "numero_cuenta_origen", "numero_cuenta_destino", "valor", "fecha_origen", "fecha_pago", "dni", "estado", "tipo"])
#             for cheque in datos_cheques:
#                 writer.writerow([cheque["nro_cheque"], cheque["codigo_banco"], cheque["codigo_sucursal"], cheque["numero_cuenta_origen"], cheque["numero_cuenta_destino"], cheque["valor"], cheque["fecha_origen"], cheque["fecha_pago"], cheque["dni"], cheque["estado"], cheque["tipo"]])
# else:
#     print("el archivo no existe")