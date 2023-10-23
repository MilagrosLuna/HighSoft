from clientes.clientes import Cliente
from clientes.black import Black
from clientes.gold import Gold
from clientes.classic import Classic
from transaccion.transaccion import Transaccion
import json
import os

def cargar_json(nombre_archivo) -> json:
    ''' Lee un archivo JSON e instancia los objetos correspondientes '''
    if not os.path.exists(nombre_archivo):
        raise ValueError(" El archivo no existe")

    nombre_archivo = os.path.abspath(nombre_archivo)
    clientes = []
    with open(nombre_archivo, "r") as json_file:
        try:
            datos = json.load(json_file)
            for dato in datos:
                instancia = None
                if dato['tipo'] == 'BLACK':
                    instancia = Black(dato['numero'], dato['nombre'], dato['apellido'], int(dato['dni']))      

                elif dato['tipo'] == 'GOLD':
                    instancia = Gold(dato['numero'], dato['nombre'], dato['apellido'], int(dato['dni']))                   

                elif dato['tipo'] == 'CLASSIC':                    
                    instancia = Classic(dato['numero'], dato['nombre'], dato['apellido'], int(dato['dni']))  
                   
                if instancia is not None:
                    for transaccion in dato['transacciones']:
                        t = Transaccion(
                            transaccion["estado"],
                            transaccion["tipo"],
                            transaccion["cuentaNumero"],
                            transaccion["permitidoActualParaTransaccion"],
                            transaccion["monto"],
                            transaccion["fecha"],
                            transaccion["numero"],
                            transaccion["saldoDisponibleEnCuenta"]
                        )
                        t.obtener_motivo(instancia)
                        instancia.transacciones.append(t)

                clientes.append(instancia)

        except Exception as e:
            raise ValueError(
                f"Ocurrió un error al leer el Json, asegúrate que está en el formato correcto. {e}") 

    return clientes


from generar_html import generar_reporte_html
def main():
    datos = cargar_json("data.json")
    print(datos)

    # reporte = generar_reporte_html(datos)

    # # Crear el archivo HTML
    # with open('reporte1.html', 'w') as f:
    #     f.write(reporte)
     # Supongamos que 'datos' es una lista de instancias de la clase Cliente
    for i, cliente in enumerate(datos):
        reporte = generar_reporte_html(cliente)

        # Crear un archivo HTML para cada cliente
        with open(f'reporte{i+1}.html', 'w') as f:
            f.write(reporte)

        print(f"El informe del cliente {i+1} se ha guardado en 'reporte{i+1}.html'")

main()
