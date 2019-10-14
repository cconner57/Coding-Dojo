import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './all-pets/all-pets.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { ViewPetComponent } from './view-pet/view-pet.component';

const routes: Routes = [
  { path: 'pets', component: AllPetsComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'pets/:id/edit', component: EditPetComponent },
  { path: 'pets/:id', component: ViewPetComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
