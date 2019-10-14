import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPetsComponent,
    EditPetComponent,
    NewPetComponent,
    ViewPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
