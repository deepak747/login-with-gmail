import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentHandler:any = null;
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }


  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51M1UtbSEGW2kaT4Ba1fR4HBLBlQRpWpkAaN4fRjio661SddyYxBf1gbo3L2I1Gt2ZOetUY9DAMu4dXL99p1crmhY00zEIc4IBD',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'FreakyJolly',
      description: 'Buying a Hot Coffee',
      amount: amount * 100
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M1UtbSEGW2kaT4Ba1fR4HBLBlQRpWpkAaN4fRjio661SddyYxBf1gbo3L2I1Gt2ZOetUY9DAMu4dXL99p1crmhY00zEIc4IBD',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }




}
