import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() title:string = ''
  @Input() imgUrl: string = ''
  @Input() category: string =''
  @Input() price: number = 0

}
