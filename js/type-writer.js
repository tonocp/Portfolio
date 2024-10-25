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
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}let</span>${nomVar} frontEnd </span> = ` +
      `${string} 'JavaScript' </span> + ${string} 'TypeScript' </span> + ${string} 'VUE'</span>+ ${string} 'Angular'</span> ;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}let</span>${nomVar} backEnd </span> = ` +
      `${string}'Java'</span> + ${string} 'TypeScript' </span> + ${string} 'Python' </span> + ${string}'Spring'</span> + ${string}'NestJS'</span> + ${string} 'FastAPI' </span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}let</span> ${nomVar}BBDD</span> = ${string}'MySQL'</span> + ${string}'MongoDB'</span> + ${string}'MS SQL Server'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}let</span> ${nomVar}softwareDesign</span> = ${string}'SOLID'</span> + ${string}'Hexagonal Architecture'</span> + ${string}'Microservices'</span> + ${string}'Event Oriented Architecture'</span>;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${reservada}let</span> ${nomVar}otherKnowledge</span> = ` +
      `${string}'GIT'</span> + ${string}'Docker'</span> + ${string}'Kubernetes'</span> + ${string}'CI/CD'</span> + ${string}'AWS'</span> + ${string}'Azure'</span> + ${string}'GCP'</span> ;<br/>` +
      `&nbsp;&nbsp;&nbsp;&nbsp;${nomVar}console</span>.${nomFuncion}log</span>${llaves}(</span>${string}'Always learning something new...'</span>${llaves})</span>;<br/> ${llaves}}</span>;`
  )
  .start();
