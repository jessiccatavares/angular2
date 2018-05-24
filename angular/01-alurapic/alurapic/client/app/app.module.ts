import { NgModule } from '@angular/core';
import  {BrowserModule } from '@angular/platform-browser'; //indica que a app vai rodar em um navegador
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';


// ngmodule transforma minha classe em um módulo do angular
@NgModule({
    imports: [BrowserModule, FotoModule], //esse modulo vai rodar em um browser
    declarations: [AppComponent], //o que faz parte dele, quais meus componentes
    bootstrap: [AppComponent] //primeiro componente que é carregado, que é iniciado

})
export class AppModule{ }