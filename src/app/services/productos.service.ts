import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductosIdx } from "../interfaces/producto-idx-interface";
import { Producto } from "../interfaces/productos-interface";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  productosIdx: ProductosIdx[] = [];
  productoFiltrado: ProductosIdx[] = [];

  producto: Producto;
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
  cargarProductos() {
    return new Promise((resolve, reject) => {
      const url = `https://angular-html-2d458.firebaseio.com/productos_idx`;
      this.http.get(`${url}.json`).subscribe((resp: ProductosIdx[]) => {
        console.log((this.productosIdx = resp));
        resolve();
      });
    });
  }
  getProducto(id: string) {
    const url = `https://angular-html-2d458.firebaseio.com/productos/${id}`;
    return this.http.get(`${url}.json`);
  }
  buscarProducto(termino: string) {
    if (this.productosIdx.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }
  private filtrarProductos(termino: string) {
    console.log(this.productosIdx);
    this.productosIdx.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>=0||prod.titulo.indexOf(termino)>=0){
        this.productoFiltrado.push(prod);
      }
    })
    
    }
  }

