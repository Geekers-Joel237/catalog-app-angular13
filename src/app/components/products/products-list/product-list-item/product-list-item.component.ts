import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.models';
import { EventdriverService } from 'src/app/services/eventdriver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() item!:IProduct;
  // @Output() productListItemEventEmitter:EventEmitter<ActionEvent> = new EventEmitter();
  constructor(private eventdriverService:EventdriverService) { }

  ngOnInit(): void {
  }

  onSelect(item:IProduct): void {
    // this.productListItemEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:item})
    this.eventdriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:item})
  }

  onDelete(item:IProduct): void {
    // this.productListItemEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:item})
    this.eventdriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:item})
  }

  onEdit(item:IProduct): void {
    // this.productListItemEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:item})
    this.eventdriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:item})
  }


}
