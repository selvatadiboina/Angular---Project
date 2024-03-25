import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './users/new-user/new-user.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './users/login/login.component';
import { PaymentComponent } from './users/payment/payment.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
{path:'register',component:NewUserComponent},
{path:'payment',component:PaymentComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
