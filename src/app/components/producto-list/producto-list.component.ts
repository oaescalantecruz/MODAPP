import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  standalone: true,
  imports: [ProductoItemComponent, NgFor, NgIf],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy{
  producto: Producto[] = [];
  productoSub: Subscription | undefined;

  constructor (private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
    .subscribe({
      next: ( producto: Producto[] ) => {
        this.producto = producto
        console.log(this.producto)
      },
      error: ( err: any ) => {
        console.error(err)
      },
      complete: () => {
        console.log('Completado')
      }
    })
  }

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }

}
