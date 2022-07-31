import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Contact } from './app.contactForm'
import { FacebookModule } from 'ngx-facebook'

@NgModule({
  declarations: [
    AppComponent,
    Contact
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, Contact]
})
export class AppModule { }
