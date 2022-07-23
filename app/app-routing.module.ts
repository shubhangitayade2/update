import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'account',
  component: AccountComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'flight',
  component: FlightComponent
},
{
  path: 'booking',
  component: BookingComponent
},
{
  path: 'payment',
  component: PaymentComponent
},
{
  path: 'update',
  component: UpdateComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }