const reservada = "<span style='color: mediumslateblue;'>";
const nomFuncion = "<span style='color: khaki;'>";
const llaves = "<span style='color: yellow;'>";
const nomVar = "<span style='color: lightblue;'>";
const string = "<span style='color: #ff7f50;'>";
const tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

var app = document.getElementById('skills');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .typeString(
    `${reservada}function</span> ${nomFuncion}skills</span>${llaves}() {</span><br/>` +
      `${tab}${reservada}let</span>${nomVar} frontEnd </span> = ` +
      `${string} 'HTML5'</span> + ${string} 'CSS3'</span> + ${string} 'JS'</span> + ${string} 'TS'</span> + ${string} 'VUE'</span> + ${string} 'Angular'</span>;<br/>` +
      `${tab}${reservada}let</span>${nomVar} backEnd </span> = ` +
      `${string}'Java'</span> + ${string} 'TS'</span> + ${string} 'Python'</span> + ${string}'Spring'</span> + ${string}'NestJS'</span> + ${string} 'FastAPI'</span>;<br/>` +
      `${tab}${reservada}let</span> ${nomVar}BBDD</span> = ${string}'MySQL'</span> + ${string}'MongoDB'</span> + ${string}'MS SQL Server'</span>;<br/>` +
      `${tab}${reservada}let</span> ${nomVar}softwareDesign</span> = ${string}'SOLID'</span> + ${string}'Hexagonal Architecture'</span> + ${string}'Microservices'</span> + <br/>` +
      `${string}'Event Oriented Architecture'</span>;<br/>` +
      `${tab}${reservada}let</span> ${nomVar}otherKnowledge</span> = ` +
      `${string}'GIT'</span> + ${string}'Docker'</span> + ${string}'Kubernetes'</span> + ${string}'CI/CD'</span> + ${string}'AWS'</span> + ${string}'Azure'</span> + ${string}'GCP'</span>;<br/><br/>` +
      `${tab}${nomVar}console</span>.${nomFuncion}log</span>${llaves}(</span>${string}'Always learning something new...'</span>${llaves})</span>;<br/> ${llaves}}</span>;`
  )
  .start();
