import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Contact } from './app.contactForm';
import { FacebookModule } from 'ngx-facebook';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { ContacterService } from './contacter.service';

@NgModule({
  declarations: [
    AppComponent,
    Contact
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, NgbModule,
    FacebookModule.forRoot(),
    HttpClientModule
  ],
  providers: [ContacterService],
  bootstrap: [AppComponent, Contact]
})
export class AppModule { }
