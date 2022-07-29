import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Contact } from './app.contactForm'
import { FacebookPlugin } from './app.facebook'
import { FacebookModule } from 'ngx-facebook'

@NgModule({
  declarations: [
    AppComponent,
    Contact,
    FacebookPlugin
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
