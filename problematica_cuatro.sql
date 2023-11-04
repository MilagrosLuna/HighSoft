--  Listar la cantidad de clientes por nombre de sucursal ordenando de mayor
-- a menor
SELECT COUNT(c.customer_id) as cant_clientes, s.branch_name
FROM cliente c
JOIN sucursal s ON c.branch_id = s.branch_id
GROUP BY c.branch_id
ORDER BY cant_clientes DESC;

--  Obtener la cantidad de empleados por cliente por sucursal en un número
-- real


--  Obtener la cantidad de tarjetas de crédito por tipo por sucursal

--  Obtener el promedio de créditos otorgado por sucursal

--  La información de las cuentas resulta critica para la compañía, por eso es
-- necesario crear una tabla denominada “auditoria_cuenta” para guardar los
-- datos movimientos, con los siguientes campos: old_id, new_id, old_balance,
-- new_balance, old_iban, new_iban, old_type, new_type, user_action,
-- created_at

-- o Crear un trigger que después de actualizar en la tabla cuentas los
-- campos balance, IBAN o tipo de cuenta registre en la tabla auditoria

-- o Restar $100 a las cuentas 10,11,12,13,14

--  Mediante índices mejorar la performance la búsqueda de clientes por DNI

--  Crear la tabla “movimientos” con los campos de identificación del
-- movimiento, número de cuenta, monto, tipo de operación y hora

-- o Mediante el uso de transacciones, hacer una transferencia de 1000$
-- desde la cuenta 200 a la cuenta 400

-- o Registrar el movimiento en la tabla movimientos

-- o En caso de no poder realizar la operación de forma completa, realizar
-- un ROLLBACK
