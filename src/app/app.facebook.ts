import { Component } from '@angular/core';

@Component({
  selector: 'app-fb-profile',
  templateUrl: './app.facebook.html',
  styleUrls: ['./app.component.css']
})

export class FacebookPlugin {

  
  
}

window['fbAsyncInit'] = function () {
  FB.init({
    appId: 761665495114581,
    cookie: true,
    xfbml: true,
    version: 'v14.0'
  });
}
