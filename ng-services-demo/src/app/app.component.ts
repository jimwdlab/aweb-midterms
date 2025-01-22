import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';
  public employees = [{
    id: 101,
    firstname: 'Joseph',
    lastname: 'Dizon',
    email: 'jdizon@hau.edu.ph',
  },
  {
    id: 102,
    firstname: 'James',
    lastname: 'Atienza',
    email: 'jatienza@hau.edu.ph',
  },
  {
    id: 103,
    firstname: 'John',
    lastname: 'Cena',
    email: 'jcena@hau.edu.ph',
  },
  {
    id: 104,
    firstname: 'Robert',
    lastname: 'Quintana',
    email: 'rquintana@hau.edu.ph',
  },
  {
    id: 105,
    firstname: 'Jimwel',
    lastname: 'Valdez',
    email: 'jlvaldez@student.hau.edu.ph',
  }
  ];
}
