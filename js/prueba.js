/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */

function validarForm() {
    var c1 = document.getElementById('nom');
    var c2 = document.getElementById('email');
    var c3 = document.getElementById('ape');
    var c4 = document.getElementById('telf');
    var c5 = document.getElementById('info');
    var c6 = document.getElementById('obs');

    var val=document.getElementById('validar')
    var val2=document.getElementById('validar2')
    var nombre=c1.value;
    var correo=c2.value;

    if(nombre==null || nombre.length == 0 || /^\s+$/.test(nombre) || correo==null || correo.length == 0 || /^\s+$/.test(correo)){
        val.style.display='none';
        val2.style.display='block';
    }
    else{
        if (!(/\S+@\S+\.\S+/.test(correo))) {
            alert('ERROR: Debe escribir un correo válido');
            return false;
        }
        else{  
        val2.style.display='none';
        val.style.display='block'; }
    }

    if (!(/\S+@\S+\.\S+/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        return false;
    }


    alert("Nombre: " + c1.value + "\n" +
        "Apellidos: " + c3.value + "\n" +
        "Teléfono: " + c4.value + "\n" +
        "Correo: " + c2.value + "\n" +
        "Interés en: " + c5.value + "\n" +
        "Observaciones: " + c6.value + "\n");


    return true;
}