import csv
from datetime import datetime
import os

# Función para cargar datos desde el archivo CSV
def cargarDatosDesdeCSV(nombre_archivo):
    datos_cheques = []
    with open(nombre_archivo, newline='') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)  # Saltar la primera fila si es la cabecera
        for row in reader:
            nro_cheque, codigo_banco, codigo_sucursal, numero_cuenta_origen, numero_cuenta_destino, valor, fecha_origen, fecha_pago, dni, estado, emitido = row
            datos_cheques.append({
                "NroCheque": nro_cheque,
                "CodigoBanco": codigo_banco,
                "CodigoScurusal": codigo_sucursal,
                "NumeroCuentaOrigen": numero_cuenta_origen,
                "NumeroCuentaDestino": numero_cuenta_destino,
                "Valor": valor,
                "FechaOrigen": fecha_origen,
                "FechaPago": fecha_pago,
                "DNI": dni,
                "Estado": estado,
                "Emitido": emitido
            })
    return datos_cheques


# Función para filtrar cheques por estado
def filtrarPorEstado(datos_cheques, estado):
    return [cheque for cheque in datos_cheques if cheque["Estado"].lower() == estado.lower()]

# Función para imprimir cheques en consola con formato
def imprimirCheques(cheques):
    if not cheques:
        print("No se encontraron cheques que coincidan con los criterios de búsqueda.")
    else:
        print("{:<10} {:<12} {:<15} {:<20} {:<20} {:<15} {:<20} {:<20} {:<10} {:<10}".format(
            "NroCheque", "CodigoBanco", "CodigoSucursal", "NumeroCuentaOrigen", "NumeroCuentaDestino",
            "Valor", "FechaOrigen", "FechaPago", "DNI", "Estado"))
        for cheque in cheques:
            print("{:<10} {:<12} {:<15} {:<20} {:<20} {:<15} {:<20} {:<20} {:<10} {:<10}".format(
                cheque['NroCheque'], cheque['CodigoBanco'], cheque['CodigoScurusal'],
                cheque['NumeroCuentaOrigen'], cheque['NumeroCuentaDestino'], cheque['Valor'],
                cheque['FechaOrigen'], cheque['FechaPago'], cheque['DNI'], cheque['Estado']))

# Función para filtrar cheques por número de DNI del cliente
def filtrarPorDNI(datos_cheques, dni):
    return [cheque for cheque in datos_cheques if cheque["DNI"] == dni]
 
# Función para exportar cheques a un archivo CSV
def exportarACSV(cheques, nombre_archivo_salida):
    if not nombre_archivo_salida.endswith('.csv'):
        nombre_archivo_salida += '.csv'
    with open(nombre_archivo_salida, mode='w', newline='') as csvfile:
        fieldnames = ["NroCheque", "CodigoBanco", "CodigoScurusal", "NumeroCuentaOrigen", "NumeroCuentaDestino", "Valor", "FechaOrigen", "FechaPago", "DNI", "Estado", "Emitido"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for cheque in cheques:
            writer.writerow(cheque)
            
            
def main():
    nombre_archivo = input("Ingrese el nombre del archivo CSV: ")
    datos_cheques = cargarDatosDesdeCSV(nombre_archivo)

    print(f"{nombre_archivo} es el nombre del archivo.")

    tipo_cheque = input("¿Desea consultar cheques EMITIDOS o DEPOSITADOS? 1-SI 2-NO: ")
    if tipo_cheque == "1":
        tipo_cheque = input("EMITIDO o DEPOSITADO? ")

    estado_filtro = input("¿Desea filtrar por estado de cheque (PENDIENTE, APROBADO, RECHAZADO)? 1-SI 2-NO: ")
    if estado_filtro == "1":
        estado = input("Ingrese el estado (PENDIENTE, APROBADO, RECHAZADO): ")
        datos_cheques = filtrarPorEstado(datos_cheques, estado)

    print("¿Desea filtrar por un rango de fechas? 1-SI 2-NO: ")
    fecha_opcion = input()
    if fecha_opcion == "1":
        print("Puede implementar el filtro de fechas aquí según sus necesidades.")

    dni_filtro = input("¿Desea filtrar por número de DNI del cliente? 1-SI 2-NO: ")
    if dni_filtro == "1":
        dni = input("Ingrese el número de DNI del cliente: ")
        datos_cheques = filtrarPorDNI(datos_cheques, dni)

    output_opcion = input("Si desea que el archivo salga por consola ingrese 1, si desea exportarlo a un archivo CSV ingrese 2: ")
    if output_opcion == "1":
        imprimirCheques(datos_cheques)
    elif output_opcion == "2":
        nombre_archivo_salida = input("Ingrese el nombre del archivo CSV de salida: ")
        exportarACSV(datos_cheques, nombre_archivo_salida)
        print(f"Los datos han sido exportados exitosamente a {nombre_archivo_salida}.")
    else:
        print("Opción no válida. Por favor, ingrese 1 para consola o 2 para archivo CSV.")

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

