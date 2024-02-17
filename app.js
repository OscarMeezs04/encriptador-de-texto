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
