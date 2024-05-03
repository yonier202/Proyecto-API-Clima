const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');

const formulario= document.querySelector('#formulario');

document.addEventListener('DOMContentLoaded', ()=>{
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault();
    console.log('Buscando el clima');

    //validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === "" || pais === "") {
        mostrarError('Ambos campos son obligatorios');
        
        return;
    }

    //consultar la API
}

function mostrarError(mj) {

    const alerta=document.querySelector('.bg-red-100');
    //validar para solo 1 alerta
    if (!alerta) {
        const mensaje = document.createElement('div');
        mensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3'
        , 'rounded','max-w-sm','mx-auto', 'mt-6', 'text-center');
        mensaje.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mj}</span>
        `;
        container.appendChild(mensaje);

        setTimeout(() => {
            mensaje.remove();
        }, 5000);

    }
    
    
}