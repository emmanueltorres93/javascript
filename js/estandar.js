
const prodMax=960;
const prodMin=500;
let maquinaConEstandar;
let produccion;

function Estandar(iter) {

    if(operarioDeProduccion == true){
        if(produccion >= prodMin && produccion <= prodMax) {
            // console.log("buena produccion");
            document.write(`Operario ${iter + 1}: tu produccion es 
            ${produccion}productos, bien, segui asi!<br>`);
        }else if(produccion <=0) {
            // console.log("ponete a laburar vago");
            document.write(`Operario ${iter + 1}: tu produccion es 
            ${produccion}productos, supongo que tuviste problemas de maquina o estas re echado.<br>`);
        }else if(produccion < prodMin) {
            // console.log("venis lento");
            document.write(`Operario ${iter + 1}: tu produccion es 
            ${produccion}productos, metele un poco de pata que tenes bajo estandar<br>`);
        
        }else {
            // console.log("que sos forro de la fabrica?");
            document.write(`Operario ${iter + 1}: tu produccion es 
            ${produccion}productos, banca forraso o te pagan produccíon?<br>`);
        }
    }else if(maquinaConEstandar == false) {
        // console.log("estandar de algunos sectores");
        document.write(`Operario ${iter + 1}: este estandar es para operarios, no jefes o calidad<br>`);
    }
}

function ConsultaUsuario() {

    for(let i = 0; i < 3; i++) {
        let respuesta = prompt("Sos operario? Si o No?");
        respuesta = respuesta.toUpperCase();
            if(respuesta == "SI") {
                operarioDeProduccion=true;
                produccion = prompt("ingresa cantidad tu cantidad de produccíon");
                produccion = parseInt(produccion);
            }else if(respuesta == "NO") {
                operarioDeProduccion = false;
            }else {
                alert("solo SI o NO gracias");
                i -= 1;
                operarioDeProduccion = undefined;
            }
        Estandar(i);
        }

}

ConsultaUsuario();