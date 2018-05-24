import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //carregar o primeiro modulo da aplicação
import { AppModule } from './app.module'; // importa o módulo que será carregado primeiro
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //platform vai bootar o appmodule