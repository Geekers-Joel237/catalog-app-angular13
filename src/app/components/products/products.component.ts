import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { IProduct } from 'src/app/models/product.models';
import { ProductsService } from 'src/app/services/products.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // products$!:Observable<IProduct[]>;
  products$!:Observable<AppDataState<IProduct[]>>;
  readonly DataStateEnum = DataStateEnum;
  // products$ observable | async
  constructor(private productsService: ProductsService,private router:Router) { }

  ngOnInit(): void {
    // this.onGetAllProducts();
  }

  onGetAllProducts():void{
    // this.productsService.getAllProducts().subscribe(products=>{
    //   this.products = products;
    // },err=>{
    //   console.log(err);

    // })

    //second method
    this.products$ = this.productsService.getAllProducts()
    .pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onGetSelectedProducts():void  {
    this.products$ = this.productsService.getSelectedProducts()
    .pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onGetAvailableProducts():void {
    this.products$ = this.productsService.getAvailableProducts()
    .pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onSearch(dataForm:any):void{
    this.products$ = this.productsService.searchProducts(dataForm.keyword)
    .pipe(
      map((data)=>({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    )
  }

  onSelect(item:IProduct):void{
    this.productsService.select(item)
    .subscribe(
      (data)=>{
        item.selected = data.selected;
      }
    )
  }

  onDelete(item:IProduct):void{
    // let conf = confirm('Etes vous sur ?');
      this.productsService.deleteProduct(item)
      .subscribe(
        (data)=>{
          console.log(data);
          this.onGetAllProducts();

        }
      )
    }

  onNewProduct():void{
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(item:IProduct):void{
    this.router.navigateByUrl("/editProduct/"+item.id);
  }

  onActionEventProductsNavBar($event:ActionEvent):void{
    switch($event.type){
      case ProductActionsTypes.GET_ALL_PRODUCTS :
        this.onGetAllProducts();
        break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS :
        this.onGetSelectedProducts();
        break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS :
        this.onGetAvailableProducts();
        break;
      case ProductActionsTypes.NEW_PRODUCT :
        this.onNewProduct();
        break;
      case ProductActionsTypes.SEARCH_PRODUCTS :
        this.onSearch($event.payload);
        break;

      }
    }

    onActionEventProductsList($event:ActionEvent):void{
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
      }

  }





