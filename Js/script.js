if (document.getElementById("Contacto")) {
    var boton = document.getElementById("btn")
    boton.addEventListener("click", () => {
        event.preventDefault()
        swal("Genial!", "Ya se nos envio la informacion!", "success");
    })

}
var articulos = data.response
var farmacos = []
var juguetes = []
articulos.map(articulo => {
    // console.log(articulo)
    if (articulo.tipo == "Medicamento") {
        farmacos.push(articulo)
    }
    else if (articulo.tipo == "Juguete") {
        juguetes.push(articulo)
    }
}

)

console.log(juguetes)
function grillaCosas(cosas) {
    cosas.map(cosa => {
        // console.log(cosa)
        // Informacion en variables
        var farmaImg = cosa.imagen
        var descripcion = cosa.descripcion
        var tituloN = cosa.nombre
        var precio = cosa.precio
        var stock = cosa.stock

        // Renderizo el DOM
        var contenedor = document.getElementById("contenedor")
        var carta = document.createElement("div")
        carta.className = "cartaEstilo"
        var img = document.createElement("img")
        img.src = farmaImg
        img.style.width = "350px"
        var titulo = document.createElement("h5")
        var desc = document.createElement("p")

        titulo.innerText = tituloN
        desc.innerText = descripcion

        desc.style.textAlign = "justify"

        carta.append(img, titulo, desc)
        contenedor.append(carta)

    })
}
if(document.getElementById("toys")){
    grillaCosas(juguetes)
}
if(document.getElementById("farm")){
    grillaCosas(farmacos)
}

