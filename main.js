window.addEventListener('load', function () {

   var titulo = document.querySelector('#titulo');

   var saludo = document.querySelector('#saludo');

   var span = document.querySelector('span');

   titulo.addEventListener('mouseover', () => {
      let nombre = prompt('¿COMO TE LLAMAS?');
      saludo.innerHTML = saludo ? `BIENVENIDO ${nombre}` : `BIENVENIDO`;
      saludo.style.textTransform = 'uppercase';
      titulo.style.display = 'none';
      span.style.display = 'inline';
   });
   span.onclick = function () {
      document.querySelector('.bienvenida').style.display = 'none';
      document.querySelector('.personajes').style.display = 'flex';
   }



   /* Capturar pesonajes */
   let bart = document.querySelector('#bart');
   let lisa = document.querySelector('#lisa');
   let homero = document.querySelector('#homero');
   let marge = document.querySelector('#marge');
   let maggie = document.querySelector('#maggie');
   let milhouse = document.querySelector('#milhouse');
   let burns = document.querySelector('#burns');
   let bobPatinio = document.querySelector('#bobPatinio');
   let flanders = document.querySelector('#flanders');
   let gorgory = document.querySelector('#gorgory');
   let duffman = document.querySelector('#duffman');
   let nelson = document.querySelector('#nelson');
   /* Asignarle a cada personaje su evento correspondiente, así como también su funcionalidad */

   const cambioPersonaje = function (event) {
      event.currentTarget.classList.toggle('personaje-seleccionado');
   };

   bart.addEventListener('click', cambioPersonaje);
   lisa.addEventListener('dblclick', cambioPersonaje);
   homero.addEventListener('click', cambioPersonaje);
   marge.addEventListener('mouseover', cambioPersonaje);
   maggie.addEventListener('mouseout', cambioPersonaje);
   milhouse.addEventListener('click', cambioPersonaje);
   burns.addEventListener('mouseover', cambioPersonaje);
   bobPatinio.addEventListener('dblclick', cambioPersonaje);
   flanders.addEventListener('mouseover', cambioPersonaje);
   duffman.addEventListener('dblclick', cambioPersonaje);
   gorgory.addEventListener('mouseover', cambioPersonaje);
   nelson.addEventListener('click', cambioPersonaje);


   var boton = document.querySelector('.boton');

   /* Asignarle evento a la variable boton */

   boton.onclick = function () {
      console.log(document.querySelectorAll('.personaje-seleccionado'));
   }

})