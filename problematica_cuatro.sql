-- Listar la cantidad de clientes por nombre de sucursal ordenando de mayor a menor
SELECT s.branch_name AS sucursal, COUNT(*) AS cantidad_clientes
FROM vista_cliente AS c
JOIN sucursal AS s ON c.numero_sucursal = s.branch_number
GROUP BY sucursal
ORDER BY cantidad_clientes DESC;

-- Obtener la cantidad de empleados por cliente por sucursal en un número real
SELECT s.branch_name AS sucursal, c.nombre AS cliente, COUNT(e.employee_id) AS cantidad_empleados
FROM vista_cliente AS c
JOIN sucursal AS s ON c.numero_sucursal = s.branch_number
LEFT JOIN empleado AS e ON s.branch_id = e.branch_id
GROUP BY sucursal, cliente
ORDER BY sucursal, cliente;

-- Obtener la cantidad de tarjetas de crédito por tipo por sucursal
SELECT s.branch_name AS sucursal, m.marca_tarjeta_nombre AS tipo_tarjeta, COUNT(t.tarjeta_id) AS cantidad_tarjetas
FROM marca_tarjeta AS m
JOIN tarjeta AS t ON m.marca_tajeta_id = t.marca_tarjeta_id
JOIN cliente AS c ON t.customer_id = c.customer_id
JOIN sucursal AS s ON c.branch_id = s.branch_id
GROUP BY sucursal, tipo_tarjeta
ORDER BY sucursal, tipo_tarjeta;

-- Obtener el promedio de créditos otorgado por sucursal

SELECT s.branch_name AS sucursal, AVG(p.loan_total) AS promedio_credito
FROM prestamo AS p
JOIN cliente AS c ON p.customer_id = c.customer_id
JOIN sucursal AS s ON c.branch_id = s.branch_id
GROUP BY s.branch_name;

-- Crear la tabla "auditoria_cuenta" para guardar los datos de movimientos
CREATE TABLE auditoria_cuenta(
    auditoria_id INTEGER PRIMARY KEY AUTOINCREMENT,
    old_id INTEGER NOT NULL,
    new_id INTEGER NOT NULL,
    old_balance DECIMAL(10, 2) NOT NULL,
    new_balance DECIMAL(10, 2) NOT NULL,
    old_iban CHAR(20) NOT NULL,
    new_iban CHAR(20) NOT NULL,
    old_type CHAR(20) NOT NULL,
    new_type CHAR(20) NOT NULL,
    user_action CHAR(20) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Crear un trigger que registre en la tabla "auditoria_cuenta" después de actualizar la tabla "cuenta"
CREATE TRIGGER audit_cuenta
AFTER UPDATE ON cuenta
BEGIN
    INSERT INTO auditoria_cuenta (old_id, new_id, old_balance, new_balance, old_iban, new_iban, old_type, new_type, user_action)
    VALUES (OLD.account_id, NEW.account_id, OLD.balance, NEW.balance, OLD.iban, NEW.iban, OLD.tipo_cuenta, NEW.tipo_cuenta, 'UPDATE');
END;

-- Restar $100 a las cuentas 10, 11, 12, 13, 14
UPDATE cuenta
SET balance = balance - 100
WHERE account_id IN (10, 11, 12, 13, 14);

-- Mediante índices mejorar la performance de búsqueda de clientes por DNI 

CREATE INDEX idx_cliente_dni ON cliente (customer_DNI);

-- Crear la tabla "movimientos" con los campos de identificación del movimiento, número de cuenta, monto, tipo de operación y hora
CREATE TABLE movimientos(
    movimiento_id INTEGER PRIMARY KEY AUTOINCREMENT,
    cuenta_id INTEGER NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    tipo_operacion CHAR(20) NOT NULL,
    hora DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Mediante el uso de transacciones, hacer una transferencia de $1,000 desde la cuenta 200 a la cuenta 400
BEGIN;
-- Realiza la transferencia desde la cuenta 200 a la cuenta 400, ROLLBACK IMPLICITO ya que si ambas inserciones son exitosas, se confirma la transacción con COMMIT, y si alguna de ellas falla, la transacción se deshace automáticamente sin necesidad de un ROLLBACK explícito.
INSERT INTO movimientos (cuenta_id, monto, tipo_operacion)
VALUES (200, -1000.00, 'TRANSFERENCIA');
INSERT INTO movimientos (cuenta_id, monto, tipo_operacion)
VALUES (400, 1000.00, 'TRANSFERENCIA');
COMMIT;

-- Registrar el movimiento en la tabla "movimientos"

SELECT * FROM movimientos;

