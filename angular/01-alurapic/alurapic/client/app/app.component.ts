import { Component } from '@angular/core';  //importar decorator, transforma a classe em decorator

//decorator é para decorar uma classe
@Component({
    moduleId: module.id,
    selector: 'app', //selector é a maneira como eu vou acessar os meus componentes nas minhas páginas
    templateUrl: './app.component.html' //vai buscar o html que dá uma apresentação pra esse componente
})
    

export class AppComponent{ }