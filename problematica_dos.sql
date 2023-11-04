-- Crear una vista con las columnas id, numero sucursal, nombre, apellido, DNI
-- y edad de la tabla cliente calculada a partir de la fecha de nacimiento
SELECT * from cliente;
SELECT * from sucursal;
BEGIN;
CREATE VIEW vista_cliente(id, nombre, apellido, DNI, edad, numero_sucursal)
AS
SELECT
    c.customer_id AS id,
    c.customer_name AS nombre,
    c.customer_surname AS apellido,
    c.customer_DNI AS DNI,
    strftime('%Y', 'now') - strftime('%Y', c.dob) - (strftime('%m-%d', 'now') < strftime('%m-%d', c.dob)) AS edad,
    b.branch_number AS numero_sucursal
FROM cliente AS c
JOIN sucursal AS b ON c.branch_id = b.branch_id;

COMMIT;
--DROP VIEW vista_cliente;

-- o Mostrar las columnas de los clientes, ordenadas por el DNI de menor
-- a mayor y cuya edad sea superior a 40 años

SELECT id,DNI,nombre,edad
FROM vista_cliente
WHERE edad > 40
ORDER BY DNI DESC;

-- o Mostrar todos los clientes que se llaman “Anne” o “Tyler” ordenados
-- por edad de menor a mayor

SELECT id,DNI,nombre,edad
FROM vista_cliente
WHERE nombre = 'Anne' or nombre = 'Tyler'
ORDER BY edad ASC;

--  Dado el siguiente JSON. Insertar 5 nuevos clientes en la base de datos y
-- verificar que se haya realizado con éxito la inserción
-- [
-- {
-- "customer_name": "Lois",
-- "customer_surname": "Stout",
-- "customer_DNI": 47730534,
-- "branch_id": 80,
-- "customer_dob": "1984-07-07"
-- },
-- {
-- "customer_name": "Hall",
-- "customer_surname": "Mcconnell",
-- "customer_DNI": 52055464,
-- "branch_id": 45,
-- "customer_dob": "1968-04-30"
-- },
-- {
-- "customer_name": "Hilel",
-- "customer_surname": "Mclean",
-- "customer_DNI": 43625213,
-- "branch_id": 77,
-- "customer_dob": "1993-03-28"
-- },
-- {
-- "customer_name": "Jin",
-- "customer_surname": "Cooley",
-- "customer_DNI": 21207908,
-- "branch_id": 96,
-- "customer_dob": "1959-08-24"
-- },
-- {
-- "customer_name": "Gabriel",
-- "customer_surname": "Harmon",
-- "customer_DNI": 57063950,
-- "branch_id": 27,
-- "customer_dob": "1976-04-01"
-- }
-- ]

-- SE CARGAN EN EL JSON.PY -

SELECT * FROM cliente
ORDER BY customer_id DESC
LIMIT 5;
-- los muestro para verificar



--  Actualizar 5 clientes recientemente agregados en la base de datos dado que
-- hubo un error en el JSON que traía la información, la sucursal de todos es
-- la 10
BEGIN;
UPDATE cliente
SET branch_id = 10
WHERE customer_id IN (
    SELECT customer_id FROM cliente
    ORDER BY customer_id DESC
    LIMIT 5
);
COMMIT;

BEGIN;
--  Eliminar el registro correspondiente a “Noel David” realizando la selección
-- por el nombre y apellido
DELETE FROM cliente
WHERE customer_name = 'Noel' AND customer_surname = 'David';

COMMIT;

--  Consultar sobre cuál es el tipo de préstamo de mayor importe
SELECT loan_type
FROM prestamo
ORDER BY loan_total DESC 
LIMIT 1;

SELECT loan_type, MAX(loan_total) AS max_importe
FROM prestamo;
