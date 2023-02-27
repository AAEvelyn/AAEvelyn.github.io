let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#6e9167;"> Desarrollo de sitios web y piezas en NX</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
