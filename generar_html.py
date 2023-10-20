from datetime import datetime
import json

def generar_reporte_html(data):
    time = datetime.now()
#    nuevo_archivo = str(int(datetime.timestamp(time))) + ".html"
#    contenido = []

    # titulo = "<h1>Reporte</h1>"
    # contenido.append(titulo)
    # for item in data:
    #     separador = "\n<p>----------------------------</p>"
    #     numero = f"\n<p>numero: {item.numero}</p>"
    #     nombre = f"\n<p>nombre: {item.nombre}</p>"
        
    #     contenido.append(separador)
    #     contenido.append(numero)
    #     contenido.append(nombre)
    
    with open("prueba.html", 'w') as html:
        data_to_write = json.loads(json.dumps(data))
        for line in data_to_write:
            html.write(str(line))