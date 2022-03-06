/*coleccion clientes*/
db.Clientes.drop();
db.Clientes.insertMany([
    {
        _id: "3545453A",
        Nombre: "Antonio",
        Apellidos: "Marquez",
        Provincia: "Sevilla",
        FechaNac: new Date(1970 - 01 - 01),
        Telefono: 5433443343
    },
    { _id: "42423243S", Nombre: "Jose", Apellidos: "Lopez", Provincia: "Madrid", FechaNac: new Date("1963-01-02"), Telefono: 49349343 },
    { _id: "21856443J", Nombre: "Maria", Apellidos: "Garcia", Provincia: "Madrid", FechaNac: new Date("1962-02-13"), Telefono: 5242353 },
    { _id: "34224343B", Nombre: "Francisco", Apellidos: "Hidalgo", Provincia: "Sevilla", FechaNac: new Date("1984-03-22"), Telefono: 52454353 },
    { _id: "32425432M", Nombre: "Alfredo", Apellidos: "Martinez", Provincia: "Barcelona", FechaNac: new Date("1994-02-12"), Telefono: 3465543 },
    { _id: "38483488B", Nombre: "Adrian", Apellidos: "Herrera", Provincia: "Barcelona", FechaNac: new Date("2002-08-14"), Telefono: 1534243 },
    { _id: "34348943S", Nombre: "Rosa", Apellidos: "Sanchez", Provincia: "Madrid", FechaNac: new Date("2004-06-16"), Telefono: 7546542765 },
    { _id: "23384824D", Nombre: "Maria", Apellidos: "Zapata", Provincia: "Barcelona", FechaNac: new Date("1985-05-17"), Telefono: 23425423 },
    { _id: "34984334N", Nombre: "Maria", Apellidos: "Romero", Provincia: "Sevilla", FechaNac: new Date("1995-05-21"), Telefono: 5242354353 },
    { _id: "23483483E", Nombre: "Greco", Apellidos: "Jimenez", Provincia: "Barcelona", FechaNac: new Date("1994-03-29"), Telefono: 253443546 },
    { _id: "24398894P", Nombre: "Cristina", Apellidos: "Losantos", Provincia: "Burgos", FechaNac: new Date("1953-11-03"), Telefono: 3524652354 }
]);

/*coleccion productos*/
db.Productos.drop();
db.Productos.insertMany([
    {
        _id: 1,
        Nombre: "Arroz Blanco",
        PrecioUnidad: 10
    },
    { _id: 2, Nombre: "Chorizo", PrecioUnidad: 15 },
    { _id: 3, Nombre: "Lomo embutido", PrecioUnidad: 10 },
    { _id: 4, Nombre: "Tortilla", PrecioUnidad: 3 },
    { _id: 5, Nombre: "Tomate cherry", PrecioUnidad: 20 },
    { _id: 6, Nombre: "Chocolate", PrecioUnidad: 10 },
    { _id: 7, Nombre: "Pollo", PrecioUnidad: 15 },
    { _id: 8, Nombre: "Batido de chocolate", PrecioUnidad: 30 },
    { _id: 9, Nombre: "Cereales", PrecioUnidad: 25 },
    { _id: 10, Nombre: "Huevos", PrecioUnidad: 10 },
    { _id: 11, Nombre: "Cocacola", PrecioUnidad: 15 },
    { _id: 12, Nombre: "Pepsi", PrecioUnidad: 5 },
    { _id: 13, Nombre: "Patatas", PrecioUnidad: 10 },
    { _id: 14, Nombre: "Pipas", PrecioUnidad: 3 },
    { _id: 15, Nombre: "Caramelos", PrecioUnidad: 5 },
    { _id: 16, Nombre: "Palomitas", PrecioUnidad: 10 },
    { _id: 17, Nombre: "Lacasitos", PrecioUnidad: 25 },
    { _id: 18, Nombre: "Galletas", PrecioUnidad: 30 },
    { _id: 19, Nombre: "Bizcocho", PrecioUnidad: 10 },
    { _id: 20, Nombre: "Nutella", PrecioUnidad: 25 },
])

/*coleccion empleados*/
db.Empleados.drop();
db.Empleados.insertMany([
    {
        _id: "94394320P",
        Nombre: "Raul",
        Apellidos: "Perez",
        FechaNac: new Date(1975 - 03 - 20),
        HorasSemanales: [6, 3, 0, 2]
    },
    { _id: "24393943N", Nombre: "Jorge", Apellidos: "Serrano", FechaNac: new Date("1970-04-10"), HorasSemanales: [5, 0, 1, 3] },
    { _id: "34243243B", Nombre: "Diego", Apellidos: "Perez", FechaNac: new Date("1970-04-10"), HorasSemanales: [2, 1, 0, 2] },
    { _id: "43939432S", Nombre: "Armando", Apellidos: "Garcia", FechaNac: new Date("1970-04-10"), HorasSemanales: [2, 0, 0, 1] },
    { _id: "93493499A", Nombre: "Estela", Apellidos: "Hidalgo", FechaNac: new Date("1970-04-10"), HorasSemanales: [3, 4, 0, 0] },
    { _id: "29321990A", Nombre: "Sofia", Apellidos: "Curro", FechaNac: new Date("1970-04-10"), HorasSemanales: [1, 0, 2, 3] },
    { _id: "39409030P", Nombre: "Ramon", Apellidos: "Chingueta", FechaNac: new Date("1970-04-10"), HorasSemanales: [2, 2, 3, 5] },
    { _id: "82439319H", Nombre: "Hector", Apellidos: "Montañez", FechaNac: new Date("1970-04-10"), HorasSemanales: [4, 1, 2, 3] },
    { _id: "24039439J", Nombre: "Elena", Apellidos: "Fuentes", FechaNac: new Date("1970-04-10"), HorasSemanales: [3, 2, 1, 3] },
    { _id: "20310202B", Nombre: "Adrian", Apellidos: "Campos", FechaNac: new Date("1970-04-10"), HorasSemanales: [4, 0, 0, 3] },
    { _id: "30402390S", Nombre: "Rafa", Apellidos: "Pons", FechaNac: new Date("1970-04-10"), HorasSemanales: [0, 0, 20, 0] },
    { _id: "29203191P", Nombre: "Juanma", Apellidos: "Ugarte", FechaNac: new Date("1970-04-10"), HorasSemanales: [6, 3, 1, 3] },
    { _id: "23020322S", Nombre: "Manuel", Apellidos: "Peña", FechaNac: new Date("1970-04-10"), HorasSemanales: [5, 0, 0, 7] },
    { _id: "92403240J", Nombre: "Miguel", Apellidos: "Romero", FechaNac: new Date("1970-04-10"), HorasSemanales: [5, 3, 2, 3] },
    { _id: "92382398P", Nombre: "Marco", Apellidos: "Zapata", FechaNac: new Date("1970-04-10"), HorasSemanales: [5, 4, 1, 3] },
    { _id: "90123902A", Nombre: "Aurelio", Apellidos: "Sanchez", FechaNac: new Date("1970-04-10"), HorasSemanales: [5, 2, 1, 3] }
])

/*coleccion ventas*/
db.Ventas.drop();
db.Ventas.insertMany([
    {
        _id: 1,
        DNICliente: "23384824D",
        DNIempleado: "24393943N",
        Comercio: "Sevilla",
        Productos: [{ _id: 1, cantidad: 3 }, { _id: 3, cantidad: 4 }, { _id: 13, cantidad: 5 }],
        Fecha: new Date("2020-03-02"),
    },
    { _id: 2, DNICliente: "34348943S", DNIempleado: "20310202B", Comercio: "Sevilla", Productos: [{ _id: 12, cantidad: 4 }, { _id: 13, cantidad: 2 }, { _id: 7, cantidad: 4 }, , { _id: 6, cantidad: 3 }], Fecha: new Date("2020-03-01") },
    { _id: 3, DNICliente: "24398894P", DNIempleado: "90123902A", Comercio: "Madrid", Productos: [{ _id: 11, cantidad: 2 }, { _id: 9, cantidad: 3 }, { _id: 6, cantidad: 4 }, { _id: 5, cantidad: 1 }, { _id: 3, cantidad: 2 }], Fecha: new Date("2020-02-28") },
    { _id: 4, DNICliente: "21856443J", DNIempleado: "29203191P", Comercio: "Madrid", Productos: [{ _id: 7, cantidad: 3 }, { _id: 8, cantidad: 4 }, { _id: 19, cantidad: 6 }], Fecha: new Date("2020-02-28") },
    { _id: 5, DNICliente: "32425432M", DNIempleado: "23020322S", Comercio: "Sevilla", Productos: [{ _id: 2, cantidad: 1 }, { _id: 10, cantidad: 3 }, { _id: 12, cantidad: 6 }], Fecha: new Date("2020-02-28") },
    { _id: 6, DNICliente: "21856443J", DNIempleado: "34243243B", Comercio: "Barcelona", Productos: [{ _id: 20, cantidad: 2 }, { _id: 18, cantidad: 3 }, { _id: 16, cantidad: 2 }], Fecha: new Date("2020-02-27") },
    { _id: 7, DNICliente: "34984334N", DNIempleado: "20310202B", Comercio: "Madrid", Productos: [{ _id: 5, cantidad: 4 }, { _id: 13, cantidad: 2 }, { _id: 9, cantidad: 5 }], Fecha: new Date("2020-02-27") },
    { _id: 8, DNICliente: "34224343B", DNIempleado: "92382398P", Comercio: "Barcelona", Productos: [{ _id: 6, cantidad: 3 }, { _id: 3, cantidad: 5 }, { _id: 8, cantidad: 3}], Fecha: new Date("2020-02-26") },
    { _id: 9, DNICliente: "23384824D", DNIempleado: "34243243B", Comercio: "Madrid", Productos: [{ _id: 12, cantidad: 4 }, { _id: 14, cantidad: 3 }, { _id: 11, cantidad: 2 }], Fecha: new Date("2020-02-26") },
    { _id: 10, DNICliente: "38483488B", DNIempleado: "90123902A", Comercio: "Barcelona", Productos: [{ _id: 7, cantidad: 4 }, { _id: 6, cantidad: 3 }, { _id: 14, cantidad: 4 }], Fecha: new Date("2020-02-25") },
    { _id: 11, DNICliente: "23483483E", DNIempleado: "29203191P", Comercio: "Sevilla", Productos: [{ _id: 16, cantidad: 4 }], Fecha: new Date("2020-02-25") },
    { _id: 12, DNICliente: "23483483E", DNIempleado: "30402390S", Comercio: "Sevilla", Productos: [{ _id: 14, cantidad: 3 },{ _id: 12, cantidad: 2 },{ _id: 13, cantidad: 3 }], Fecha: new Date("2020-02-25") },
    { _id: 13, DNICliente: "23483483E", DNIempleado: "92403240J", Comercio: "Barcelona", Productos: [{ _id: 4, cantidad: 3 }, { _id: 5, cantidad: 3 }], Fecha: new Date("2020-02-25") },
    { _id: 14, DNICliente: "23483483E", DNIempleado: "92382398P", Comercio: "Barcelona", Productos: [{ _id: 2, cantidad: 1 }], Fecha: new Date("2020-02-25") },
    { _id: 15, DNICliente: "23483483E", DNIempleado: "39409030P", Comercio: "Barcelona", Productos: [{ _id: 4, cantidad: 2 }], Fecha: new Date("2020-02-25") },
]);

/*coleccion puestos*/
db.Puestos.drop();
db.Puestos.insertMany([
    {
        _id: 0,
        Puesto: "Caja",
        SalarioHora: 10,
    },
    { _id: 1, Puesto: "Reposición", SalarioHora: 15 },
    { _id: 2, Puesto: "Limpieza", SalarioHora: 5 },
    { _id: 3, Puesto: "Seguridad", SalarioHora: 10 },
]);