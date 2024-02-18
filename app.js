const clave= {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

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
    var msj = document.getElementById('desencriptar').value;
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