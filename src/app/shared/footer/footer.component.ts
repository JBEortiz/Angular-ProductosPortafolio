import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from 'src/app/services/info-paginas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();


  constructor(private infoPaginaService:InfoPaginasService) { }

  ngOnInit() {
  }

}
