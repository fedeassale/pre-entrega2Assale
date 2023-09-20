
let carrito=[]
const SI="si"
const NO="no"
let opcion;
let total=0;
let cantidad;
let salir;



alert("Bienvenido a nuestra página");
let seleccion = prompt("desea ingresar un item al carrito? si/no");
while(seleccion!=SI && seleccion!=NO){
    seleccion=prompt("respuesta invalida, por favor vuelva a indicar si desea agregar otro producto o no");
}
if (seleccion == SI) {
    do{
        alert("a continuacion te mostramos todos nuestros productos");
        let todoslosproductos = listadeproductos.map((productos,index) => `${index+1}-${productos.nombre}$${productos.precio}`);
        opcion=parseInt(prompt("Que producto desea elegir?"+"\n"+todoslosproductos.join("\n")));
        while(opcion<=0 || opcion>listadeproductos.lenght||isNaN(opcion)||opcion==undefined){
            opcion=parseInt(prompt("Que producto desea elegir?"+"\n"+todoslosproductos.join("\n")));
        }
        cantidad=parseInt(prompt("cuantas unidades quiere llevar??"));
        carrito.push(new itemcarrito(listadeproductos[opcion-1].nombre,listadeproductos[opcion-1].precio,cantidad));
        let carritope = carrito.map((productos,index) => `${index+1}-${productos.nombre}-${productos.precio}-cantidad:${cantidad}`);        
        alert("Este es su carrito actual"+"\n"+carritope.join("\n"));
        salir=prompt("desea salir?? si/no")
    }while(salir!=SI);
    total= carrito.reduce((acc,item)=> acc+item.subtotal,0);
    alert(`el total a pagar es de:${total}`);

let pago=prompt("desea pagar en cuotas si/no");
function valorcuotas(total){
    let totalvalorcuotas;
    let cuotas;
    let interes=total*0.30;
        cuotas= +prompt("ingrese cantidad de cuotas");
        totalvalorcuota= ((total+interes)/cuotas);
    return totalvalorcuotas;
}
if(pago=="si"){
    valorcuotas(total)
    alert("el precio de cada cuota es $"+ totalvalorcuota);
}else{
     alert("el precio total es $"+ total); 
};
}else(seleccion==NO);{
    alert("gracias por visitarnos ")
}
