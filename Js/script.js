// Fecheo
fetch('https://apipetshop.herokuapp.com/api/articulos')
    .then(response => response.json())
    .then(listaArt => {
        // Ingreso a la lista de articulos
        var articulos = listaArt.response
        var farmacos = []
        var juguetes = []
        articulos.map(articulo => {

            if (articulo.tipo == "Medicamento") {
                farmacos.push(articulo)
            }
            else if (articulo.tipo == "Juguete") {
                juguetes.push(articulo)
            }
        })
        // Boton alerta sweet!
        if (document.getElementById("Contacto")) {
            var boton = document.getElementById("btn")
            boton.addEventListener("click", () => {
                event.preventDefault()
                swal("Genial!", "Ya se nos envio la informacion!", "success");
            })

        }

        function grillaCosas(cosas) {

            cosas.map(cosa => {
                // console.log(cosa.stock)

                // Informacion en variables

                var farmaImg = cosa.imagen
                var descripcion = cosa.descripcion
                var tituloN = cosa.nombre
                var precio = cosa.precio

                // Renderizo el DOM
                function capturoElemento( clase) {
                    document.getElementById(`${clase}`)
                }
                var contenedor = capturoElemento("contenedor")


                 var contenedor = document.getElementById("contenedor")
                var carta = document.createElement("div")
                carta.className = "card"
                var img = document.createElement("img")
                img.className = "card-img-top"
                img.src = farmaImg
                img.alt = "producto"
                var titulo = document.createElement("h6")
                var desc = document.createElement("p")
                var cajita = document.createElement("div")
                cajita.className = "cajitaM"
                var btnComprar = document.createElement("button")
                 btnComprar.addEventListener("click", ()=>{
                    event.preventDefault()
                    swal("¿Queres comprar esto?", {
                        buttons: ["No", "Si"],
                      });
                 })
                btnComprar.className = "btn btn-dark"
                btnComprar.innerText = "Comprar"
                var precioCartel = document.createElement("p")
                precioCartel.className = "precioCartel"
                precioCartel.innerText = `$ ${precio}`
                // If para ultimas unidades
                if (cosa.stock <= 5) {
                    var cajaStock = document.createElement("div")
                    cajaStock.className = "card-footer text-muted text-center"
                    cajaStock.className = "caja"
                    var cartelStock = document.createElement("p")
                    cartelStock.innerText = "Últimas Unidades"
                    cajaStock.append(cartelStock)
                } else if (cosa.stock >= 5) {
                    var cajaStock = document.createElement("div")
                    var cartelStock = document.createElement("p")
                    cartelStock.innerText = " "
                    cajaStock.append(cartelStock)
                }
                titulo.className = "card-title"
                titulo.innerText = tituloN
                desc.className = "card-text"
                desc.innerText = descripcion


                cajita.append(precioCartel, btnComprar)
                carta.append(img, titulo, desc, cajita, cajaStock)
                contenedor.append(carta)

              

            })
        }
        if (document.getElementById("toys")) {
            grillaCosas(juguetes)
        }
        if (document.getElementById("farm")) {
            grillaCosas(farmacos)
        }


    }



    )

 