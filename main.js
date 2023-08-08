let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#6e9167;"> Estudiante de Ingenieria en Tecnologias de Mnaufactura </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
