import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  title = 'ngtodo-main';
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
}
makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51Owf1WSHEV5rjSW3KCEY1REVBbxAROXBPuSnV2ThMjizAWlJpVNc1cVyAFlyERUh7Y3OtdrypT0bUd1ViVIWqObA000wTHAlmv',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Payment Gateway',
    description: '3 widgets',
    amount: amount * 100,
  });
}
invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51Owf1WSHEV5rjSW3KCEY1REVBbxAROXBPuSnV2ThMjizAWlJpVNc1cVyAFlyERUh7Y3OtdrypT0bUd1ViVIWqObA000wTHAlmv',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}
}