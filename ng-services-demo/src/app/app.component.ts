import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: {
    productid: string;
    name: string;
    description: string;
    price: string;
  }[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
  
}
