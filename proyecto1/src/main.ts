import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

var entrada = "";
var listaopciones = ['piedra', 'pael', 'tijera'];
entrada = prompt("Dijita la opcion para jugar");
alert("Juego de piedra papel o tijera");
console.log(entrada);
console.log(listaopciones[0]);


function cpu(){
  console.log(listaopciones.length);
}
cpu();
function jugar(){}