import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product.models';
import { EventdriverService } from 'src/app/services/eventdriver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$!:Observable<AppDataState<IProduct[]>>;
  // @Output() productsListEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;
  constructor(private eventdriverService: EventdriverService) { }

  ngOnInit(): void {
  }

 /* onSelect(item:IProduct):void{
    // this.productsListEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:item})
    this.eventdriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:item});
  }

  onEdit(item:IProduct):void{
    // this.productsListEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:item})
  }

  onDelete(item:IProduct):void{
    // this.productsListEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCT,payload:item})
  }

  onActionEventProductItem($event:ActionEvent):void{
    switch($event.type){
      case ProductActionsTypes.SELECT_PRODUCT :
        this.onSelect($event.payload);
        break;
      case ProductActionsTypes.EDIT_PRODUCT :
        this.onEdit($event.payload);
        break;
      case ProductActionsTypes.DELETE_PRODUCT :
        this.onDelete($event.payload);
        break;

      }
  }*/
}
