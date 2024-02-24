const clave= {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

//Mostrar instrucciones
function Display(){
    var lis = document.getElementById('ReglasEncriptador');
    if (lis.style.display === "none"){
        lis.style.display = "block";
    } else{
        lis.style.display = "none";
    }

}

// Funciones para encriptar

function Encriptar(){
    var mensaje = document.getElementById('mensaje').value;
    var resultado='';

    for (var i = 0; i < mensaje.length; i++){
        var char = mensaje[i];

        if(char === 'e' || char === 'i' || char === 'a' || char === 'o' ||char === 'u' ){
            resultado += clave[char];

            } else{
                resultado += char;
            }
    } 
    
    document.getElementById('resultado').innerText=resultado;
} 

function Desencriptar(){
    var msj = document.getElementById('mensaje').value;
    var res='';
    const RegExp = /(enter|imes|ai|ober|ufat)/g;
    res = msj.replace(RegExp, (match) =>{
        return{
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        } [match];});
        document.getElementById('resultado').innerText=res;

}

// Copiar en el portapapeles 
async function copiarAlPortapapeles(targetID) {
    var resultado = document.getElementById(targetID).innerText;
    if (resultado ===''){
        alert('¡No hay texto para copiar!');
    } else{
        try {
            await navigator.clipboard.writeText(resultado);
            alert('¡Texto copiado al portapapeles!');
          } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
          }
    }

  }
