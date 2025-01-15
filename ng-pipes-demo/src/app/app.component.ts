import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );
  testObject = {
    name: 'Jimwel Valdez',
    age: 20,
    food: 'Cassava cake'
  };
  price: number = 20000;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}
