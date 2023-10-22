# Proyecto ITBANK - Trabajo Final Sprint 5

## Descripción
Este proyecto es parte del Trabajo Final para el Sprint 5 de ITBANK. El objetivo es implementar un sistema que gestione diferentes tipos de clientes, cuentas y transacciones financieras.

## Estructura del Proyecto
- `app`: Carpeta que contiene las clases y funciones principales de la aplicación.
- `tests`: Carpeta que contiene pruebas unitarias para las funciones y clases.
- `templates`: Carpeta que almacena las plantillas HTML para los informes.

## Requisitos
- Python 3.x
- Bibliotecas Python: unittest, jinja2 (si se utiliza para renderizar plantillas HTML)

## Instrucciones de Uso
1. Clona el repositorio a tu máquina local.

2. Instala las bibliotecas requeridas:

pip install -r requirements.txt

3. Ejecuta las pruebas unitarias:

python -m unittest discover -s tests

4. Ejecuta la aplicación principal:

python main.py


## Funcionalidades
- Gestión de diferentes tipos de clientes (Classic, Gold, Black).
- Gestión de cuentas financieras (Caja de ahorro, Cuenta Corriente, Cuenta de Inversión).
- Cálculo de monto total con impuesto país y ganancias.
- Descuento de comisiones.
- Cálculo de montos de plazo fijo.

## Informes de Movimientos
- La aplicación genera informes de movimientos en formato HTML para cada cliente.
- Los informes muestran transacciones con detalles como estado, tipo de transacción, número de cuenta, permitido actual y monto.

