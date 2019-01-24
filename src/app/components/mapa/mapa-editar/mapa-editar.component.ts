import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Marcador } from 'src/app/clases/marcador.class';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;

  constructor(
    public fb:FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador){
      console.log(data);
      this.forma = fb.group({
        'titulo': data.titulo,
        'descripcion': data.descripcion
      });
    }

  ngOnInit() {
  }

  guardarMarcador()
  {
    this.dialogRef.close(this.forma.value);
  }

  onNoClick():void{
    this.dialogRef.close();
  }

}
