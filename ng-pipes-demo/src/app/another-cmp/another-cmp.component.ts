import { Component } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-another-cmp',
  standalone: true,
  imports: [],
  templateUrl: './another-cmp.component.html',
  styleUrl: './another-cmp.component.css'
})
export class AnotherCmpComponent {
  annyeong;
  constructor(private newservice:NewserviceService) {
    this.annyeong = this.newservice.hello;
  }
}
