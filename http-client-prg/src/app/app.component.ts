import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';
import { FormsModule } from '@angular/forms';
import { NgxSearchFilterModule } from 'ngx-search-filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, NgxSearchFilterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client-prg';
  httptodos: any;
  searchString: any;

  constructor(private httpclientList: HttpclientService) {
    this.httpclientList.getTodosRemotely().subscribe((data:any) => {
      this.httptodos = data;
    })
  }
}
