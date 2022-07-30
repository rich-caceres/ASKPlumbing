import { Component } from '@angular/core';
import { FacebookService, InitParams, FBPageComponent } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'A.S.K. Plumbing & Heating';
  services = ['Drainage Services', 'Leaky Pipes Repair', 'Water Heater Repair', 'Sewer Stoppage Cleaning', 'Yearly Plumbing Inspection', 'Plumbing Diagnostics'];
  businessStatement = 'No Job is too big or too small, call us today!';
  telephone = '978-746-6012';
  email = 'andrew@askplumbingandheating.com';
}

