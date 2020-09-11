import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InfoPagina } from "src/app/interfaces/info-pagina.interface";
import { InfoPaginasService } from "src/app/services/info-paginas.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private infoPaginaService: InfoPaginasService,
    private router: Router
  ) {}

  ngOnInit() {}

  
  buscarProducto(termino: string) {
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(['/search',termino]);
  }
}
