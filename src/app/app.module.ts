import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo de importaciones de los componentes
import { MaterialModule } from './material.module';

//Importacion del mapa
import { AgmCoreModule } from '@agm/core';

//Componentes
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCouQ77XlkjFoXrSjK_NeeiF9tvgVDdmvk'
    })   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
