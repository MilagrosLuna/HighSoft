--  Seleccionar las cuentas con saldo negativo
SELECT account_id, balance
FROM cuenta
WHERE balance <0;

--  Seleccionar el nombre, apellido y edad de los clientes que tengan en el
-- apellido la letra Z
SELECT nombre,apellido,edad
FROM vista_cliente
WHERE UPPER(apellido)LIKE '%Z%';

--  Seleccionar el nombre, apellido, edad y nombre de sucursal de las personas
-- cuyo nombre sea “Brendan” y el resultado ordenarlo por nombre de
-- sucursal
SELECT c.nombre, c.apellido, c.edad, s.branch_name as nombre_sucursal
FROM vista_cliente c
JOIN sucursal s ON s.branch_number = c.numero_sucursal;

--  Seleccionar de la tabla de préstamos, los préstamos con un importe mayor
-- a $80.000 y los préstamos prendarios utilizando la unión de
-- tablas/consultas (recordar que en las bases de datos la moneda se guarda
-- como integer, en este caso con 2 centavos)
SELECT * FROM prestamo
WHERE loan_total >8000000
UNION 
SELECT * FROM prestamo
WHERE loan_type = 'PRENDARIO';


--  Seleccionar los prestamos cuyo importe sea mayor que el importe medio de
-- todos los prestamos
SELECT * FROM prestamo
WHERE loan_total > (SELECT AVG(loan_total) FROM prestamo);


--  Contar la cantidad de clientes menores a 50 años
SELECT COUNT(*) AS menores_50anios
FROM vista_cliente
WHERE edad < 50;


--  Seleccionar las primeras 5 cuentas con saldo mayor a 8.000$
SELECT * FROM cuenta
WHERE balance >800000 -- tiene centavos
ORDER BY balance
LIMIT 5;

--  Seleccionar los préstamos que tengan fecha en abril, junio y agosto,
-- ordenándolos por importe
SELECT * FROM prestamo
WHERE strftime('%m', loan_date) IN ('04', '06', '08')
ORDER BY loan_total;


--  Obtener el importe total de los prestamos agrupados por tipo de préstamos.
-- Por cada tipo de préstamo de la tabla préstamo, calcular la suma de sus
-- importes. Renombrar la columna como loan_total_accu
SELECT loan_type, SUM(loan_total) as loan_total_accu
FROM prestamo
GROUP BY loan_type;