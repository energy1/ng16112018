import { Component, Input } from '@angular/core';
import { IProduct } from '../mock/products';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

}