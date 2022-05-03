const reservada = "<span style='color: mediumslateblue;'>";
const nomFuncion = "<span style='color: khaki;'>";
const llaves = "<span style='color: yellow;'>";
const nomVar = "<span style='color: lightblue;'>";
const string = "<span style='color: #ff7f50;'>";

var app = document.getElementById('skills');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .typeString(
    `${reservada}function</span> ${nomFuncion}skills</span>${llaves}() {</span><br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}var</span>${nomVar} frontEnd </span> = ` +
      `${string} 'HTML5' </span> + ${string} 'CSS3' </span> + ${string}'CMS'</span> + ${string} 'JavaScript' </span> + ${string} 'Vue.js'</span>+ ${string} 'Angular'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}var</span>${nomVar} backEnd </span> = ` +
      `${string}'Java'</span> + ${string}'PHP'</span> + ${string} 'TypeScript' </span> + ${string}'Node.js'</span> + ${string}'Express.js'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}var</span> ${nomVar}BBDD</span> = ${string}'MySQL'</span> + ${string}'MongoDB'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}var</span> ${nomVar}otrosConocimientos</span> = ` +
      `${string}'GIT'</span> + ${string}'GitFlow'</span> + ${string}'Docker'</span> + ${string}'Kubernetes'</span> + ${string}'CI/CD'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${nomVar}console</span>.${nomFuncion}log</span>${llaves}(</span>${string}'Always learning something new...'</span>${llaves})</span>;<br/> ${llaves}}</span>;`
  )
  .start();
