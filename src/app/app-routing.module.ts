import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '', component:RegistrationComponent},
  {path: 'thank-you', component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
