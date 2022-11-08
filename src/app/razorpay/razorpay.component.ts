import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})
export class RazorpayComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

   options = {
    "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "rzp_test_7HdkaZ1xFGPomB", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Deepak Dubey ",
        "email": "dubey.kumar@example.com",
        "contact": "9030000000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};



       rzp1:any;
  pay(){
       console.log("Mt--")
       this.options.amount="60000 "
     this.rzp1 = new this.common.nativeWindow.Razorpay(this.options);
     this.rzp1.open();  
  }

}
