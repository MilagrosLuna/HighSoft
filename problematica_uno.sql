--  Crear en la base de datos los tipos de cliente, 

CREATE TABLE tipo_cliente(
    tipo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_cliente_nombre CHAR(50) NOT NULL,

    tipo_limite_cajas_ahorro INTEGER,
    tipo_limite_cajas_ahorro_pesos INTEGER,
    tipo_limite_cajas_ahorro_dolares INTEGER,
    tipo_limite_cajas_ahorro_pesos_extra INTEGER,
    tipo_limite_cajas_ahorro_dolares_extra INTEGER,

    tipo_limite_cuenta_corriente INTEGER,
    tipo_limite_cuenta_inversion INTEGER,

    tipo_limite_brand_debito INTEGER,
    tipo_limite_brand_credito INTEGER,
    tipo_limite_extesiones INTEGER,
    tipo_limite_credito INTEGER,
    tipo_limite_cuota_credito INTEGER,

    master_disp BOOLEEAN,
    visa_disp BOOLEEAN,
    amex_disp BOOLEEAN,

    tipo_limite_retiro_mensual INTEGER,
    tipo_limite_retiro_diario INTEGER,
    
    tipo_comision_saliente INTEGER,
    tipo_comision_entrante INTEGER,
    tipo_limite_chequeras INTEGER
);
INSERT INTO tipo_cliente(
  tipo_cliente_nombre ,
    tipo_limite_cajas_ahorro ,
    tipo_limite_cajas_ahorro_pesos ,
    tipo_limite_cajas_ahorro_dolares ,
    tipo_limite_cajas_ahorro_pesos_extra ,
    tipo_limite_cajas_ahorro_dolares_extra ,
    tipo_limite_cuenta_corriente ,
    tipo_limite_cuenta_inversion ,
    tipo_limite_brand_debito ,
    tipo_limite_brand_credito ,
    tipo_limite_extesiones ,
    tipo_limite_credito ,
    tipo_limite_cuota_credito ,
    master_disp ,
    visa_disp ,
    amex_disp ,
    tipo_limite_retiro_mensual ,
    tipo_limite_retiro_diario ,    
    tipo_comision_saliente ,
    tipo_comision_entrante ,
    tipo_limite_chequeras  )
VALUES
('Classic',1,1,0,0,1,0,0,1,0,0,0,0,FALSE,FALSE,FALSE,5,10000,0.01,0.005,0),
('Gold',2,2,2,0,NULL,1,1,1,NULL,5,150000,100000,TRUE,TRUE,FALSE,NULL,20000,0.005,0.001,1),
('Black',5,5,5,NULL,NULL,3,1,5,NULL,10,500000,600000,TRUE,TRUE,TRUE,NULL,100000,0,0,2);

SELECT * FROM tipo_cliente;

--  Crear en la base de datos los tipos de cuenta 

CREATE TABLE tipo_cuenta(
tipo_cuenta_id INTEGER  PRIMARY KEY AUTOINCREMENT,
tipo_cuenta_nombre char(20) NOT NULL
);

INSERT INTO tipo_cuenta(tipo_cuenta_nombre)
VALUES
('Caja de ahorro en pesos'),
('Caja de ahorro en dolares'),
('Cuenta corriente en pesos'),
('Cuenta corriente en dolares'),
('Cuenta inversion');


SELECT * FROM tipo_cuenta;

--Crear en la base de datos los tiposde marcas de tarjeta.

CREATE TABLE marca_tarjeta(
marca_tajeta_id INTEGER  PRIMARY KEY AUTOINCREMENT,
marca_tarjeta_nombre char(20) NOT NULL
);

INSERT INTO marca_tarjeta(marca_tarjeta_nombre)
VALUES
('MASTER'),
('VISA'),
('AMEX');

SELECT * FROM marca_tarjeta;




-- - Agregar la entidad tarjeta teniendo en cuenta los atributos
-- necesarios para la operación del home banking (se sugieren los
-- siguientes campos Numero (único e irrepetible, con una restricción
-- ante cada inserción que no debe superar 20 números/espacios), CVV,
-- Fecha de otorgamiento, Fecha Expiración). Almacenar si es una
-- tarjeta de crédito o débito.
-- - Relacionar las tarjetas con la tabla donde se guardan las marcas de
-- tarjeta
-- - Relacionar las tarjetas con el cliente al que pertenecen
-- - Insertar 500 tarjetas de crédito con sus respectivos datos
-- (www.generatedata.com) asociándolas a los clientes de forma
-- aleatoria
SELECT * FROM cliente;
CREATE TABLE tarjeta(
    tarjeta_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tarjeta_cvv INTEGER NOT NULL,
    tarjeta_f_otorg DATE NOT NULL,
    tarjeta_f_exp DATE NOT NULL,
    tarjeta_tipo CHAR(20) NOT NULL CHECK(tarjeta_tipo IN('DEBITO','CREDITO')),
    marca_tarjeta_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (marca_tarjeta_id) REFERENCES marca_tarjeta (marca_tarjeta_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (customer_id) REFERENCES cliente (customer_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

----INSERTAR 500 TARJETAS----

SELECT * FROM tarjeta;



-- - Agregar la entidad direcciones, que puede ser usada por los clientes,
-- empleados y sucursales con los campos utilizados en el SPRINT 5
-- - Insertar 500 direcciones, asignando del lote inicial a empleados,
-- clientes o sucursal de forma aleatoria. Teniendo en cuenta que un
-- cliente o empleado puede tener múltiples direcciones, pero la
-- sucursal, solo una.
CREATE TABLE direcciones(
    direccion_id INTEGER PRIMARY KEY AUTOINCREMENT,
    direccion_calle CHAR(20) NOT NULL,   
    direccion_provincia CHAR(20) NOT NULL,   
    direccion_pais CHAR(20) NOT NULL,   
    direccion_codigo_postal INTEGER NOT NULL
);

CREATE TABLE direccion_empleado(
    direccion_id INTEGER NOT NULL,
    employee_id INTEGER NOT NULL, 
    FOREIGN KEY (direccion_id) REFERENCES direcciones (direccion_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (employee_id) REFERENCES empleado (employee_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE direccion_cliente(
    direccion_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (direccion_id) REFERENCES direcciones (direccion_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (customer_id) REFERENCES cliente (customer_id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

SELECT * FROM sucursal;


-- asignar a sucursal las direcciones q creamos y darle datos a direccion_cliente y empelado




-- - Ampliar el alcance de la entidad cuenta para que identifique el tipo de
-- la misma
-- - Asignar un tipo de cuenta a cada registro de cuenta de forma
-- aleatoria
-- - Corregir el campo employee_hire_date de la tabla empleado con la
-- fecha en formato YYYY-MM-DD