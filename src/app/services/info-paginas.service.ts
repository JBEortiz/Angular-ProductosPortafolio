import {map} from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info:InfoPagina={};
  equipo:any[]=[];
  cargada:boolean=false;
  constructor(private http:HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
   }

   cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina)=>{
      console.log(resp);
      this.cargada=true;
      this.info=resp;
    });
   }
   cargarEquipo(){
     const url=`https://angular-html-2d458.firebaseio.com/equipo`;
     this.http.get(`${url}.json`).subscribe((resp:any[])=>{
       this.equipo=resp;
     });
   }
}
