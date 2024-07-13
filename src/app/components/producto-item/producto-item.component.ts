import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-producto-item',
  standalone: true,
  imports: [PercentPipe, RouterLink],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent implements OnInit{
 @Input() producto: Producto | undefined;
 ngOnInit(): void {
   console.log(this.producto)
 }
}
