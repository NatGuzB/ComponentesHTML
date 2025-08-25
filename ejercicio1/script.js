
var votosDiseño = 0;
var votosJavaScript = 0;
var votosBasesDatos = 0;
var totalVotos = 0;

// Función votar
function votar(opcion) {
    if (opcion === 'diseno') {
        votosDiseño++;
        document.getElementById('votos-diseno').innerText = 'Votos: ' + votosDiseño;
    } else if (opcion === 'javascript') {
        votosJavaScript++;
        document.getElementById('votos-javascript').innerText = 'Votos: ' + votosJavaScript;
    } else if (opcion === 'basesdatos') {
        votosBasesDatos++;
        document.getElementById('votos-basesdatos').innerText = 'Votos: ' + votosBasesDatos;
    }

    totalVotos = votosDiseño + votosJavaScript + votosBasesDatos;
    document.getElementById('total-votos').innerText = totalVotos;

    alert('¡Gracias por tu voto!');

    if (totalVotos % 5 === 0) {
        console.log('Total acumulado de votos: ' + totalVotos);
    }
}
