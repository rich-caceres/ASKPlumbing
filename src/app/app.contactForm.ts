import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.component.css']
})

export class Contact {
  contactForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    subject: new FormControl(''),
    comments: new FormControl(''),
  })

  onSubmit() {
    //TODO send information from above to the customer
  }
}
