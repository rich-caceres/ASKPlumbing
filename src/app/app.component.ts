import { Component } from '@angular/core';
import { FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCollapsed = true;
  title = 'A.S.K. Plumbing & Heating';
  services = ['Toilet installations and Repairs', 
              'Sink Installations and Repairs', 
              'Water heater repairs and installation',
              'Gas Piping installing',
              'Plumbing maintenance and repair', 
              'Boilers installations and service', 
              'Sump Pumps',
              'Water filtration installations'];
  businessStatement = 'Serving the North Shore area, ASK plumbing and heating is committed to providing exceptional service and superior customer care. You can trust ASK plumbing and heating to handle all of your service needs and do so with a smile. Here at ASK plumbing and heating we strive to make sure that the customer is satisfied, no job is too small!';
  shortStatements = ['A licensed and insured, local technician with the expertise for your specific needs.',
                     'Quality service and better customer care.',
                     'Attention to detail is the name of the game.',
                     'Prompt service with professional delivery.',
                     'Quality work from quality plumbers.'];
  telephone = '978-746-6012';
  email = 'andrew@askplumbingandheating.com';

  constructor(private fb: FacebookService) {

    const initParams: InitParams = {

      appId: '761665495114581',
      xfbml: true,
      version: 'v14.0',
      autoLogAppEvents: true,
    }
    fb.init(initParams);
  }

  returnStatement(shortStatements: Array<string>) {
    return shortStatements[Math.floor(Math.random() * shortStatements.length)];
  }

}
