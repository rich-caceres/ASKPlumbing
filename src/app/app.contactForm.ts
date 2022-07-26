import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContacterService } from './contacter.service';
import { AppComponent } from './app.component'

@Component({
  selector: 'app-root-form',
  templateUrl: './app.form.html',
  styleUrls: ['./app.component.css']
})

export class Contact {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.required],
    subject: ['', Validators.required],
    comments: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private contactService: ContacterService) { }

  onSubmit(contactForm: any){
    this.contactService.postMessage(contactForm).subscribe(response => { this.contactForm.reset(); alert("Your message has been sent!"); console.log(response) }, error => (alert("Uh oh, something went wrong on our end. Call or email us!"), console.log({ error })))
   
  }
}
