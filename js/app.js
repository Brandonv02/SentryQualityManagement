// var formulario = document.getElementById('#container');

// container.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('me diste un click')

//     var datos = new FormData(container);

//     console.log(datos)
//     console.log(datos.get('usuario'))
//     console.log(datos.get('pass'))

//     fetch('post.php', {
//         method: 'POST',
//         body: datos
//     })
//     .then(res => res.json())
//     .then( data => {
//         console.log(data)
//         if (data === 'error') {
//             respuesta.innerHTML = `
//             <div class="alert alert-danger" role="alert">
//                 Llena todos los campos 
//             </div>
//             `
//         } else {
//             respuesta.innerHTML = `
//             <div class="alert alert-primary" role="alert">
//                 ${data}
//             </div>
//             `
//         }
//     })

// })


// fetch('http://localhost/SentryQualityManagemenet')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })


// const $container = document.querySelector('#container')


// const $usuario = document.querySelector('#usuario')
// function renderUsuario() {
//     const usuario = formData.get('usuario')
//     $usuario.textContent = usuario
// }

// $container.addEventListener('submit', (Event) => {
//     Event.preventDefault()
//     const formData = new FormData(Event.currentTarget)
//     renderUsuario(formData)
// })