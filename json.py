# --  Dado el siguiente JSON. Insertar 5 nuevos clientes en la base de datos y
# -- verificar que se haya realizado con éxito la inserción
# -- [
# -- {
# -- "customer_name": "Lois",
# -- "customer_surname": "Stout",
# -- "customer_DNI": 47730534,
# -- "branch_id": 80,
# -- "customer_dob": "1984-07-07"
# -- },
# -- {
# -- "customer_name": "Hall",
# -- "customer_surname": "Mcconnell",
# -- "customer_DNI": 52055464,
# -- "branch_id": 45,
# -- "customer_dob": "1968-04-30"
# -- },
# -- {
# -- "customer_name": "Hilel",
# -- "customer_surname": "Mclean",
# -- "customer_DNI": 43625213,
# -- "branch_id": 77,
# -- "customer_dob": "1993-03-28"
# -- },
# -- {
# -- "customer_name": "Jin",
# -- "customer_surname": "Cooley",
# -- "customer_DNI": 21207908,
# -- "branch_id": 96,
# -- "customer_dob": "1959-08-24"
# -- },
# -- {
# -- "customer_name": "Gabriel",
# -- "customer_surname": "Harmon",
# -- "customer_DNI": 57063950,
# -- "branch_id": 27,
# -- "customer_dob": "1976-04-01"
# -- }
# -- ]
import sqlite3
import json

clientes_json = [
    {
        "customer_name": "Lois",
        "customer_surname": "Stout",
        "customer_DNI": 47730534,
        "branch_id": 80,
        "customer_dob": "1984-07-07"
    },
    {
        "customer_name": "Hall",
        "customer_surname": "Mcconnell",
        "customer_DNI": 52055464,
        "branch_id": 45,
        "customer_dob": "1968-04-30"
    },
    {
        "customer_name": "Hilel",
        "customer_surname": "Mclean",
        "customer_DNI": 43625213,
        "branch_id": 77,
        "customer_dob": "1993-03-28"
    },
    {
        "customer_name": "Jin",
        "customer_surname": "Cooley",
        "customer_DNI": 21207908,
        "branch_id": 96,
        "customer_dob": "1959-08-24"
    },
    {
        "customer_name": "Gabriel",
        "customer_surname": "Harmon",
        "customer_DNI": 57063950,
        "branch_id": 27,
        "customer_dob": "1976-04-01"
    }
]

conn = sqlite3.connect('itbank.db')
cursor = conn.cursor()

for cliente in clientes_json:
    cursor.execute(
        "INSERT INTO cliente (customer_name, customer_surname, customer_DNI, branch_id, dob) "
        "VALUES (?, ?, ?, ?, ?)",
        (cliente["customer_name"], cliente["customer_surname"], cliente["customer_DNI"],
         cliente["branch_id"], cliente["customer_dob"])
    )

# Confirmar las inserciones
conn.commit()

# Cerrar la conexión
conn.close()
