import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/marcador.class';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar/mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores:Marcador[] =[];

  lat: number = 6.217;
  lng: number = -75.567;

  constructor( private snackBar:MatSnackBar,
               public dialog: MatDialog) {
    // const nuevoMarcador = new Marcador(6.217, -75.567);
    
    // this.marcadores.push( nuevoMarcador);

    if(localStorage.getItem('marcadores'))
    {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit() {
  }

  agregarMarcador( evento)
  {
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);

    const coords: {
      lat:number, 
      lng:number
    } = evento.coords;

    const nuevoMarcador = new Marcador( coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();
    this.snackBar.open('Mensaje Agregado', 'Cerrar',{
      duration: 2000
    });
  }

  borrarMarcador(i:number)
  {
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Mensaje Eliminado', 'Cerrar',{
      duration: 2000
    });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  editarMarcador( marcador:Marcador ){

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);

    if( !result)
    {
      return;
    }
    marcador.titulo = result.titulo;
    marcador.descripcion = result.descripcion;
    this.guardarStorage();
    this.snackBar.open('Marcador Editado', 'Cerrar',{
      duration: 2000
    });
  });

  
  
}
