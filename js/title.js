/**
let titulo = "The Z Warriors";  
let titulo_clon;
let letra = '...........................';
let iteracion = -1;
document.title = titulo;
let largo_titulo = titulo.length;
document.title = titulo;
var time_shooter = null; //por los lol-es
let retraso_ms = 500; //espacio de tiempo entre cambio de letras en milisegundos

function mover_titulo(){
	if(iteracion < largo_titulo){
		titulo_clon = letra.substring(0,iteracion+1) + titulo.substring(iteracion+1);
		iteracion +=1;
	}
	else{
		iteracion = -1;
	}
	document.title = titulo_clon;
	time_shooter = setTimeout("mover_titulo()", retraso_ms);  //llamada recursiva con retraso
};

window.addEventListener('load', mover_titulo)
**/

/**********************************************
**               OTRA VERSION                **
**********************************************/
// window.addEventListener('load', mover_titulo);

const titulo = "The Z Warriors";
let titulo_mutable = titulo;  
document.title = titulo_mutable;

function mover_titulo(){
  const titleArray = titulo_mutable.split('');
  if (titleArray.every(e => e === '.')) {
    document.title = titulo_mutable = titulo;
    return;
  }

  for (let i in titleArray) {
    if ( titleArray[i] === '.' ) continue;
    titleArray[i] = '.';
    break;
  }

  document.title = titulo_mutable = titleArray.join('');
};

/**********************************************
 **                 VERSION 2                 **
 **********************************************/
function mover_titulo2(){
  if (!(titulo_mutable.match(/[a-z ]/i))) return document.title = titulo_mutable = titulo;
  
  const regex = /[a-z ]/i;
  document.title = titulo_mutable = titulo_mutable.replace(regex, '.');
}

/**********************************************
**                Y...ACCIÓN                 **
**********************************************/
const id = setInterval(mover_titulo2, 1000);