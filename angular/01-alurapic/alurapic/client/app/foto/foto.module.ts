import { NgModule }  from '@angular/core';
import { FotoComponent }   from './foto.component';

@NgModule({
  declarations: [ FotoComponent ],
  exports: [ FotoComponent ] //o que pode ser exportado por outros módulos
})
export class FotoModule { }