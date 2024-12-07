document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo);

        document.getElementById('resultado-valor').innerText = numeroAleatorio + 1 
        document.querySelector('.resultado').style.display = 'block';
    })
})

document.addEventListener('DOMContentLoaded', function() {
    
})
