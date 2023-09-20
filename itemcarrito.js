class itemcarrito{
    nombre;
    precio;
    cantidad;
    subtotal;
    constructor(nombre,precio,cantidad,subtotal){
        this.nombre=nombre;
        this.precio= precio;
        this.cantidad= cantidad;
        this.subtotal=this.precio*this.cantidad;
}
}