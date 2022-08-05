import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContacterService } from './contacter.service';

@Component({
  selector: 'app-root-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.component.css']
})



export class Contact {
 

  contactForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    subject: ['', Validators.required],
    comments: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private contactService: ContacterService) { }

  onSubmit() {
    //TODO send information from above to the customer
  }
}
