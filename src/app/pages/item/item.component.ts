import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Producto } from "src/app/interfaces/productos-interface";
import { ProductosService } from "src/app/services/productos.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  producto: Producto;
  id:string;
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      console.log(parametros["id"]);
      this.productosService
        .getProducto(parametros["id"])
        .subscribe((rps: Producto) => {
          this.id=parametros["id"];
          this.producto = rps;
          console.log(this.producto);
        });
    });
  }
}
