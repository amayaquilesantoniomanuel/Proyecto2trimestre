 /*Queremos saber cuando cobran nuestros empleados así como obtener su información personal.*/
 db.Empleados.aggregate([
    {
        $unwind: {
            path: "$HorasSemanales",
            includeArrayIndex: "Indices"
        }
    },
    {
    $lookup: {
        from: "Puestos",
        localField: "Indices",
        foreignField: "_id",
        as: "PuestoTrabajo"
    }
    },
    {
        $project: {
            Empleado: {$concat: ["$Nombre", " " ,"$Apellidos"]},
            DNIEmpleado: "$_id",
            HorasTrabajadas:"$HorasSemanales",
            "_id":0,
            FechaNacimiento: {$concat: ["Día ", {$toString: {$dayOfMonth: "$FechaNac"}}," del mes ",{$toString:{$month: "$FechaNac"}}," del año ",{$toString:{$year: "$FechaNac"}}]},
            SalarioHora:"$PuestoTrabajo.SalarioHora",
        }
    },
    {$unwind: "$SalarioHora"},
    {
        $project: {
            "Empleado":1,
            "DNIEmpleado":1,
            "FechaNacimiento":1,
            Salario: {$avg: {$multiply: ["$HorasTrabajadas", "$SalarioHora"]}},
        }
    },
    {
    $group: {
        _id: "$Empleado",
        DNI: {$first: "$DNIEmpleado"},
        FechaNacimiento: {$first: "$FechaNacimiento"},
        Salario: {$avg: {$sum: ["$Salario"]}}
    },
}
])

/*queremos saber la informacion sobre las compras de nuestros clientes cuyo nombre empiece por A*/
db.Clientes.aggregate([
    {
        $match: {
            Nombre: { $regex: "^A" }
        }
    },
    {
        $project: {
            _id: 0,
            Nombre: "$Nombre",
            DNI: "$_id",
            Residencia: "$Provincia",
            AñoNacimiento: { $year: "$FechaNac" }
        }
    },
    {
        $lookup:
        {
            from: "Ventas",
            localField: "DNI",
            foreignField: "DNICliente",
            as: "Compras"
        }
    },
    {
        $project:
        {
            "Residencia": 0,
            "Compras._id": 0,
            "Compras.DNICliente": 0,
            "Compras.DNIempleado": 0,
            "Compras.Comercio": 0,
            "Compras.Fecha": 0,
            "Compras.Productos.Cantidad": 0
        }
    },
    {
        $lookup:
        {
            from: "Productos",
            localField: "Compras.Productos._id",
            foreignField: "_id",
            as: "Producto"
        }
    }
]).pretty();

/*
ueremos saber un estudio de las ventas según el día, el mes y el año.
 Analizando los productos más vendidos, la media de Items vendidos de la tienda.
*/ 
db.Ventas.aggregate([
    {
        $unwind: "$Productos"
    },
    {
        $group: {
            _id: {
                Mes: { $month: "$Fecha" }, Dia: { $dayOfMonth: "$Fecha" }, Año: { $year: "$Fecha" }
            },
            TotalVentaItems: { $sum: "$Productos.cantidad" },
            MaximoNumeroItems: { $max: "$Productos.cantidad" },
            MediaVentaItems: { $avg: "$Productos.cantidad" },
            IdItemMasvendido: { $max: "$Productos._id" }
        }
    },
    {
        $lookup: {
            from: "Productos",
            localField: "IdItemMasvendido",
            foreignField: "_id",
            as: "Item"
        }
    },
    {
        $project: {
            _id: 1,
            "NumeroVentas":1,
            "TotalVentaItems": 1,
            "MaximoNumeroItems": 1,
            MediaVentaItems: { $round: ["$MediaVentaItems", 2] },
            ItemMasVendido: "$Item.Nombre",
        }
    },
    {
        $sort: {
            _id: 1
        }
    },
])

/*
Queremos calcular lo que cuesta cada uno de nuestros Productos con y sin iva.
*/
db.Ventas.aggregate([
    {
        $unwind:
        {
            path: "$Productos"
        }
    },
    {
        $lookup:
        {
            from: "Productos",
            localField: "Productos._id",
            foreignField: "_id",
            as: "Items"
        }
    },
    { $unwind: "$Items" },
    {
        $project:
        {
            _id: 1,
            Precio: { $multiply: ["$Productos.cantidad", "$Items.PrecioUnidad"] },
            DNICliente: 1,
            Comercio: 1,
            Productos: 1,
            Items: 1
        }
    },
    {
        $group:
        {
            _id: "$_id",
            PrecioBruto: { $sum: { $multiply: ["$Precio", 1] } },
            PrecioIva: { $sum: { $multiply: ["$Precio", 1.21] } },
        }
    },
    {
        $project:
        {
            "PrecioBruto":1,
            PrecioIva: { $round: ["$PrecioIva", 2] }
        }
    }
]).pretty();