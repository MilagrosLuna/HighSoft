def validarNumero(number): 
    '''Valida si es un digito'''
    if number.isdigit():
        return True
    return False

def validarArchivoCsv(nombreArchivo): 
    '''Valida si se recibió un archivo csv, si no lo modifica y devuelve el nombre del archivo.csv'''
    extension = ""
    nombre = nombreArchivo  # Inicializamos nombre con el valor original del nombreArchivo
    
    if "." in nombreArchivo:
        # Separar el nombre del archivo y su extensión
        nombre, extension = nombreArchivo.rsplit('.', 1)
    
    # Verificar si la extensión es diferente de ".csv" y reemplazarla si es necesario
    if extension != "csv":
        nombreArchivo = f"{nombre}.csv"        
    else:
        # Si no hay un punto en el nombre del archivo, agregar ".csv" automáticamente
        nombreArchivo = f"{nombre}.csv"
    
    return nombreArchivo

def validarOpcion(opcion,valores): 
    '''Valida si la opcion esta entre los posibles valores, valores debe pasarse como ["valor", "valor", "valor"]'''
    while opcion not in valores:
        opcion = input(f"Opción no válida. Por favor, ingrese una de las siguientes opciones: {', '.join(valores)}: ").upper()
    return opcion

def  repetidos(lista): #NroCheque: Número de cheque, este debe ser único por cuenta.
    '''Valida si hay repetidos en la lista, devuelve true si hay'''
    for j in range(len(lista)):
        for i in range(j + 1, len(lista)):
            if( lista[j] == lista[i] ):
                return True

    return False



import csv
import datetime
import os

## SOLICITA DNI Y VALIDA
dniCliente = input("Ingrese el DNI del cliente: ")
while not validarNumero(dniCliente):
    dniCliente=input("DNI no válido. Por favor, ingrese un número válido: ")
dniCliente = int(dniCliente)

## SOLICITA NOMBRE DEL ARCHIVO, CONVIERTE .CSV
nombreArchivo = input("Ingrese el nombre del archivo: ")
nombreArchivo = validarArchivoCsv(nombreArchivo)
print(f"{nombreArchivo} es el nombre del archivo.")

if os.path.isfile(nombreArchivo):
    ## PREGUNTA SI SE DESEA CONSULTAR POR EMITIDOS O DEPOSITADOS
    tipoCheque = input("¿Desea consultar cheques EMITIDOS o DEPOSITADOS? 1-SI 2-NO: ")
    tipoCheque = validarOpcion(tipoCheque,["SI","NO","1","2"])
    if tipoCheque == "2" or tipoCheque=="NO":
        tipoCheque = None
    else:
        tipoCheque = input("EMITIDO o DEPOSITADO?")
        tipoCheque = validarOpcion(tipoCheque.upper(),["EMITIDO","DEPOSITADO"])

    ## PREGUNTA SI DESEA FILTRAR POR PENDIENTES APROBADOS O RECHAZADOS
    estadoCheque = input("¿Desea filtrar por estado de cheque (PENDIENTE, APROBADO, RECHAZADO)? 1-SI 2-NO:  ")
    estadoCheque = validarOpcion(estadoCheque.upper(),["SI","NO","1","2"])
    if estadoCheque == "2" or estadoCheque=="NO":
        estadoCheque = None
    else:
        estadoCheque = input("PENDIENTE, APROBADO o RECHAZADO? ")
        estadoCheque = validarOpcion(estadoCheque.upper(),["PENDIENTE","APROBADO","RECHAZADO"])
        
    # PREGUNTA SI DESEA FILTRAR POR RANGO DE FECHAS
    rangoFechas = input("¿Desea filtrar por un rango de fechas? 1-SI 2-NO:  ")
    rangoFechas = validarOpcion(rangoFechas.upper(),["SI","NO","1","2"])
    if rangoFechas == "2" or rangoFechas=="NO":
        rangoFechas = None
    else:
        fecha_inicio = input("Ingrese la fecha de inicio (YYYY-MM-DD): ")
        fecha_fin = input("Ingrese la fecha de fin (YYYY-MM-DD): ")

    ## SOLICITA COMO QUIERE QUE SALGA EL ARCHIVO Y VALIDA
    salidaArchivo = input("Si desea que el archivo salga por consola ingrese 1, si desea exportarlo a un archivo CSV ingrese 2: ")
    salidaArchivo = validarOpcion(salidaArchivo,["1","2"]) 


    #nombreArchivo = "listado_cheques.csv"

    datos_cheques = []
    with open(nombreArchivo, newline='') as csvfile:
        reader = csv.reader(csvfile) 
        for row in reader:
            nro_cheque, codigo_banco, codigo_sucursal, numero_cuenta_origen, numero_cuenta_destino, valor, fecha_origen, fecha_pago, dni, estado, tipo = row
            cheque = {
                "nro_cheque": nro_cheque,
                "codigo_banco": codigo_banco,
                "codigo_sucursal": codigo_sucursal,
                "numero_cuenta_origen": numero_cuenta_origen,
                "numero_cuenta_destino": numero_cuenta_destino,
                "valor": valor,
                "fecha_origen": fecha_origen,
                "fecha_pago": fecha_pago,
                "dni": dni,
                "estado": estado,
                "tipo": tipo
            }
            # Agregar el diccionario a la lista de cheques
            datos_cheques.append(cheque)

    if tipoCheque:
        datos_cheques = [cheque for cheque in datos_cheques if cheque["tipo"] == tipoCheque]
    if estadoCheque:
        datos_cheques = [cheque for cheque in datos_cheques if cheque["estado"] == estadoCheque]
    if rangoFechas:
        datos_cheques = [cheque for cheque in datos_cheques if fecha_inicio <= datetime.strptime(cheque["fecha_origen"], "%Y-%m-%d") <= fecha_fin]

    if salidaArchivo == "1":
        for cheque in datos_cheques:
            print(cheque)
    elif salidaArchivo == "2":
        with open(f"<{dniCliente}>", mode='w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(["nro_cheque", "codigo_banco", "codigo_sucursal", "numero_cuenta_origen", "numero_cuenta_destino", "valor", "fecha_origen", "fecha_pago", "dni", "estado", "tipo"])
            for cheque in datos_cheques:
                writer.writerow([cheque["nro_cheque"], cheque["codigo_banco"], cheque["codigo_sucursal"], cheque["numero_cuenta_origen"], cheque["numero_cuenta_destino"], cheque["valor"], cheque["fecha_origen"], cheque["fecha_pago"], cheque["dni"], cheque["estado"], cheque["tipo"]])
else:
    print("el archivo no existe")

