import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Contact } from './app.contactForm'
import { FacebookPLugin } from './app.facebook'

@NgModule({
  declarations: [
    AppComponent,
    Contact,
    FacebookPLugin
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, Contact]
})
export class AppModule { }
