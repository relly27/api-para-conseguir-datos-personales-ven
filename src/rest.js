// const form = document.querySelector('form');

//     form.addEventListener('submit', event => {
//       event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

//       const cedula = document.getElementById('mi-input').value; // Obtener el valor de la cedula del campo de entrada
//       const url = `http://localhost:4000/cedula?cedula=${cedula}`; // Construir la URL de la solicitud con la cedula como parámetro

//       fetch(url)
//         .then(response => response.text())
//         .then(data => {
//           // Procesar los datos de respuesta
//           //console.log(data);
//         })
//         .catch(error => {
//           // Manejar errores
//           alert(error);
//         });
//     });


const handleSubmit = (e) => {
    e.preventDefault();
    const cedula = document.querySelector('#mi-input').value
    //console.log(document.querySelector('#mi-input').value)
    
    $.get(`http://localhost:4000/cedula?cedula=${cedula}`, data => {
        const dni = $(data).find('[align="left"]').eq(1).text().replace(/\D/g, '');
        const name = $(data).find('[align="left"]').eq(3).text();
        //var id = $('#imp')
        // Crea un nuevo elemento p
      
        $("#imp").html(`<h1>dni: ${dni}</h1>`);
        $("#imp1").html(`<h1>name: ${name}</h1>`);
      //console.log(id)
      
      });
}
document.addEventListener('submit', handleSubmit);

