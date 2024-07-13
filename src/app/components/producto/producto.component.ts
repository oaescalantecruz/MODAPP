import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { PercentPipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { PaymentCardComponent } from '../payment-card/payment-card.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [PercentPipe,NgFor, PaymentCardComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit, OnDestroy{
  
  slug: string | undefined;
  producto: Producto | undefined;
  productoSub: Subscription | undefined;
  galeria: Array<any> = [];
  renderGaleria: Boolean = true;
  currentImg: string | undefined;

  constructor(private route: ActivatedRoute, private productoService: ProductoService){}

  ngOnInit(): void {
    
    this.slug= this.route.snapshot.params['id']
    //console.log(this.slug)
    this.productoSub = this.productoService.getProducto()
    .subscribe({
      next: (productos: Producto[]) => {
        this.producto = productos.filter( p => p.slug === this.slug)[0]
        this.currentImg = this.producto.imageUrl[0]
        //console.log(this.currentImg)
        console.log(this.producto)
      },
      error: (err: any) => {
      console.error('Error', err);
    }
    })
  }
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }

  handleChangeImg(itemImg: string){
      this.currentImg= itemImg;
  }

}
