# Documentación del Programa

Este archivo contiene la documentación de las clases y funciones del programa.

## Contenido

1. [Descripción del Programa](#descripcion-del-programa)
2. [Clases y Funciones](#clases-y-funciones)
    1. [Clientes](#clientes)
    2. [Transaccion](#transaccion)
    3. [Generar HTML](#generar-html)
    4. [Cargar JSON](#cargar-json)
    5. [Main](#main)

## Descripción del Programa

El programa es una aplicación bancaria que permite gestionar clientes, transacciones, y generar informes en formato HTML a partir de datos almacenados en archivos JSON.

## Clases y Funciones

### Clientes

#### `Cliente`

La clase `Cliente` es la clase base para diferentes tipos de clientes: Black, Gold y Classic. Proporciona atributos comunes y métodos relacionados con la gestión de transacciones.

- **Atributos:**
    - `numero`: Número de cliente.
    - `nombre`: Nombre del cliente.
    - `apellido`: Apellido del cliente.
    - `dni`: Número de documento de identidad.
    - `transacciones`: Lista de transacciones asociadas al cliente.

#### `Black`

La clase `Black` hereda de `Cliente` y agrega atributos y métodos específicos para clientes de tipo "Black."

#### `Gold`

La clase `Gold` hereda de `Cliente` y agrega atributos y metodos específicos para clientes de tipo "Gold."

#### `Classic`

La clase `Classic` hereda de `Cliente` y agrega atributos y métodos específicos para clientes de tipo "Classic."

### Transaccion

#### `Transaccion`

La clase `Transaccion` representa una transacción bancaria. Contiene atributos como estado, tipo, monto, fecha, y un método para obtener el motivo de aprobación o denegación de la transacción.

### Generar HTML

#### `generar_reporte_html(cliente)`

La función `generar_reporte_html` toma un objeto cliente y genera un informe en formato HTML que incluye detalles del cliente y sus transacciones.

### Cargar JSON

#### `cargar_json(nombre_archivo)`

La función `cargar_json` lee un archivo "data.json" que contiene información de clientes y transacciones. Los datos en el archivo JSON deben seguir una estructura específica:

#### Estructura del archivo JSON:

```json
[
    {
        "tipo": "BLACK",              // Tipo de cliente (BLACK, GOLD o CLASSIC)
        "numero": 155,                // Número de cliente (entero positivo)
        "nombre": "Matias",           // Nombre del cliente (cadena no vacía)
        "apellido": "Martinez",       // Apellido del cliente (cadena no vacía)
        "dni": 45236641,              // Número de documento de identidad (entero positivo)
        "transacciones": [            // Lista de transacciones del cliente
            {
                "estado": "ACEPTADA",  // Estado de la transacción (ACEPTADA o RECHAZADA)
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",  // Tipo de transacción
                "cuentaNumero": 100,   // Número de cuenta
                "permitidoActualParaTransaccion": 5000,      // Límite para la transacción
                "monto": 1250,         // Monto de la transacción
                "fecha": "18/10/2023 16:00:00",  // Fecha de la transacción (formato: dd/mm/yyyy hh:mm:ss)
                "numero": 1,           // Número de la transacción
                "saldoDisponibleEnCuenta": 4000,  // Saldo disponible en la cuenta
            },
            // ... Otras transacciones ...
        ]
    },
    // ... Otros clientes ...
]
```

### Main

La función `main` es la función principal del programa. Utiliza la librería `argparse` para aceptar un argumento de línea de comandos que representa el nombre del archivo JSON de entrada. Carga los datos del archivo JSON, genera informes HTML para cada cliente y los guarda en archivos individuales.
