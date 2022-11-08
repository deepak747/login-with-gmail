import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';
import { RazorpayComponent } from './razorpay/razorpay.component';

const routes: Routes = [
  {path:"location", component:LocationComponent},
  {path:"payment", component:PaymentComponent},
  {path:"razorpay", component:RazorpayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
