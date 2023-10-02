
alert("¡Bienvenidos a Cinema233! Ingrese sus datos a continuación por favor.");

let nombre = "";
let apellido = "";

while (!nombre || !apellido) {
    nombre = prompt("Ingresa tu nombre");
    apellido = prompt("Ahora ingresa tu apellido");

    if (!nombre || !apellido) {
        console.log("Debes ingresar los datos solicitados para continuar.");
    }
}

console.log(`¡Bienvenido ${nombre} ${apellido}! Esta es tu selección de películas para el día de hoy`);

let pelicula = prompt(`Elige la película que quieras ver:
1. TENET
2. Dune
3. Oppenheimer
`);

switch (pelicula) {
    case "1":
        console.log("¡Elegiste TENET para ver hoy!");
        break;
    case "2":
        console.log("¡Elegiste Dune para ver hoy!");
        break;
    case "3":
        console.log("¡Elegiste Oppenheimer para ver hoy!");
        break;
    default:
        console.log("Oppenheimer es la opción recomendada del día");
        break;

        alert("Debemos verificar tu edad si quieres ver las películas en cartelera")

        let edad = prompt("ingresa tu edad a continuacion")

        if (edad >= 18) {
            console.log("Ahora puedes continuar")
        } else {
            console.log("Para ver estas peliculas debes ser mayor de edad")
        }
        let extras = "";
        let extrastotal = 0;

        while (extras !== "0" && extras !== "5") {
            extras = prompt(`¡Elige que llevar!

    1. Gaseosa Grande (+$2500)
    2. Pochoclos Grande (+4000)
    3. Cerveza -lata- (+2000$)
    4. 2x1 Pochoclos Medianos y Dos Gaseosas (+7000)
    5. Continuar sin consumir
    0. Ingresa 0 para finalizar.
    `);

            switch (extras) {
                case "1":
                    extrastotal += 2500;
                    break;
                case "2":
                    extrastotal += 4000;
                    break;
                case "3":
                    extrastotal += 2000;
                    break;
                case "4":
                    extrastotal += 7000;
                    break;
                case "5":
                    break;
                case "0":
                    break;
                default:
                    console.log("Fin");
                    break;
            }
        }

        let cantidadentradas = prompt("Antes de finalizar, ingresa cuántas entradas vas a comprar:");
        const entrada = 3000;

        let total = cantidadentradas * entrada + extrastotal;

        alert(`El total a pagar por la cantidad de ${cantidadentradas} entradas y los agregados es de ${total} pesos. ¿Cómo deseas abonar?`);

        let metodoPago;

        do {
            metodoPago = prompt(`Elige el metodo de pago a continuación:

    1. Debito
    2. Credito`);
        } while (metodoPago !== "1" && metodoPago !== "2");

        if (metodoPago === "2") {
            let cuotas;

            do {
                cuotas = prompt(`Cantidad de cuotas disponibles el día de hoy:

    1. 3 cuotas 
    2. 6 cuotas`);
            } while (cuotas !== "1" && cuotas !== "2");

            switch (cuotas) {
                case "1":
                    alert(`Vas a pagar el total de ${total} pesos en 3 cuotas que serían de ${total / 3} pesos.`);
                    break;
                case "2":
                    alert(`Vas a pagar el total de ${total} pesos en 6 cuotas que serían de  ${total / 6} pesos.`);
                    break;
                default:
                    alert("La opción ingresada no está disponible.");
                    break;
            }
        } else {
            alert(`El precio total es de ${total} pesos.`);
        }

        alert(`¡Felicitaciones por llegar hasta aquí ${nombre}, esperamos tenerte de regreso pronto!`);
