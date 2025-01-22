import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  getProducts() {
    return [
      {
        productid: 'P-101',
        name: 'Logitech Mouse',
        description: '6 Button Mechanical Mouse',
        price: '899.00'
      },
      {
        productid: 'P-102',
        name: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: '1,099.00'
      },
      {
        productid: 'P-103',
        name: 'Mechanical KeyBoard',
        description: 'Hot-swappable RGB Backlit',
        price: '2,395.00'
      },
      {
        productid: 'P-104',
        name: 'Oculus Meta',
        description: 'All-in-one Gaming Headset',
        price: '22,450.00'
      },
    ];
  }
}
