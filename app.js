const clave= {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const llave={
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
}

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
    var mensaje = document.getElementById('desencriptar').value;
    var res='';

    for (var i = 0; i < mensaje.length; i++){
        var char = mensaje[i];
        if(char === 'enter' || char === 'imes' || char === 'ai' || char === 'ober' ||char === 'ufat' ){

            res += llave[char];

            } else{
                res += char;
            }
            console.log (char);
    }

    document.getElementById('res').innerText=res;
}


// Copiar en el portapapeles 
async function copiarAlPortapapeles() {
    var resultado = document.getElementById('resultado').innerText;
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

  async function copiarAlPortapapelesDes() {
    var resultado = document.getElementById('res').innerText;
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