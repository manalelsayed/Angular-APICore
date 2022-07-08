import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ViewPersonComponent } from './person/view-person/view-person.component';
import { AddEditPersonComponent } from './person/add-edit-person/add-edit-person.component';
import { PersonApiService } from './person-api.service';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ViewPersonComponent,
    AddEditPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
