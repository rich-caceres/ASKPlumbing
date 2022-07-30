import { APP_ID, Component } from '@angular/core';
import { FacebookService, InitParams, FBPageComponent } from 'ngx-facebook';

@Component({
  selector: 'app-fb-profile',
  templateUrl: './app.facebook.html',
  styleUrls: ['./app.component.css']
})

export class FacebookPlugin {

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {

      appId: '761665495114581',
      xfbml: true,
      version: 'v14.0',
      autoLogAppEvents: true,
    }
    fb.init(initParams);
  }
}


